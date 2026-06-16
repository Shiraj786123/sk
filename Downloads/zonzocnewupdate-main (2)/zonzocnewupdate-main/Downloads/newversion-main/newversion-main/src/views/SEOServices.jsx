'use client';
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/SEOServices.css";
import Breadcrumb from "../components/Breadcrumb";

const SEOServices = () => {

  useEffect(() => {
    const cards = document.querySelectorAll(".seo-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );
    cards.forEach((card) => observer.observe(card));
  }, []);

  const stats = [
    { number: "150+", label: "Projects Delivered" },
    { number: "35%", label: "Average Traffic Growth" },
    { number: "120+", label: "Clients Served" },
    { number: "4.9★", label: "Client Rating" },
  ];

  const seoServices = [
    {
      title: "Technical SEO",
      description: "Search engines need to crawl and understand your website before they rank it. We fix every technical barrier holding your site back.",
      items: [
        "Core Web Vitals & page speed optimization",
        "Mobile-first indexing compliance",
        "Crawl error & indexation fixes",
        "XML sitemap & robots.txt setup",
        "Structured data & schema markup",
        "HTTPS & site security checks",
      ],
    },
    {
      title: "On-Page SEO",
      description: "Every page is a ranking opportunity. We optimize your existing pages to target the right keywords and convert the right visitors.",
      items: [
        "Keyword research & intent mapping",
        "Title tags & meta descriptions",
        "Header structure optimization",
        "Content gap analysis",
        "Internal linking strategy",
        "Image optimization & alt text",
      ],
    },
    {
      title: "Content SEO",
      description: "Content that matches search intent builds authority, drives traffic and generates leads consistently. We create content strategies that compound over time.",
      items: [
        "Blog strategy & editorial planning",
        "Pillar content & topic clusters",
        "FAQ & featured snippet optimization",
        "Landing page copywriting",
        "Content refresh & pruning strategy",
      ],
    },
    {
      title: "Link Building",
      description: "Quality backlinks from relevant authoritative websites remain one of the strongest SEO ranking signals. We build links that actually move rankings.",
      items: [
        "Manual outreach campaigns",
        "Niche-relevant backlink acquisition",
        "Digital PR & brand mentions",
        "Competitor backlink gap analysis",
        "Toxic link identification & removal",
      ],
    },
    {
      title: "Local SEO for UK Businesses",
      description: "If your business serves a specific city or region in the UK, local SEO is the fastest path to appearing in front of ready-to-buy customers.",
      items: [
        "Google Business Profile optimization",
        "Local citation building & cleanup",
        "Location page optimization",
        "Review generation strategy",
        "Local keyword targeting",
      ],
    },
    {
      title: "E-commerce SEO for UK & USA Stores",
      description: "Our affordable SEO services for e-commerce businesses cover everything from product pages to shopping feeds — driving qualified buying traffic that converts.",
      items: [
        "Product & category page optimization",
        "Shopify & WooCommerce SEO",
        "Shopping feed optimization",
        "E-commerce content strategy",
        "Conversion rate optimization",
      ],
    },
  ];

  const aiCapabilities = [
    {
      title: "Generative Engine Optimization (GEO)",
      description: "Generative engine optimization is the practice of structuring your content so AI search engines like ChatGPT, Perplexity and Google AI Overviews cite your business as a trusted source. This is one of the fastest growing opportunities in search right now — and very few agencies offer it.",
    },
    {
      title: "Answer Engine Optimization (AEO)",
      description: "Answer engine optimization focuses on getting your content featured as the direct answer to search queries — in Google featured snippets, People Also Ask boxes and AI-generated answers. We build content specifically designed to win these high-visibility positions.",
    },
    {
      title: "AI Keyword Research & Clustering",
      description: "We use AI tools to identify keyword clusters, search intent patterns and content gaps faster and more accurately than manual research alone — giving your strategy a significant edge.",
    },
    {
      title: "Search Intent Prediction",
      description: "Understanding what users actually want when they search is the difference between ranking and converting. Our AI-powered approach maps intent at scale across your entire keyword set.",
    },
  ];

  const process = [
    { number: "01", title: "Free SEO Audit", description: "We start with a comprehensive audit of your website — identifying technical issues, content gaps, backlink profile weaknesses and competitor opportunities." },
    { number: "02", title: "Custom SEO Strategy", description: "Based on your business goals, target market and competition level, we build a clear roadmap with realistic timelines and measurable targets." },
    { number: "03", title: "Technical Foundation Fix", description: "Before creating content or building links, we fix every technical issue that could be holding your rankings back." },
    { number: "04", title: "Content & Authority Building", description: "We create and optimize content that ranks, builds topical authority and attracts quality backlinks naturally over time." },
    { number: "05", title: "Monthly Reporting & Improvement", description: "Every month you receive a clear report showing rankings, traffic, leads and exactly what we did and plan to do next. No jargon. Just results." },
  ];

  const whoFor = [
    { title: "✓ Small Businesses in the UK & USA", description: "Who need to compete with larger competitors through smarter, more targeted SEO strategies." },
    { title: "✓ Startups", description: "Our affordable SEO services for startups in the UK are designed to build search visibility fast — without a massive agency budget." },
    { title: "✓ E-commerce Brands", description: "Wanting to reduce paid ad dependency and build sustainable organic traffic that compounds month after month." },
    { title: "✓ Service Businesses", description: "Generating local or national leads through Google — consultants, law firms, clinics, tradespeople and agencies." },
    { title: "✓ Businesses Burned by Bad SEO Before", description: "Who need an agency that communicates clearly, delivers transparently and focuses on revenue — not just rankings." },
  ];

  const faqs = [
    { q: "How long does SEO take to show results?", a: "Honest answer — SEO takes time. Most clients see meaningful improvements within 3 to 6 months, with significant compounding results from month 6 onwards. We set realistic expectations from day one and show progress every step of the way." },
    { q: "How much do your SEO services cost?", a: "Our SEO services are priced specifically to be affordable for small businesses in the UK and USA. Packages are tailored based on your competition level, goals and scope. Contact us for a free audit and transparent custom quote." },
    { q: "Do you work with UK and USA businesses remotely?", a: "Yes — the majority of our clients are based in the UK, USA and Europe. We work fully remotely across time zones and communicate via WhatsApp, email and video calls — with the same quality and responsiveness as a local agency." },
    { q: "What is generative engine optimization?", a: "Generative engine optimization or GEO is the process of optimizing your content to appear in AI-generated search answers from tools like ChatGPT, Perplexity and Google AI Overviews. It is one of the most important emerging SEO disciplines and we are one of the few agencies currently offering it." },
    { q: "What is answer engine optimization?", a: "Answer engine optimization or AEO focuses on structuring content to win featured snippets, People Also Ask results and direct answer positions in Google — capturing traffic before users even click through to a website." },
    { q: "Do you offer standalone SEO audits?", a: "Yes. If you just want to understand what is holding your website back, we offer standalone SEO audit reports with clear, prioritized and actionable recommendations." },
  ];

  return (
    <>
      <div className="seo-page">
        <Navbar />

        {/* HERO */}
        <section className="seo-hero">
          <div className="seo-container">
            {/* MOVED BREADCRUMB HERE: Renders inside the dark container above the badge */}
            <Breadcrumb />

            {/* Top Label / Pill Badge with Safe inline-span wrapper */}
            <span className="seo-hero-badge-wrapper">
              <span className="seo-hero-badge-dot"></span>
              <span className="seo-hero-badge-text">
                AI Search Engine Optimization Agency
              </span>
            </span>

            {/* Split heading text with a highlight span */}
            <h1 className="seo-hero-title">
              SEO Agency for Small Business UK <span className="seo_title_sky_blue">— Built to Generate Leads, Not Just Rankings</span>
            </h1>
            
            <p className="seo-desc">
              ZonzocTech is an AI SEO agency helping small businesses and startups across the UK and USA grow their organic traffic, attract qualified leads and turn search visibility into real revenue — without the price tag of a big London agency.
            </p>
            
            <div className="hero-buttons">
              <a href="/contact" className="btn-primary">Get Your Free SEO Audit →</a>
              <a href="#seo-results" className="btn-secondary">See Our Results ↓</a>
            </div>
            
            <p className="seo-sub" style={{ marginTop: "24px" }}>Trusted by 120+ businesses across UK, USA & Europe</p>
          </div>
        </section>

        {/* STATS BAR */}
        <section className="stats-bar" id="seo-results">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </section>

        {/* SECTION 1 — WHY CHOOSE ZONZOCTECH */}
        <section className="seo-why">
          <div className="seo-container">
            {/* Section Header */}
            <div className="seo-section-header">
              <span className="seo-section-badge">
                Why Choose Us
              </span>

              <h2>
                Why Small Businesses in the UK & USA Choose{" "}
                <span>ZonzocTech</span> for SEO
              </h2>

              <p className="seo-section-subtitle">
                Most businesses have tried SEO before and seen little to no return.
                Our approach is different — every SEO strategy is designed to generate
                qualified leads, measurable growth and long-term revenue.
              </p>
            </div>

            {/* Comparison Cards */}
            <div className="seo-why-grid">

              {/* Typical Agency */}
              <div className="seo-why-card seo-why-negative">
                <div className="seo-why-card-header">
                  <div className="seo-why-icon">❌</div>
                  <h3>Typical SEO Agency</h3>
                </div>

                <ul className="seo-why-list">
                  <li>Chases rankings with no revenue focus</li>
                  <li>Generic monthly reports</li>
                  <li>Same strategy for every client</li>
                  <li>Slow results with no clear timeline</li>
                  <li>No understanding of your business model</li>
                </ul>
              </div>

              {/* ZonzocTech */}
              <div className="seo-why-card seo-why-positive">
                <div className="seo-why-card-header">
                  <div className="seo-why-icon">🚀</div>
                  <h3>ZonzocTech</h3>
                </div>

                <ul className="seo-why-list">
                  <li>Focused on leads and revenue from day one</li>
                  <li>Clear and transparent reporting</li>
                  <li>Custom SEO strategy for your business</li>
                  <li>Realistic timelines and measurable KPIs</li>
                  <li>Deep understanding of UK & USA markets</li>
                </ul>
              </div>

            </div>

            {/* Bottom Highlight Banner */}
            <div className="seo-why-banner">
              <strong>
                SEO should be an investment that generates measurable business growth —
                not a monthly expense with unclear results.
              </strong>
            </div>
          </div>
        </section>

        {/* SECTION 2 — SEO SERVICES */}
        <section className="seo-services-modern">
          <div className="seo-container">

            {/* Header */}
            <div className="seo-section-header">
              <span className="seo-section-badge">
                Our Services
              </span>

              <h2>
                SEO Services for <span>UK & USA</span> Businesses
              </h2>

              <p className="seo-section-subtitle">
                From technical SEO to content strategy and link building, we deliver
                complete search optimization services designed to increase rankings,
                qualified traffic and revenue.
              </p>
            </div>

            {/* Services Grid */}
            <div className="seo-services-grid">
              {seoServices.map((service, i) => (
                <div key={i} className="seo-service-card">
                  
                  <div className="seo-service-top">
                    <div className="seo-service-number">
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    <div className="seo-service-icon">
                      {[
                        "⚙️",
                        "📝",
                        "📈",
                        "🔗",
                        "📍",
                        "🛒"
                      ][i]}
                    </div>
                  </div>

                  <h3>{service.title}</h3>

                  <p className="seo-service-desc">
                    {service.description}
                  </p>

                  <ul className="seo-service-list">
                    {service.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Bottom Banner */}
            <div className="seo-services-banner">
              <strong>
                Technical SEO • Content Strategy • Link Building • Local SEO • E-commerce SEO
              </strong>
            </div>

          </div>
        </section>
        
        {/* SECTION 3 — AI SEO ADVANTAGE */}
        <section className="seo-ai-section">
          <div className="seo-container">

            {/* Header */}
            <div className="seo-section-header">
              <span className="seo-section-badge">AI SEO Advantage</span>
              <h2>
                Future-Proof Your Visibility with <span>AI SEO</span>
              </h2>
              <p className="seo-section-subtitle">
                We optimize your website for both traditional search engines and AI-powered platforms like ChatGPT, Perplexity, Gemini and Google AI Overviews.
              </p>
            </div>

            {/* Feature 1 */}
            <div className="seo-ai-row">
              <div className="seo-ai-text">
                <div className="seo-ai-tag">GEO</div>
                <h3>Generative Engine Optimization</h3>
                <p>We structure your content for AI search engines like ChatGPT and Perplexity.</p>
              </div>

              <div className="seo-ai-visual">
                <div className="seo-ai-icon-large">🤖</div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="seo-ai-row reverse">
              <div className="seo-ai-text">
                <div className="seo-ai-tag">AEO</div>
                <h3>Answer Engine Optimization</h3>
                <p>We optimize for featured snippets and direct Google answers.</p>
              </div>

              <div className="seo-ai-visual">
                <div className="seo-ai-icon-large">💬</div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="seo-ai-row">
              <div className="seo-ai-text">
                <div className="seo-ai-tag">AI</div>
                <h3>AI Keyword Clustering</h3>
                <p>We group keywords by intent using AI-driven analysis.</p>
              </div>

              <div className="seo-ai-visual">
                <div className="seo-ai-icon-large">🧠</div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="seo-ai-row reverse">
              <div className="seo-ai-text">
                <div className="seo-ai-tag">INTENT</div>
                <h3>Search Intent Prediction</h3>
                <p>We map user intent to improve conversions and ranking accuracy.</p>
              </div>

              <div className="seo-ai-visual">
                <div className="seo-ai-icon-large">🎯</div>
              </div>
            </div>

            {/* Footer */}
            <div className="seo-ai-footer">
              Optimized for Google • ChatGPT • Perplexity • Gemini • AI Overviews
            </div>

          </div>
        </section>
        
        {/* SECTION 4 — PROCESS */}
        <section className="seo-process-light">
          <div className="seo-container">

            <div className="seo-section-header">
              <span className="seo-section-badge">Our Process</span>
              <h2>
                SEO System Built for <span>Predictable Growth</span>
              </h2>
              <p className="seo-section-subtitle">
                A structured workflow that turns SEO into a clear, measurable system.
              </p>
            </div>

            <div className="seo-process-light-grid">

              <div className="seo-process-light-item bg-blue">
                <div className="seo-process-icon">🔍</div>
                <div>
                  <h3>Audit & Analysis</h3>
                  <p>We analyze technical SEO, competitors, and keyword opportunities.</p>
                </div>
              </div>

              <div className="seo-process-light-item bg-teal">
                <div className="seo-process-icon">🧭</div>
                <div>
                  <h3>Strategy Planning</h3>
                  <p>We create a data-driven roadmap aligned with your business goals.</p>
                </div>
              </div>

              <div className="seo-process-light-item bg-amber">
                <div className="seo-process-icon">⚙️</div>
                <div>
                  <h3>Technical SEO Fix</h3>
                  <p>We fix speed, crawlability, indexing, and site structure issues.</p>
                </div>
              </div>

              <div className="seo-process-light-item bg-green">
                <div className="seo-process-icon">🧠</div>
                <div>
                  <h3>Content & Authority</h3>
                  <p>We build topic clusters, content, and backlinks for authority growth.</p>
                </div>
              </div>

              <div className="seo-process-light-item bg-slate">
                <div className="seo-process-icon">📈</div>
                <div>
                  <h3>Tracking & Scaling</h3>
                  <p>We monitor performance and scale what drives real conversions.</p>
                </div>
              </div>

            </div>

          </div>
        </section>
        
        {/* SECTION 5 — WHO THIS IS FOR */}
        <section className="seo-audience">
          <div className="seo-container">

            <div className="seo-section-header">
              <span className="seo-section-badge">Who It's For</span>
              <h2>
                SEO Services Built for <span>Real Businesses</span>
              </h2>
              <p className="seo-section-subtitle">
                We don’t do one-size-fits-all SEO. Every strategy is built based on your business type and goals.
              </p>
            </div>

            <div className="seo-audience-grid">

              <div className="seo-audience-card bg-blue">
                <div className="seo-audience-icon">🏢</div>
                <h3>Small Businesses</h3>
                <p>Compete with larger brands using smart, targeted SEO strategies.</p>
              </div>

              <div className="seo-audience-card bg-teal">
                <div className="seo-audience-icon">🚀</div>
                <h3>Startups</h3>
                <p>Fast SEO growth strategies designed to build visibility quickly.</p>
              </div>

              <div className="seo-audience-card bg-amber">
                <div className="seo-audience-icon">🛒</div>
                <h3>E-commerce Brands</h3>
                <p>Drive organic product traffic and reduce dependency on ads.</p>
              </div>

              <div className="seo-audience-card bg-green">
                <div className="seo-audience-icon">📍</div>
                <h3>Service Businesses</h3>
                <p>Generate local and national leads consistently through Google.</p>
              </div>

              <div className="seo-audience-card bg-slate">
                <div className="seo-audience-icon">📊</div>
                <h3>Growth-Focused Companies</h3>
                <p>Businesses that want measurable ROI from SEO investment.</p>
              </div>

              <div className="seo-audience-card bg-blue">
                <div className="seo-audience-icon">⚡</div>
                <h3>Rebuilding SEO Clients</h3>
                <p>For businesses recovering from poor SEO or previous agencies.</p>
              </div>

            </div>

          </div>
        </section>
        
        {/* SECTION 6 — FAQ */}
        <section className="seo-faq">
          <div className="seo-container">

            <div className="seo-section-header">
              <span className="seo-section-badge">FAQ</span>
              <h2>
                Frequently Asked <span>Questions</span>
              </h2>
              <p className="seo-section-subtitle">
                Everything you need to know about our SEO services.
              </p>
            </div>

            <div className="seo-faq-center">

              {faqs.map((faq, i) => (
                <details key={i} className="seo-faq-box">
                  <summary>
                    {faq.q}
                    <span className="faq-icon">+</span>
                  </summary>
                  <p>{faq.a}</p>
                </details>
              ))}

            </div>

          </div>
        </section>
        
        {/* CTA */}
        <section className="cta-section">
          <div className="seo-container">
            <h2>Ready to Grow Your Organic Traffic and Generate More Leads?</h2>
            <p>Get a free SEO audit from our AI SEO agency and find out exactly what is holding your website back — no commitment, no spam, just clear answers.</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn-primary">Get My Free SEO Audit →</a>
              <a href="#seo-results" className="btn-secondary">See Our Results</a>
            </div>
            <p className="cta-small-text">Free audit. No commitment. Results-focused.</p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default SEOServices;