'use client';
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/SEOServices.css";
import Breadcrumb from "../components/Breadcrumb";

const SEOServices = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "98%",  label: "Client Satisfaction" },
    { number: "50M+", label: "Organic Traffic Generated" },
    { number: "10+",  label: "Years of Experience" },
    { number: "24/7", label: "Support Available" },
    { number: "100%", label: "Transparent Reporting" },
  ];

  const seoServices = [
    {
      icon: "⚙️",
      title: "Technical SEO",
      description: "Optimize website structure, indexing, crawlability, Core Web Vitals and technical performance for better rankings.",
    },
    {
      icon: "📝",
      title: "On-Page SEO",
      description: "Optimize content, headings, metadata, internal linking and page structure for better search visibility.",
    },
    {
      icon: "🔍",
      title: "Keyword Research",
      description: "Data-driven keyword research and strategy to target the right keywords with high search intent.",
    },
    {
      icon: "📊",
      title: "SEO Audits",
      description: "Comprehensive SEO audits to identify issues, opportunities and improvement areas across your site.",
    },
    {
      icon: "📍",
      title: "Local SEO",
      description: "Optimize Google Business Profiles, local citations and location-based keyword targeting for local visibility.",
    },
    {
      icon: "🛒",
      title: "Ecommerce SEO",
      description: "Improve product, category and store visibility to drive more organic traffic, rankings and sales.",
    },
    {
      icon: "✍️",
      title: "Content SEO",
      description: "Create and optimize content that ranks higher and satisfies search intent and user needs.",
    },
    {
      icon: "⚡",
      title: "Speed Optimization",
      description: "Improve website speed, mobile performance and Core Web Vitals for better user experience and rankings.",
    },
  ];

  const process = [
    { number: "01", icon: "🔍", title: "SEO Audit & Analysis",    description: "We analyze your website structure, competitors, technical issues and keyword opportunities to find the best growth path." },
    { number: "02", icon: "🧭", title: "Strategy & Planning",      description: "We create a custom SEO strategy based on your business goals, target market and search data." },
    { number: "03", icon: "⚙️", title: "Optimization",             description: "We implement on-page, technical and content optimizations to improve rankings and visibility." },
    { number: "04", icon: "📈", title: "Monitoring & Tracking",    description: "We monitor performance, track rankings and analyze results to continuously refine the strategy." },
    { number: "05", icon: "🚀", title: "Growth & Scaling",         description: "We refine strategies and scale growth to increase traffic, rankings and conversions month over month." },
  ];

  const industries = [
    { icon: "🛍️", label: "Ecommerce" },
    { icon: "🏥", label: "Healthcare" },
    { icon: "🏠", label: "Real Estate" },
    { icon: "☁️", label: "SaaS" },
    { icon: "🎓", label: "Education" },
    { icon: "💰", label: "Finance" },
    { icon: "⚖️", label: "Law Firms" },
    { icon: "📍", label: "Local Business" },
    { icon: "✈️", label: "Travel" },
    { icon: "💻", label: "Technology" },
  ];

  const faqs = [
    { q: "How long does SEO take to show results?",       a: "Most clients see meaningful improvements within 3–6 months, with significant compounding results from month 6 onwards. We set realistic expectations from day one." },
    { q: "How much do SEO services cost?",                a: "Our packages are tailored based on competition level, goals and scope. Contact us for a free audit and a transparent custom quote." },
    { q: "Do you provide local SEO services?",           a: "Yes — we optimize Google Business Profiles, local citations, location pages and local keyword targeting for businesses across the UK and USA." },
    { q: "Can you guarantee rankings?",                  a: "No ethical SEO agency can guarantee specific rankings. We do guarantee a data-driven strategy, transparent reporting and a team that works hard to grow your visibility." },
    { q: "What SEO services do you offer?",              a: "We offer Technical SEO, On-Page SEO, Content SEO, Link Building, Local SEO, E-commerce SEO, Keyword Research and AI SEO (GEO/AEO)." },
    { q: "Do you provide SEO reports?",                  a: "Yes — every month you receive a clear report covering rankings, traffic, leads and exactly what we did and plan to do next. No jargon, just results." },
  ];

  return (
    <>
      <div className="seo-page">
        <Navbar />

        {/* ── HERO (completely unchanged) ──────────────────────── */}
        <section className="seo-hero">
          <div className="seo-container">
            <Breadcrumb />
            <span className="seo-hero-badge-wrapper">
              <span className="seo-hero-badge-dot"></span>
              <span className="seo-hero-badge-text">AI Search Engine Optimization Agency</span>
            </span>
            <h1 className="seo-hero-title">
              SEO Agency for Small Business UK{" "}
              <span className="seo_title_sky_blue">— Built to Generate Leads, Not Just Rankings</span>
            </h1>
            <p className="seo-desc">
              ZonzocTech is an AI SEO agency helping small businesses and startups across the UK and USA
              grow their organic traffic, attract qualified leads and turn search visibility into real
              revenue — without the price tag of a big London agency.
            </p>
            <div className="hero-buttons">
              <a href="/contact" className="btn-primary">Get Your Free SEO Audit →</a>
              <a href="#seo-results" className="btn-secondary">See Our Results ↓</a>
            </div>
            <p className="seo-sub" style={{ marginTop: "24px" }}>
              Trusted by 120+ businesses across UK, USA &amp; Europe
            </p>
          </div>
        </section>

        {/* ── STATS BAR ──────────────────────────────────────────── */}
        <div className="ss-stats-bar" id="seo-results">
          <div className="ss-container">
            <div className="ss-stats-inner">
              {stats.map((s, i) => (
                <React.Fragment key={i}>
                  <div className="ss-stat-item">
                    <span className="ss-stat-number">{s.number}</span>
                    <span className="ss-stat-label">{s.label}</span>
                  </div>
                  {i < stats.length - 1 && <div className="ss-stat-sep" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* ── WHY SEO MATTERS — 2-col ─────────────────────────────── */}
        <section className="ss-section ss-section--white">
          <div className="ss-container">
            <div className="ss-why-grid">

              {/* Left */}
              <div className="ss-why-left">
                <span className="ss-badge">Why SEO Matters</span>
                <h2 className="ss-h2">
                  Get Found. Get Traffic.<br />Grow Your Business.
                </h2>
                <p className="ss-p">
                  Search engines are the #1 source of traffic for businesses online. Our SEO
                  strategies help you rank higher, attract the right audience and convert visitors
                  into loyal customers.
                </p>
                <ul className="ss-check-list">
                  {[
                    "Improve search visibility and brand awareness",
                    "Drive qualified organic traffic that converts",
                    "Build trust and credibility with higher rankings",
                    "Outrank competitors and dominate your niche",
                    "Long-term growth with sustainable SEO strategies",
                  ].map((item, i) => (
                    <li key={i}><span className="ss-check-icon">✓</span>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Right — Google ranking visual */}
              <div className="ss-why-right">
                <div className="ss-google-card">
                  <div className="ss-google-logo">
                    <span style={{ color: "#4285f4" }}>G</span>
                    <span style={{ color: "#ea4335" }}>o</span>
                    <span style={{ color: "#fbbc04" }}>o</span>
                    <span style={{ color: "#4285f4" }}>g</span>
                    <span style={{ color: "#34a853" }}>l</span>
                    <span style={{ color: "#ea4335" }}>e</span>
                  </div>
                  <div className="ss-google-search">
                    <span className="ss-google-search-icon">🔍</span>
                    <span className="ss-google-search-text">Your Business</span>
                  </div>
                  <div className="ss-google-result">
                    <div className="ss-google-result-site">
                      <span className="ss-result-favicon">🌐</span>
                      <div>
                        <div className="ss-result-url">yourwebsite.com</div>
                        <div className="ss-result-title">Your Website</div>
                      </div>
                    </div>
                    <div className="ss-result-badge">Position #1</div>
                  </div>
                  <div className="ss-google-chart">
                    {[40, 55, 50, 65, 60, 80, 75, 95].map((h, i) => (
                      <div key={i} className="ss-chart-bar" style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }} />
                    ))}
                    <div className="ss-chart-arrow">↗</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES GRID ───────────────────────────────────────── */}
        <section className="ss-section ss-section--gray">
          <div className="ss-container">
            <div className="ss-section-header">
              <span className="ss-badge">Our SEO Services</span>
              <h2 className="ss-h2">
                Complete SEO Solutions to <span>Boost Your Online Presence</span>
              </h2>
              <p className="ss-subtitle">
                From technical SEO to content strategy and link building — everything your business
                needs to rank higher, attract qualified traffic and generate leads.
              </p>
            </div>
            <div className="ss-services-grid">
              {seoServices.map((s, i) => (
                <div className="ss-service-card" key={i}>
                  <div className="ss-service-top">
                    <div className="ss-service-num">{String(i + 1).padStart(2, "0")}</div>
                    <div className="ss-service-icon">{s.icon}</div>
                  </div>
                  <h3 className="ss-service-title">{s.title}</h3>
                  <p className="ss-service-desc">{s.description}</p>
                  <a href="/contact" className="ss-learn-more">Learn More →</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS — HORIZONTAL 5-STEP ─────────────────────────── */}
        <section className="ss-section ss-section--white">
          <div className="ss-container">
            <div className="ss-section-header">
              <span className="ss-badge">Our SEO Process</span>
              <h2 className="ss-h2">
                Our Proven SEO Process for <span>Long-Term Results</span>
              </h2>
              <p className="ss-subtitle">
                A structured, transparent workflow that turns SEO into a clear and measurable growth system.
              </p>
            </div>
            <div className="ss-process-row">
              {process.map((p, i) => (
                <React.Fragment key={i}>
                  <div className="ss-process-step">
                    <div className="ss-process-circle">
                      <span className="ss-process-emoji">{p.icon}</span>
                      <span className="ss-process-badge">{p.number}</span>
                    </div>
                    <h3 className="ss-process-title">{p.title}</h3>
                    <p className="ss-process-desc">{p.description}</p>
                  </div>
                  {i < process.length - 1 && (
                    <div className="ss-process-connector">
                      <div className="ss-process-dots" />
                      <span className="ss-process-arrow">→</span>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* ── INDUSTRIES WE SUPPORT ───────────────────────────────── */}
        <section className="ss-section ss-section--gray">
          <div className="ss-container">
            <div className="ss-section-header">
              <span className="ss-badge">Industries We Support</span>
              <h2 className="ss-h2">
                SEO Solutions for <span>Every Industry</span>
              </h2>
              <p className="ss-subtitle">
                We've helped businesses across a wide range of industries improve their search
                visibility and generate qualified leads.
              </p>
            </div>
            <div className="ss-industries-grid">
              {industries.map((ind, i) => (
                <div className="ss-industry-item" key={i}>
                  <div className="ss-industry-icon">{ind.icon}</div>
                  <span className="ss-industry-label">{ind.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────── */}
        <section className="ss-cta-section">
          <div className="ss-container">
            <div className="ss-cta-box">
              <div className="ss-cta-left">
                <span className="ss-badge ss-badge--light">Get Started</span>
                <h2 className="ss-cta-h2">
                  Ready to Improve Your Rankings and Grow Your Business?
                </h2>
                <p className="ss-cta-p">
                  Get a free SEO audit and discover how we can help you rank higher,
                  get more traffic and grow your business.
                </p>
                <a href="/contact" className="ss-cta-btn">Get Free Consultation →</a>
                <ul className="ss-cta-trust">
                  <li>✓ Free SEO Audit</li>
                  <li>✓ Actionable Insights</li>
                  <li>✓ No Obligation</li>
                  <li>✓ Quick Response</li>
                </ul>
              </div>
              <div className="ss-cta-right">
                <div className="ss-rocket-visual">
                  <div className="ss-rocket-stars">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className={`ss-star ss-star--${i}`}>✦</div>
                    ))}
                  </div>
                  <div className="ss-rocket">🚀</div>
                  <div className="ss-rocket-clouds">
                    <div className="ss-cloud ss-cloud--1">☁️</div>
                    <div className="ss-cloud ss-cloud--2">☁️</div>
                    <div className="ss-cloud ss-cloud--3">☁️</div>
                  </div>
                  <div className="ss-rocket-glow" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────── */}
        <section className="ss-section ss-section--white">
          <div className="ss-container">
            <div className="ss-section-header">
              <span className="ss-badge">Frequently Asked Questions</span>
              <h2 className="ss-h2">
                SEO Services — <span>Frequently Asked Questions</span>
              </h2>
            </div>
            <div className="ss-faq-grid">
              {faqs.map((f, i) => (
                <div
                  key={i}
                  className={`ss-faq-item ${openFaq === i ? "ss-faq-item--open" : ""}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className="ss-faq-q">
                    <span>{f.q}</span>
                    <span className="ss-faq-tog">{openFaq === i ? "−" : "+"}</span>
                  </div>
                  {openFaq === i && <p className="ss-faq-a">{f.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default SEOServices;
