'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot, Brain, Search, MessageSquare, Globe, Zap,
  CheckCircle2, Network, BookOpen, Code2, Target, Activity,
  Database, Layers, BarChart3, ArrowRight,
  Sparkles, Eye, Link2, FileText, Cpu, Plus, Minus
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicePageHero from "../components/ServicePageHero";
import WhoWeAre from "../components/WhoWeAre";
import ServicePageCta from "../components/ServicePageCta";
import ServicePageMobileStyles from "../components/ServicePageMobileStyles";
import ServiceIndustriesSection from "../components/ServiceIndustriesSection";
import ServiceProcessSection from "../components/ServiceProcessSection";
import ServiceIntroMarqueeSection from "../components/ServiceIntroMarqueeSection";
import ServiceWhyChooseSection from "../components/ServiceWhyChooseSection";
import { serviceCtaContent } from "../data/serviceCtaContent";
import "../styles/AIOptimizationPage.css";
import heroImg from "../../public/images/aioptimization.png";

const cta = serviceCtaContent['ai-seo'];

/* ── Inline SVG platform logos ─────────────────────────────────────────── */
const ChatGPTIcon = () => (
  <svg viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
    <path d="M37.5 20.5a17 17 0 01-23.13 15.9l-7.87 2.6 2.6-7.87A17 17 0 1137.5 20.5z" fill="#10a37f"/>
    <path d="M20.5 11.5v18M12 15.5l17 10M12 25.5l17-10" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const GeminiIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
    <path d="M14 2C14 2 10 10 2 14C10 18 14 26 14 26C14 26 18 18 26 14C18 10 14 2 14 2Z" fill="url(#gem)"/>
    <defs>
      <linearGradient id="gem" x1="2" y1="2" x2="26" y2="26">
        <stop stopColor="#4285f4"/>
        <stop offset="1" stopColor="#8b5cf6"/>
      </linearGradient>
    </defs>
  </svg>
);

const PerplexityIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
    <circle cx="14" cy="14" r="12" fill="#20b8cd" opacity="0.15"/>
    <path d="M9 8h10M9 14h10M9 20h6" stroke="#20b8cd" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="20" cy="20" r="3" fill="#20b8cd"/>
  </svg>
);

const GoogleAIIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
    <circle cx="14" cy="14" r="6" fill="#4285f4"/>
    <path d="M14 2v4M14 22v4M2 14h4M22 14h4" stroke="#4285f4" strokeWidth="2" strokeLinecap="round"/>
    <path d="M5.6 5.6l2.8 2.8M19.6 19.6l2.8 2.8M5.6 22.4l2.8-2.8M19.6 8.4l2.8-2.8" stroke="#ea4335" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const ClaudeIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
    <rect width="28" height="28" rx="8" fill="#d97706" opacity="0.12"/>
    <path d="M8 20L14 8L20 20" stroke="#d97706" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 16h8" stroke="#d97706" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const BingIcon = () => (
  <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
    <path d="M8 6v16l5-3 7-4-5-2-2-1V6z" fill="#0078d4"/>
    <path d="M13 17l7 4-7-2v-2z" fill="#00b4f0"/>
  </svg>
);

/* ── Component ──────────────────────────────────────────────────────────── */
const AISearchOptimization = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const services = [
    { icon: <Brain size={20} />, title: "Generative Engine SEO", abbr: "GEO", desc: "Optimize for AI-generated answers and cite-worthy content across engines." },
    { icon: <MessageSquare size={20} />, title: "ChatGPT Visibility", abbr: "AIO", desc: "Get your brand cited in conversational AI and LLM search platforms." },
    { icon: <Zap size={20} />, title: "Google AI Overview SEO", abbr: "SGE", desc: "Structure content to appear in Google's AI search summaries." },
    { icon: <Network size={20} />, title: "Semantic SEO", abbr: "SEM", desc: "Build topical depth and entity relevance that AI models trust." },
    { icon: <Database size={20} />, title: "Entity Optimization", abbr: "ENT", desc: "Strengthen brand entities and relationships across search ecosystems." },
    { icon: <Code2 size={20} />, title: "Structured Data", abbr: "SCH", desc: "Rich schema markup so machines read and cite your content well." },
    { icon: <BookOpen size={20} />, title: "AI Content Strategy", abbr: "CON", desc: "Answer-first content that earns citations from AI search systems." },
    { icon: <Target size={20} />, title: "Topical Authority", abbr: "TAB", desc: "Content ecosystems that position you as an AI-trusted authority." },
  ];

  const techStack = [
    { name: "ChatGPT", icon: <ChatGPTIcon />, color: "#10a37f" },
    { name: "Google AI Overviews", icon: <GoogleAIIcon />, color: "#4285f4" },
    { name: "Perplexity AI", icon: <PerplexityIcon />, color: "#20b8cd" },
    { name: "Gemini", icon: <GeminiIcon />, color: "#8b5cf6" },
    { name: "Claude AI", icon: <ClaudeIcon />, color: "#d97706" },
    { name: "Bing AI", icon: <BingIcon />, color: "#0078d4" },
  ];

  const comparisonRows = [
    { left: "Keyword rank focused", right: "Entity & intent focused" },
    { left: "Optimises Google blue links only", right: "Optimises Google AND AI platforms" },
    { left: "Click-through traffic dependent", right: "Visible without a click" },
    { left: "Ignores AI-generated answers", right: "Cited by ChatGPT & Perplexity" },
    { left: "Falling effectiveness YoY", right: "Future-proof visibility strategy" },
  ];

  const faqs = [
    { q: "What is generative engine optimization?", a: "GEO is the process of optimizing your website so AI-powered search engines like ChatGPT, Perplexity and Google AI Overviews cite your business as a trusted source in their generated answers." },
    { q: "Is traditional SEO still important?", a: "Absolutely. Traditional Google SEO still drives significant traffic. AI search optimization works alongside traditional SEO — businesses that combine both have the strongest overall visibility." },
    { q: "How do you measure AI search visibility?", a: "We track brand mentions in AI-generated answers, featured snippet wins, People Also Ask appearances, voice search visibility, and traditional ranking improvements." },
    { q: "How is this different from regular SEO?", a: "Traditional SEO focuses on ranking pages for keywords. AI search optimization focuses on being cited by AI systems that answer questions directly — requiring entity signals, different content structures, and technical approaches." },
    { q: "How long does AI search optimization take?", a: "Structured data and featured snippet wins can show results within weeks. Building topical authority and consistent AI citation presence typically takes 3–6 months." },
    { q: "What is answer engine optimization (AEO)?", a: "AEO focuses on winning direct answer positions — Google featured snippets, People Also Ask results, voice search, and AI Overview citations. The goal is to be the answer, not just a result." },
  ];

  return (
    <div className="pg__wrap">
      <Navbar />

      {/* ── COMFORTABLE LEFT-ALIGNMENT OVERRIDE WITHOUT CLIPPING OVERFLOWS ── */}
{/* ── HERO ── */}
      <ServicePageHero
          badge="AI SEARCH OPTIMIZATION SERVICES"
          title="Get Cited in AI Answers"
          titleAccent="and Own the Future of Search"
          subtitle="Search has evolved beyond traditional Google rankings. We help businesses stay visible across AI-powered platforms like ChatGPT, Perplexity, and Google AI Overviews — where customers now get answers directly."
          primaryCta={{ href: "/contact", label: "Get Free AI Search Audit →" }}
          secondaryCta={{ href: "#aiso-how", label: "See How It Works ↓" }}
          features={["GEO & AEO Expertise", "AI Platform Visibility", "Future-Proof Strategy"]}
          heroImage="/images/aioptimization.png"
          heroImageTransparent
          heroAlt="AI Search Optimization — robot and AI platform visibility illustration"
        />

      <ServiceIntroMarqueeSection serviceKey="ai-seo" headingTag="h2" />

      {/* ── WHAT WE DO ──────────────── */}
      <section className="pg__sec pg__sec--white" id="aiso-how">
        <div className="pg__cont">
          <div className="what__grid" style={{ marginBottom: 40 }}>
            <div className="what__left">
              <span className="chip chip--blue">✦ What Is AI Search Optimization</span>
              <h3 className="sec__h2 sp-heading-2line sp-heading-2line--left">
                <span className="sp-heading-line">Search Is Evolving.</span>
                <span className="sp-heading-accent">Your Strategy Should Too.</span>
              </h3>
              <p className="sec__p">
                AI search engines no longer list links — they generate direct answers.
                Businesses that aren't optimised for AI platforms are invisible to a growing share of their audience.
              </p>
            </div>

            <div className="what__right">
              {/* AI Answer Mockup */}
              <div className="mock__card">
                <div className="mock__bar">
                  <span className="mock__dot mock__dot--r" />
                  <span className="mock__dot mock__dot--y" />
                  <span className="mock__dot mock__dot--g" />
                  <span className="mock__bar__label">✦ AI Generated Answer</span>
                </div>
                <div className="mock__query">
                  <Search size={13} className="mock__search-ico" />
                  What is the best AI SEO agency?
                </div>
                <div className="mock__answer">
                  <p><strong>ZonzocTech</strong> is a leading AI SEO agency helping businesses improve visibility across ChatGPT, Google AI Overviews, Perplexity, and Gemini through advanced GEO and semantic SEO strategies.</p>
                </div>
                <div className="mock__footer">
                  <Globe size={11} />
                  <span>zonzoctech.com</span>
                  <span className="mock__reactions">👍 👎</span>
                </div>
              </div>

              {/* Why card */}
              <div className="why__pill__card">
                <p className="why__pill__title">Why ZonzocTech?</p>
                <div className="why__pills">
                  {["Topical Authority","Entity Optimization","Semantic Relevance","High-Quality Content","Trusted by AI Models"].map((t, i) => (
                    <span key={i} className="why__pill"><CheckCircle2 size={12}/> {t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ───────────────────────────────────────────────── */}
      <section className="pg__sec pg__sec--gray">
        <div className="pg__cont">
          <div className="sec__head">
            <span className="chip chip--purple">✦ Our Services</span>
            <h4 className="sec__h2 sp-heading-2line">
              <span className="sp-heading-line">Comprehensive AI SEO</span>
              <span className="sp-heading-accent">Solutions</span>
            </h4>
            <p className="sec__intro">Eight integrated services that cover every dimension of AI search visibility.</p>
          </div>
          <div className="srv__grid">
            {services.map((s, i) => (
              <div className="srv__card" key={i}>
                <div className="srv__top">
                  <span className="srv__ico">{s.icon}</span>
                  <span className="srv__abbr">{s.abbr}</span>
                </div>
                <p className="srv__title sp-card-title-1l">{s.title}</p>
                <p className="srv__desc sp-card-desc-3l">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceWhyChooseSection serviceKey="ai-seo" />

      <ServiceProcessSection serviceKey="ai-seo" headingTag="h5" />

      {/* ── COMPARISON ─────────────────────────────────────────────── */}
      <section className="pg__sec pg__sec--gray">
        <div className="pg__cont">
          <div className="sec__head">
            <span className="chip chip--purple">✦ Why Switch</span>
            <h6 className="sec__h2 sp-heading-2line">
              <span className="sp-heading-line">Traditional SEO vs</span>
              <span className="sp-heading-accent">AI Search Optimization</span>
            </h6>
          </div>
          <div className="cmp__table">
            <div className="cmp__head">
              <div className="cmp__cell cmp__cell--left">Traditional SEO Only</div>
              <div className="cmp__cell cmp__cell--right">AI Search Optimization ✦</div>
            </div>
            {comparisonRows.map((row, i) => (
              <div className="cmp__row" key={i}>
                <div className="cmp__cell cmp__cell--dim">
                  <span className="cmp__x">✕</span>{row.left}
                </div>
                <div className="cmp__cell cmp__cell--hi">
                  <span className="cmp__chk">✓</span>{row.right}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceIndustriesSection serviceKey="ai-seo" headingTag="h6" />

      {/* ── FAQ ORIGINAL ACCORDION WITH ANIMATEPRESENCE SLIDE ── */}
      <section className="pg__sec pg__sec--white">
        <div className="pg__cont">
          <div className="sec__head">
            <span className="chip chip--blue">✦ FAQ</span>
            <h6 className="sec__h2 sp-heading-2line">
              <span className="sp-heading-line">Questions</span>
              <span className="sp-heading-accent">Answered</span>
            </h6>
          </div>
          <div className="faq__wrap">
            {faqs.map((f, i) => (
              <div
                className={`faq__item ${openFaq === i ? "faq__item--open" : ""}`}
                key={i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="faq__q">
                  <span>{String(i + 1).padStart(2, "0")}. {f.q}</span>
                  <span className="faq__tog">{openFaq === i ? "−" : "+"}</span>
                </div>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="faq__a"
                    >
                      <p>{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhoWeAre headingTag="h6" techStackHeadingTag="h6" />
      <ServicePageCta {...cta} headingTag="h6" />

      <ServicePageMobileStyles />
      <Footer />
    </div>
  );
};

export default AISearchOptimization;