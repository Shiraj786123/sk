'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Send, X, Minus } from 'lucide-react';
import { useWhatsAppUrl } from '../hooks/useWhatsAppUrl';
import { getChatbotReply, mapQuickReply, QUICK_REPLIES } from '../data/chatbotKnowledge';
import '../styles/chatbot.css';

const WELCOME = {
  id: 'welcome',
  role: 'bot',
  text: 'Hi! I\'m Zonzo — your AI assistant at ZonzocTech. Ask me anything: our services, tech questions, business advice, or how we can help your project.',
  links: [{ label: 'Free Consultation', href: '/contact' }],
};

function RobotAvatar({ size = 'md', pulse = false }) {
  const cls = `cbot-robot cbot-robot--${size}${pulse ? ' cbot-robot--pulse' : ''}`;
  return (
    <div className={cls} aria-hidden="true">
      <div className="cbot-robot__antenna" />
      <div className="cbot-robot__head">
        <div className="cbot-robot__eye cbot-robot__eye--left" />
        <div className="cbot-robot__eye cbot-robot__eye--right" />
        <div className="cbot-robot__mouth" />
      </div>
      <div className="cbot-robot__body">
        <div className="cbot-robot__panel" />
        <div className="cbot-robot__arm cbot-robot__arm--left" />
        <div className="cbot-robot__arm cbot-robot__arm--right" />
      </div>
    </div>
  );
}

const Chatbot = () => {
  const whatsappUrl = useWhatsAppUrl();
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([WELCOME]);
  const [showHint, setShowHint] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const messagesRef = useRef(messages);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing, open]);

  useEffect(() => {
    if (open && !minimized) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [open, minimized]);

  const sendMessage = async (text) => {
    const trimmed = text.trim();
    if (!trimmed || typing) return;

    const userMsg = { id: `${Date.now()}-user`, role: 'user', text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setShowHint(false);
    setTyping(true);

    const history = [...messagesRef.current, userMsg]
      .filter((m) => m.id !== 'welcome')
      .map((m) => ({ role: m.role, text: m.text }));

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed, history }),
      });

      const data = await res.json();

      if (res.ok && data.reply) {
        setMessages((prev) => [
          ...prev,
          {
            id: `${Date.now()}-bot`,
            role: 'bot',
            text: data.reply,
            links: data.links?.length ? data.links : undefined,
          },
        ]);
      } else {
        const fallback = getChatbotReply(trimmed);
        setMessages((prev) => [
          ...prev,
          {
            id: `${Date.now()}-bot`,
            role: 'bot',
            text: fallback.text,
            links: fallback.links,
          },
        ]);
      }
    } catch {
      const fallback = getChatbotReply(trimmed);
      setMessages((prev) => [
        ...prev,
        {
          id: `${Date.now()}-bot`,
          role: 'bot',
          text: fallback.text,
          links: fallback.links,
        },
      ]);
    } finally {
      setTyping(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleQuickReply = (label) => {
    sendMessage(mapQuickReply(label));
  };

  const toggleOpen = () => {
    setOpen((prev) => !prev);
    setMinimized(false);
    setShowHint(false);
  };

  return (
    <div className={`cbot-root${open ? ' cbot-root--open' : ''}`}>
      {open && !minimized && (
        <div className="cbot-panel" role="dialog" aria-label="Zonzo AI Chatbot">
          <header className="cbot-header">
            <div className="cbot-header__identity">
              <RobotAvatar size="sm" />
              <div>
                <strong className="cbot-header__name">Zonzo AI</strong>
                <span className="cbot-header__status">
                  <span className="cbot-header__dot" />
                  Online — replies instantly
                </span>
              </div>
            </div>
            <div className="cbot-header__actions">
              <button
                type="button"
                className="cbot-icon-btn"
                onClick={() => setMinimized(true)}
                aria-label="Minimize chat"
              >
                <Minus size={16} />
              </button>
              <button
                type="button"
                className="cbot-icon-btn"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>
          </header>

          <div className="cbot-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`cbot-bubble-row cbot-bubble-row--${msg.role}`}>
                {msg.role === 'bot' && <RobotAvatar size="xs" />}
                <div className={`cbot-bubble cbot-bubble--${msg.role}`}>
                  <p>{msg.text}</p>
                  {msg.links?.length > 0 && (
                    <div className="cbot-links">
                      {msg.links.map((link) =>
                        link.href.startsWith('mailto:') || link.href.startsWith('http') ? (
                          <a key={link.href} href={link.href} className="cbot-link-chip">
                            {link.label}
                          </a>
                        ) : (
                          <Link key={link.href} href={link.href} className="cbot-link-chip" onClick={() => setOpen(false)}>
                            {link.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {typing && (
              <div className="cbot-bubble-row cbot-bubble-row--bot">
                <RobotAvatar size="xs" />
                <div className="cbot-bubble cbot-bubble--bot cbot-bubble--typing">
                  <span /><span /><span />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="cbot-quick">
            {QUICK_REPLIES.map((label) => (
              <button
                key={label}
                type="button"
                className="cbot-quick__btn"
                onClick={() => handleQuickReply(label)}
              >
                {label}
              </button>
            ))}
          </div>

          <form className="cbot-input-row" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              aria-label="Chat message"
              maxLength={500}
            />
            <button type="submit" className="cbot-send" aria-label="Send message" disabled={!input.trim() || typing}>
              <Send size={16} />
            </button>
          </form>

          <div className="cbot-footer">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="cbot-footer__wa">
              WhatsApp
            </a>
            <span>·</span>
            <Link href="/contact" className="cbot-footer__link" onClick={() => setOpen(false)}>
              Contact form
            </Link>
          </div>
        </div>
      )}

      {open && minimized && (
        <button type="button" className="cbot-minibar" onClick={() => setMinimized(false)}>
          <RobotAvatar size="xs" />
          <span>Zonzo AI — tap to continue</span>
        </button>
      )}

      {!open && showHint && (
        <div className="cbot-hint">
          <span>Need help? Ask Zonzo!</span>
          <button type="button" onClick={() => setShowHint(false)} aria-label="Dismiss hint">×</button>
        </div>
      )}

      <button
        type="button"
        className={`cbot-launcher${open ? ' cbot-launcher--active' : ''}`}
        onClick={toggleOpen}
        aria-label={open ? 'Close Zonzo chatbot' : 'Open Zonzo chatbot'}
        aria-expanded={open}
      >
        {open ? <X size={22} /> : <RobotAvatar size="md" pulse />}
      </button>
    </div>
  );
};

export default Chatbot;
