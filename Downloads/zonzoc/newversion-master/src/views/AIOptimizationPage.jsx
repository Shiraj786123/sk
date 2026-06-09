'use client';
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/AIOptimizationPage.css";
import Breadcrumb from "../components/Breadcrumb";
import {
  Bot,
  Brain,
  Search,
  MessageSquare,
  Globe,
  Zap,
  Shield,
  TrendingUp,
  CheckCircle2,
  Network,
  BookOpen,
  Code2,
  Target,
  Activity,
  Users,
  Award,
  Clock,
  ThumbsUp,
  Database,
  Layers,
  BarChart3,
  ArrowRight,
  Sparkles,
  Eye,
  Link2,
  FileText,
  Cpu,
} from "lucide-react";

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

  const stats = [
    { number: "150+", label: "Projects", icon: <Award size={18} /> },
    { number: "120+", label: "Clients", icon: <Users size={18} /> },
    { number: "35%", label: "Avg Growth", icon: <TrendingUp size={18} /> },
    { number: "4.9★", label: "Rating", icon: <ThumbsUp size={18} /> },
    { number: "24/7", label: "Monitoring", icon: <Clock size={18} /> },
    { number: "100%", label: "Transparent", icon: <Shield size={18} /> },
  ];

  const services = [
    { icon: <Brain size={20} />, title: "Generative Engine Optimization", abbr: "GEO", desc: "Optimize for AI-generated answers and cite-worthy content across answer engines." },
    { icon: <MessageSquare size={20} />, title: "ChatGPT & AI Visibility", abbr: "AIO", desc: "Get your brand cited in conversational AI responses and LLM-powered platforms." },
    { icon: <Zap size={20} />, title: "Google AI Overview Optimization", abbr: "SGE", desc: "Structure content to appear inside Google's AI-generated search summaries." },
    { icon: <Network size={20} />, title: "Semantic SEO", abbr: "SEM", desc: "Build topical depth, entity relevance, and context AI models rely on." },
    { icon: <Database size={20} />, title: "Entity & Knowledge Graph", abbr: "ENT", desc: "Strengthen brand entities and structured relationships across the search ecosystem." },
    { icon: <Code2 size={20} />, title: "Structured Data & Schema", abbr: "SCH", desc: "Implement rich schema markup so machines read and trust your content." },
    { icon: <BookOpen size={20} />, title: "AI Content Strategy", abbr: "CON", desc: "Create answer-first content that earns citations from AI search systems." },
    { icon: <Target size={20} />, title: "Topical Authority Building", abbr: "TAB", desc: "Establish deep content ecosystems that position you as an AI-trusted authority." },
  ];

  const techStack = [
    { name: "ChatGPT", icon: <ChatGPTIcon />, color: "#10a37f" },
    { name: "Google AI Overviews", icon: <GoogleAIIcon />, color: "#4285f4" },
    { name: "Perplexity AI", icon: <PerplexityIcon />, color: "#20b8cd" },
    { name: "Gemini", icon: <GeminiIcon />, color: "#8b5cf6" },
    { name: "Claude AI", icon: <ClaudeIcon />, color: "#d97706" },
    { name: "Bing AI", icon: <BingIcon />, color: "#0078d4" },
  ];

  const process = [
    { n: "01", icon: <Search size={18} />, title: "AI Visibility Audit", desc: "Deep-dive analysis of how AI systems perceive and cite your brand across all platforms." },
    { n: "02", icon: <Network size={18} />, title: "Entity & Strategy Mapping", desc: "Build a semantic map of your brand's topics, entities, and authority signals." },
    { n: "03", icon: <Code2 size={18} />, title: "Technical Optimization", desc: "Schema, structured data, crawlability, and site architecture tuned for AI ingestion." },
    { n: "04", icon: <BookOpen size={18} />, title: "Content Optimization", desc: "Rewrite and create content structured to win AI citations and featured positions." },
    { n: "05", icon: <Activity size={18} />, title: "Monitor & Grow", desc: "Monthly AI visibility reporting, adaptation, and continuous improvement cycles." },
  ];

  const comparisonRows = [
    { left: "Keyword rank focused", right: "Entity & intent focused" },
    { left: "Optimises Google blue links only", right: "Optimises Google AND AI platforms" },
    { left: "Click-through traffic dependent", right: "Visible without a click" },
    { left: "Ignores AI-generated answers", right: "Cited by ChatGPT & Perplexity" },
    { left: "Falling effectiveness YoY", right: "Future-proof visibility strategy" },
  ];

  const whyChoose = [
    { icon: <Sparkles size={18} />, title: "Early Mover Advantage", desc: "We've been optimising for generative search since it emerged — your competitors are still catching up." },
    { icon: <Layers size={18} />, title: "Combined SEO Approach", desc: "Traditional SEO + AI optimization together. Every channel where your customers search, covered." },
    { icon: <BarChart3 size={18} />, title: "Business-Focused Outcomes", desc: "Every optimization tied back to leads, enquiries, and revenue — not just impressions." },
    { icon: <Cpu size={18} />, title: "Technical + Content Depth", desc: "Rare combination of strong technical SEO and high-quality content strategy in one team." },
    { icon: <Eye size={18} />, title: "Full Transparent Reporting", desc: "AI visibility, traditional rankings, organic traffic — one complete monthly report." },
  ];

  const whoFor = [
    { label: "Businesses losing traffic to AI Overviews", desc: "Organic declining as AI answers queries without clicks." },
    { label: "UK & USA Service Businesses", desc: "Need to appear in AI answers when customers search for services." },
    { label: "E-commerce Brands", desc: "Need product visibility in AI shopping recommendations." },
    { label: "Content-Led Businesses", desc: "Traffic model threatened by AI replacing clicks." },
    { label: "Forward-Thinking Businesses", desc: "Build AI visibility before competitors catch on." },
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

      {/* ── HERO (unchanged) ──────────────────────────────────────── */}
      <section className="aiso__hero">
        <div className="aiso__hero_background">
          <div className="aiso__hero_circle aiso__circle_1" />
          <div className="aiso__hero_circle aiso__circle_2" />
          <div className="aiso__hero_circle aiso__circle_3" />
        </div>
        <div className="aiso__hero_container">
          <Breadcrumb />
          <span className="aiso-hero-badge-wrapper">
            <span className="aiso-hero-badge-dot" />
            <span className="aiso-hero-badge-text">AI Search Optimization Agency</span>
          </span>
          <h1 className="aiso__hero_title">
            AI Search Optimization Agency Helping Businesses Appear in{" "}
            <span className="aiso__hero_title_highlight">Google AI, ChatGPT &amp; Generative Search Results</span>
          </h1>
          <p className="aiso__hero_text">
            Search has evolved beyond traditional Google rankings. We help businesses stay visible
            across AI-powered platforms like ChatGPT, Perplexity, and Google AI Overviews — where
            customers now get answers directly.
          </p>
          <div className="hero-buttons">
            <a href="/contact" className="btn-primary">Get Free AI Search Audit →</a>
            <a href="#aiso-how" className="btn-secondary">See How It Works ↓</a>
          </div>
          <p className="hero-trust-text">Trusted by 120+ businesses across UK, USA &amp; Europe</p>
        </div>
      </section>

      {/* ── STATS BAR ──────────────────────────────────────────────── */}
      <div className="sb" id="aiso-how">
        <div className="sb__inner">
          {stats.map((s, i) => (
            <React.Fragment key={i}>
              <div className="sb__item">
                <span className="sb__icon">{s.icon}</span>
                <strong className="sb__num">{s.number}</strong>
                <span className="sb__lbl">{s.label}</span>
              </div>
              {i < stats.length - 1 && <div className="sb__sep" />}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ── WHAT WE DO ─────────────────────────────────────────────── */}
      <section className="pg__sec pg__sec--white">
        <div className="pg__cont">
          <div className="what__grid">
            <div className="what__left">
              <span className="chip chip--blue">✦ What Is AI Search Optimization</span>
              <h2 className="sec__h2">Search Is Evolving.<br/>Your Strategy Should Too.</h2>
              <p className="sec__p">
                AI search engines no longer list links — they generate direct answers.
                Businesses that aren't optimised for AI platforms are invisible to a growing share of their audience.
              </p>
              <ul className="check__list">
                {[
                  "Appear in AI-generated answers & citations",
                  "Optimize for ChatGPT, Gemini & Perplexity",
                  "Build topical authority AI systems trust",
                  "Future-proof visibility across all search types",
                  "Drive leads from conversational search queries",
                ].map((b, i) => (
                  <li key={i}><CheckCircle2 size={15} className="chk" />{b}</li>
                ))}
              </ul>
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
            <h2 className="sec__h2">Comprehensive AI SEO Solutions</h2>
            <p className="sec__intro">Eight integrated services that cover every dimension of AI search visibility.</p>
          </div>
          <div className="srv__grid">
            {services.map((s, i) => (
              <div className="srv__card" key={i}>
                <div className="srv__top">
                  <span className="srv__ico">{s.icon}</span>
                  <span className="srv__abbr">{s.abbr}</span>
                </div>
                <h3 className="srv__title">{s.title}</h3>
                <p className="srv__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ────────────────────────────────────────────────── */}
      <section className="pg__sec pg__sec--dark">
        <div className="pg__cont">
          <div className="sec__head">
            <span className="chip chip--light">✦ Our Process</span>
            <h2 className="sec__h2 sec__h2--white">A Data-Driven Framework for AI Search Success</h2>
          </div>
          <div className="proc__row">
            {process.map((p, i) => (
              <React.Fragment key={i}>
                <div className="proc__step">
                  <div className="proc__circle">
                    {p.icon}
                    <span className="proc__badge">{p.n}</span>
                  </div>
                  <h3 className="proc__title">{p.title}</h3>
                  <p className="proc__desc">{p.desc}</p>
                </div>
                {i < process.length - 1 && (
                  <div className="proc__line">
                    <div className="proc__dots" />
                    <ArrowRight size={14} className="proc__arrow" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK / AI PLATFORMS ──────────────────────────────── */}
      <section className="pg__sec pg__sec--white">
        <div className="pg__cont">
          <div className="sec__head sec__head--compact">
            <span className="chip chip--blue">✦ AI Platforms We Optimize For</span>
            <h2 className="sec__h2">Technology Stack</h2>
            <p className="sec__intro">We optimize your presence across all major AI search platforms and answer engines.</p>
          </div>
          <div className="tech__row">
            {techStack.map((t, i) => (
              <div className="tech__item" key={i}>
                <div className="tech__logo" style={{ "--tc": t.color }}>
                  {t.icon}
                </div>
                <span className="tech__name">{t.name}</span>
              </div>
            ))}
          </div>

          {/* Tool tags */}
          <div className="tool__tags">
            {[
              { ico: <Code2 size={13}/>, t: "Schema Markup" },
              { ico: <Link2 size={13}/>, t: "Knowledge Graph" },
              { ico: <FileText size={13}/>, t: "Semantic Content" },
              { ico: <Network size={13}/>, t: "Entity SEO" },
              { ico: <Search size={13}/>, t: "Topical Authority" },
              { ico: <BarChart3 size={13}/>, t: "AI Analytics" },
              { ico: <Cpu size={13}/>, t: "Structured Data" },
              { ico: <Layers size={13}/>, t: "Content Clusters" },
            ].map((tag, i) => (
              <span className="tool__tag" key={i}>{tag.ico} {tag.t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON ─────────────────────────────────────────────── */}
      <section className="pg__sec pg__sec--gray">
        <div className="pg__cont">
          <div className="sec__head">
            <span className="chip chip--purple">✦ Why Switch</span>
            <h2 className="sec__h2">Traditional SEO vs AI Search Optimization</h2>
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

      {/* ── WHY CHOOSE ─────────────────────────────────────────────── */}
      <section className="pg__sec pg__sec--white">
        <div className="pg__cont">
          <div className="sec__head">
            <span className="chip chip--blue">✦ Why ZonzocTech</span>
            <h2 className="sec__h2">Built for the Future of Search</h2>
          </div>
          <div className="wc__grid">
            {whyChoose.map((w, i) => (
              <div className="wc__card" key={i}>
                <span className="wc__ico">{w.icon}</span>
                <h3 className="wc__title">{w.title}</h3>
                <p className="wc__desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE HELP ────────────────────────────────────────────── */}
      <section className="pg__sec pg__sec--dark2">
        <div className="pg__cont">
          <div className="sec__head">
            <span className="chip chip--purple">✦ Who We Help</span>
            <h2 className="sec__h2">Is This Right For You?</h2>
          </div>
          <div className="who__grid">
            {whoFor.map((w, i) => (
              <div className="who__card" key={i}>
                <span className="who__num">0{i + 1}</span>
                <div>
                  <h3 className="who__title">{w.label}</h3>
                  <p className="who__desc">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────── */}
      <section className="pg__sec pg__sec--white">
        <div className="pg__cont">
          <div className="sec__head">
            <span className="chip chip--blue">✦ FAQ</span>
            <h2 className="sec__h2">Questions Answered</h2>
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
                {openFaq === i && <p className="faq__a">{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────────────────── */}
      <section className="pg__cta">
        <div className="pg__cont">
          <div className="cta__box">
            <div className="cta__left">
              <span className="chip chip--light">✦ Get Started</span>
              <h2 className="cta__h2">Ready to Dominate AI Search?</h2>
              <p className="cta__p">Get a free AI search visibility audit. No commitment — just clarity on where you stand and what to do next.</p>
              <div className="cta__btns">
                <a href="/contact" className="cta__btn--primary">Get Free AI Audit →</a>
                <a href="/seo-services" className="cta__btn--ghost">View SEO Services</a>
              </div>
              <p className="cta__trust">No spam • Response within 1–3 hours</p>
            </div>
            <div className="cta__right">
              <div className="cta__visual">
                <div className="cta__ring cta__ring--1"/>
                <div className="cta__ring cta__ring--2"/>
                <div className="cta__ring cta__ring--3"/>
                <Search size={40} className="cta__search" />
                <div className="cta__pings">
                  {["ChatGPT","Gemini","Perplexity","Claude"].map((pl, i) => (
                    <span key={i} className={`cta__ping cta__ping--${i}`}>{pl}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AISearchOptimization;
