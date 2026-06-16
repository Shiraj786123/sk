'use client';
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/AIOptimizationPage.css";
import Breadcrumb from "../components/Breadcrumb";
import {
  Bot,
  Brain,
  Workflow,
  BarChart3,
  Database,
  Layers,
} from "lucide-react";

const AISearchOptimization = () => {
  // FAQ State Logic
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const stats = [
    { number: "150+", label: "Projects Delivered" },
    { number: "120+", label: "Clients Served" },
    { number: "35%", label: "Average Traffic Growth" },
    { number: "4.9★", label: "Client Rating" },
  ];

  const comparisonData = [
    { traditional: "Optimizes for Google blue links only", ai: "Optimizes for Google AND AI platforms" },
    { traditional: "Keyword ranking focused", ai: "Entity and intent focused" },
    { traditional: "Click-through traffic dependent", ai: "Visible in AI-generated answers" },
    { traditional: "Ignores AI-generated answers", ai: "Cited by ChatGPT and Perplexity" },
    { traditional: "Misses voice & conversational search", ai: "Captures voice search queries" },
    { traditional: "Falling effectiveness year on year", ai: "Future-proof visibility strategy" },
  ];

  const whyChoose = [
    { title: "✅ Early Mover Advantage", description: "Most agencies are still catching up with AI search. ZonzocTech has been optimising for generative and answer engines since their emergence — giving our clients a significant head start over competitors still focused on traditional SEO alone." },
    { title: "✅ Combined Traditional & AI SEO", description: "We don't abandon what works. Traditional Google SEO still drives significant traffic and our strategies combine proven SEO fundamentals with cutting-edge AI search optimization — covering every channel where your customers search." },
    { title: "✅ Business-Focused Visibility", description: "AI search visibility means nothing if it doesn't drive business outcomes. Every optimization we make is tied back to leads, enquiries and revenue — not just impressions or citations." },
    { title: "✅ Technical & Content Expertise", description: "AI search optimization requires both strong technical SEO and high-quality content strategy. Our team covers both — giving you a complete, integrated approach rather than half-measures." },
    { title: "✅ Transparent Reporting", description: "We track and report on AI visibility, traditional rankings, organic traffic and business leads — giving you a clear picture of how our work is impacting your growth." },
  ];

  const processSteps = [
    { number: "01", title: "AI Search Visibility Audit", description: "We audit how your website currently appears in AI-generated search answers, Google AI Overviews, featured snippets and traditional rankings — identifying the biggest visibility gaps and opportunities." },
    { number: "02", title: "Entity & Content Mapping", description: "We map your business entities, key topics and target questions — building a clear picture of the content and signals needed to establish authority in your niche." },
    { number: "03", title: "Technical & Schema Optimization", description: "We implement structured data, fix technical issues and optimise your site architecture for both traditional and AI search crawlability." },
    { number: "04", title: "Content Optimization & Creation", description: "We optimize existing content and create new content specifically designed to appear in AI-generated answers — clear, authoritative and structured around real customer questions." },
    { number: "05", title: "Monitor, Report & Adapt", description: "AI search is evolving rapidly. We monitor your visibility across all platforms, report on progress monthly and continuously adapt your strategy as AI search develops." },
  ];

  const whoFor = [
    { title: "✓ Businesses Losing Traffic to AI Overviews", description: "Whose organic traffic has declined as Google AI Overviews answer more queries without clicks — and need to adapt their strategy urgently." },
    { title: "✓ UK & USA Service Businesses", description: "Who rely on organic search leads and need to appear in AI-generated answers when customers search for their services." },
    { title: "✓ E-commerce Brands", description: "Who need product and brand visibility in AI shopping recommendations and generative search results." },
    { title: "✓ Content-Led Businesses", description: "Blogs, media sites and information businesses whose traffic model is threatened by AI-generated answers replacing clicks." },
    { title: "✓ Forward-Thinking Businesses", description: "Who want to establish AI search visibility now — before competitors catch on and the space becomes more competitive." },
  ];

  const faqs = [
    { question: "What is generative engine optimization?", answer: "Generative engine optimization or GEO is the process of optimizing your website content and structure so AI-powered search engines like ChatGPT, Perplexity and Google AI Overviews cite your business as a trusted source in their generated answers. It is one of the most important emerging disciplines in digital marketing." },
    { question: "What is answer engine optimization?", answer: "Answer engine optimization or AEO focuses on structuring content to win direct answer positions — Google featured snippets, People Also Ask results, voice search responses and AI Overview citations. The goal is to be the answer — not just a result on a list." },
    { question: "Is traditional SEO still important?", answer: "Yes — absolutely. Traditional Google SEO still drives significant traffic and remains essential. AI search optimization works alongside traditional SEO — not instead of it. Businesses that combine both have the strongest overall search visibility." },
    { question: "How do you measure AI search visibility?", answer: "We track brand mentions and citations in AI-generated answers, featured snippet wins, People Also Ask appearances, voice search visibility and traditional ranking improvements — giving a comprehensive picture of your search presence." },
    { question: "How is this different from regular SEO?", answer: "Traditional SEO focuses on ranking web pages for keyword searches. AI search optimization focuses on being cited, quoted or recommended by AI systems that answer questions directly — requiring different content structures, entity signals and technical approaches." },
    { question: "How long does AI search optimization take?", answer: "Some improvements such as structured data and featured snippet wins can show results within weeks. Building topical authority and consistent AI citation presence typically takes 3 to 6 months of consistent optimization." },
  ];

  return (
    <>
      <div className="aiso__wrapper">
        <Navbar />

        {/* Hero Section */}
        <section className="aiso__hero">
          {/* Pattern container left in case you need it later, but hidden via CSS */}
          <div className="aiso__hero_background">
            <div className="aiso__hero_circle aiso__circle_1"></div>
            <div className="aiso__hero_circle aiso__circle_2"></div>
            <div className="aiso__hero_circle aiso__circle_3"></div>
          </div>

          <div className="aiso__hero_container">
            {/* MOVED BREADCRUMB HERE: Renders inside the dark container above the badge */}
            <Breadcrumb />

            {/* Top Label / Pill Badge with Safe inline-span wrapper */}
            <span className="aiso-hero-badge-wrapper">
              <span className="aiso-hero-badge-dot"></span>
              <span className="aiso-hero-badge-text">
                AI Search Optimization Agency
              </span>
            </span>

            {/* Mixed color heading using inline span */}
            <h1 className="aiso__hero_title">
              AI Search Optimization Agency Helping Businesses Appear in <span className="aiso__hero_title_highlight">Google AI, ChatGPT & Generative Search Results</span>
            </h1>

            <p className="aiso__hero_text">
              Search has evolved beyond traditional Google rankings. We help businesses stay visible across AI-powered platforms like ChatGPT, Perplexity, and Google AI Overviews — where customers now get answers directly.
            </p>

            <div className="hero-buttons">
              <a href="/contact" className="btn-primary">
                Get Free AI Search Audit →
              </a>
              <a href="#aiso-how" className="btn-secondary">
                See How It Works ↓
              </a>
            </div>

            <p className="hero-trust-text">
              Trusted by 120+ businesses across UK, USA & Europe
            </p>

          </div>
        </section>
        
        {/* Stats Bar */}
        <section className="stats-bar" id="aiso-how">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </section>

        {/* Section 1 — New Reality of Search */}
        <section className="aiso-s1">
          <div className="aiso-container">

            {/* SECTION HEADER */}
            <div className="aiso-s1__header">
              <span className="aiso-s1__badge">
                AI Search Is Changing SEO
              </span>

              <h2 className="aiso-s1__title">
                The New Reality of Search — Why Traditional SEO Is No Longer Enough
              </h2>

              <p className="aiso-s1__intro">
                For decades, SEO meant ranking on Google's blue links. Today, customers
                ask ChatGPT, Google AI Overviews and Perplexity for direct answers.
                Businesses that fail to adapt are losing visibility every day.
              </p>
            </div>

            {/* STATS */}
            <div className="aiso-s1__stats">

              <div className="aiso-s1__stat-card">
                <span className="aiso-s1__stat-number">60%</span>
                <span className="aiso-s1__stat-label">
                  Searches Answered Directly by AI
                </span>
              </div>

              <div className="aiso-s1__stat-card">
                <span className="aiso-s1__stat-number">0 Clicks</span>
                <span className="aiso-s1__stat-label">
                  Many Searches End Without Website Visits
                </span>
              </div>

              <div className="aiso-s1__stat-card">
                <span className="aiso-s1__stat-number">24/7</span>
                <span className="aiso-s1__stat-label">
                  AI Platforms Answer Customer Questions
                </span>
              </div>

              <div className="aiso-s1__stat-card">
                <span className="aiso-s1__stat-number">Future</span>
                <span className="aiso-s1__stat-label">
                  Businesses Must Optimise Beyond Google
                </span>
              </div>

            </div>

            {/* CONTENT */}
            <div className="aiso-s1__content">

              <p>
                Google now answers many searches directly inside AI Overviews — without
                users clicking through to websites. ChatGPT and Perplexity provide
                millions of business recommendations every day.
              </p>

              <p>
                This means your business must be optimised not just for rankings, but to
                be cited and recommended by AI search engines.
              </p>

            </div>

            {/* COMPARISON TITLE */}
            <h3 className="aiso-s1__comparison-title">
              Traditional SEO vs AI Search Optimization
            </h3>

            {/* TABLE */}
            <div className="aiso-s1__table">

              <div className="aiso-s1__table-header">
                <div className="aiso-s1__table-head">
                  Traditional SEO Only
                </div>

                <div className="aiso-s1__table-head aiso-s1__table-head--highlight">
                  AI Search Optimization
                </div>
              </div>

              {comparisonData.map((row, i) => (
                <div className="aiso-s1__table-row" key={i}>
                  <div className="aiso-s1__table-cell">
                    {row.traditional}
                  </div>

                  <div className="aiso-s1__table-cell aiso-s1__table-cell--highlight">
                    {row.ai}
                  </div>
                </div>
              ))}

            </div>

          </div>
        </section>
        
        {/* Section 2 — Ecosystem */}
        <section className="s2-wrapper">
          <div className="s2-container">
            <div className="s2-header">
              <h2>AI-Powered Service Ecosystem</h2>
              <p>We don’t sell isolated services — we build connected AI systems that automate your entire business flow.</p>
            </div>
            <div className="s2-heroCard">
              <Brain className="heroIcon" />
              <h3>GPT-Powered Business Intelligence System</h3>
              <p>We integrate GPT into your core business processes — turning your website, CRM, and workflows into a self-learning AI system that improves conversions automatically.</p>
            </div>
            <div className="s2-secondary">
              <div className="s2-miniCard"><Bot className="icon" /><div><h4>AI Chatbots</h4><p>Customer support + sales automation</p></div></div>
              <div className="s2-miniCard"><Workflow className="icon" /><div><h4>Automation Engine</h4><p>Eliminate manual workflows</p></div></div>
            </div>
            <div className="s2-tagRow">
              <span><BarChart3 size={16} /> Data Intelligence</span>
              <span><Layers size={16} /> CRM Sync</span>
              <span><Database size={16} /> AI Infrastructure</span>
            </div>
          </div>
        </section>

        {/* Section 3 — Why Choose */}
        <section className="s3-wrapper">
          <div className="s3-container">
            <div className="s3-header">
              <span className="s3-badge">Why Choose Us</span>
              <h2>We Build AI Search Dominance Systems</h2>
            </div>
            <div className="s3-story">
              {whyChoose.map((item, i) => (
                <div key={i} className="s3-storyItem">
                  <div className="s3-step">0{i + 1}</div>
                  <div className="s3-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <div className="section-bridge">
          <span>Our Proven AI Search Optimization Process</span>
        </div>

        {/* Section 4 — Process */}
        <section className="s4-wrapper">
          <div className="s4-container">
            <div className="s4-header">
              <span className="s4-badge">Our Process</span>
              <h2>AI Search Optimization Framework</h2>
            </div>
            <div className="s4-grid">
              {processSteps.map((step, i) => (
                <div key={i} className="s4-row">
                  <div className="s4-pillars"><span className="s4-pill">{step.number}</span></div>
                  <div className="s4-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5 — Who For */}
        <section className="s5-wrapper">
          <div className="s5-container">
            <div className="s5-header">
              <span className="s5-badge">Who We Help</span>
              <h2>Businesses That Need AI Search Visibility</h2>
            </div>
            <div className="s5-grid">
              {whoFor.map((item, i) => (
                <div key={i} className={`s5-item ${i === 0 ? "active" : ""}`}>
                  <div className="s5-left"><span className="s5-icon">✓</span><h3>{item.title}</h3></div>
                  <div className="s5-right"><p>{item.description}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-bridge faq-bridge">
          <span>Still Have Questions? Let’s Make It Clear</span>
        </div>

        {/* Section 6 — FAQ */}
        <section className="faq-wrapper">
          <div className="faq-container">
            <div className="faq-header">
              <span className="faq-badge">FAQ</span>
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className="faq-list">
              {faqs.map((faq, i) => (
                <div className="faq-box" key={i} onClick={() => toggleFAQ(i)}>
                  <div className="faq-top">
                    <span className="faq-question">
                      {String(i + 1).padStart(2, "0")}. {faq.question}
                    </span>
                    <span className="faq-icon">{openIndex === i ? "−" : "+"}</span>
                  </div>
                  {openIndex === i && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="cta-section">
          <div className="aiso__container">
            <h2>Ready to Be Found Everywhere Your Customers Search?</h2>
            
            <p>
              Get a free AI search visibility audit and find out how your business appears across Google, ChatGPT, Perplexity and AI-powered search — no commitment required.
            </p>
            
            <div className="cta-buttons">
              <a href="/contact" className="btn-primary">Get Free AI Search Audit →</a>
              <a href="/seo-services" className="btn-secondary">View Our SEO Services</a>
            </div>

            {/* Added trust text structure matching the image */}
            <p className="cta-subtext-muted">
              No commitment • No spam • Just real strategy
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AISearchOptimization;