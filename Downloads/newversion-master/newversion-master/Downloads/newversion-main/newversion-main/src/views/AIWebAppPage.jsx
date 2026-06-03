'use client';

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import "../styles/AIWebAppPage.css";

const AIWebAppDev = () => {
  // Hardcoding the exact font stack directly to stop relying on variables that might be out of scope
  const forcedFontFamily = "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";

  const stats =[
    { number: "150+", label: "Projects Delivered" },
    { number: "120+", label: "Clients Served" },
    { number: "10+", label: "Years Experience" },
    { number: "4.9★", label: "Client Rating" },
  ];

  const services = [
    { i: "🚀", t: "AI SaaS Platform Development", points:["Scalable multi-tenant builds.", "Subscription billing engines.", "Advanced user management.", "AI feature integration logic."] },
    { i: "🧠", t: "GPT & LLM Web Applications", points:["OpenAI & Claude integration.", "Context-aware smart search.", "Automated content generation.", "Intelligent business workflows."] },
    { i: "⚙️", t: "AI Business Automation Tools", points:["Automated data entry layers.", "Report generation systems.", "Lead qualification automation.", "Customer communication tools."] },
    { i: "📊", t: "AI Dashboards & Analytics", points:["Live data processing feeds.", "Predictive analysis models.", "Actionable business insights.", "Smart data visualizations."] },
    { i: "🤖", t: "AI Chatbots & Assistants", points:["24/7 customer query handling.", "Lead capture & qualification.", "Automated appointment booking.", "Seamless system escalation."] },
    { i: "🔌", t: "API & Third Party Integrations", points:["Integrating existing web apps.", "Custom AI API development.", "Third-party tool connection.", "Minimal rebuild requirements."] }
  ];

  const whyChoosePoints = [
    { i: "✅", t: "AI-First Approach", points:["Design with AI at the core.", "Optimal model selection data.", "Strategic integration points.", "Future-ready scalability."] },
    { i: "✅", t: "Full-Stack Expertise", points:["Frontend and Backend teams.", "Database architecture setup.", "Secure cloud deployment.", "End-to-end code ownership."] },
    { i: "✅", t: "Business-Focused Dev", points:["Real-world business outcomes.", "Measurable ROI features.", "Value-driven user experience.", "Competitive market advantage."] },
    { i: "✅", t: "Affordable UK Agency", points:["Competitive offshore rates.", "Local UK agency quality.", "Transparent cost models.", "Zero hidden fee billing."] },
    { i: "✅", t: "Long-Term Partnership", points:["Launch day optimization.", "Ongoing feature development.", "Continuous tech maintenance.", "Growth-aligned support model."] },
    { i: "✅", t: "Technical Excellence", points:["Clean maintainable code.", "Rigorous testing standards.", "Modern framework usage.", "Scalable system performance."] }
  ];

  return (
    <div className="aiwa__wrapper" style={{ fontFamily: forcedFontFamily }}>
      <Navbar />

      {/* 1. HERO */}
      <section className="aiwa__hero_section" style={{ fontFamily: forcedFontFamily }}>
        <div className="aiwa__container">
          <Breadcrumb />

          {/* Top Label / Pill Badge */}
          <span className="aiwa__hero_badge_wrapper">
            <span className="aiwa__hero_badge_dot"></span>
            <span className="aiwa__hero_badge_text" style={{ fontFamily: forcedFontFamily }}>
              AI Web Application Development Agency
            </span>
          </span>

          {/* Heading with explicit, absolute font definition */}
          <h1 className="aiwa__heading" style={{ fontFamily: forcedFontFamily, fontWeight: '800' }}>
            AI Web Application Development for{" "}
            <span className="text_light_blue" style={{ fontFamily: forcedFontFamily, fontWeight: '800' }}>
              UK & USA Businesses
            </span>
          </h1>

          <p className="aiwa__hero_text_white" style={{ fontFamily: forcedFontFamily }}>
            ZonzocTech builds custom AI-powered web applications. From intelligent
            dashboards to GPT-powered tools — we scale your business growth.
          </p>

          {/* CTA BUTTONS */}
          <div className="aiwa__hero_actions">
            <a href="/contact" className="aiwa__btn_primary" style={{ fontFamily: forcedFontFamily }}>
              Get Free Consultation
            </a>
            {/* Updated Portfolio Button */}
            <a 
              href="https://zonzoc-tech.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="aiwa__btn_secondary" 
              style={{ fontFamily: forcedFontFamily }}
            >
              View Portfolio →
            </a>
          </div>

          {/* TRUST TEXT */}
          <p className="aiwa__hero_trust_text" style={{ fontFamily: forcedFontFamily }}>
            Trusted by 120+ businesses across the UK, USA & Europe
          </p>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="aiwa__stats_section">
        <div className="aiwa__container">
          <div className="aiwa__stats_border_box">
            {stats.map((s, i) => (
              <div key={i} className="stat_item">
                <span className="stat_num">{s.number}</span>
                <span className="stat_lbl">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTRODUCTION */}
      <section className="aiwa__section white_bar">
        <div className="aiwa__container">
          <h2 className="aiwa__title_dark">What Is AI Web Application Development?</h2>
          <div className="aiwa__bar_row">
            <div className="aiwa__bar_num"><h2>AI</h2></div>
            <div className="aiwa__bar_content">
              <p>AI development uses artificial intelligence to automate tasks, analyze data, and personalize experiences without manual intervention. Unlike standard apps, these learn from data and improve over time, providing a major competitive edge for UK and USA businesses.</p>
            </div>
          </div>

          <h3 className="aiwa__grid_title">Examples of AI Web Applications We Build:</h3>
          
          <div className="aiwa__grid_examples_fixed">
            {[ 
              "Intelligent dashboards & reporting", 
              "AI-powered SaaS platforms", 
              "GPT powered customer tools", 
              "Automated lead qualification", 
              "AI recommendation engines", 
              "Internal workflow automation", 
              "Predictive analytics platforms", 
              "AI chatbots & virtual assistants" 
            ].map((item, index) => (
              <div key={index} className="aiwa__example_stripe_card">
                <span className="aiwa__stripe_text">{item}</span>
                <span className="aiwa__stripe_arrow">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES GRID */}
      <section className="aiwa__section grey_bar">
        <div className="aiwa__container">
          <h2 className="aiwa__title_dark">Custom AI Web App Services</h2>
          <div className="aiwa__grid_3">
            {services.map((s, i) => (
              <div key={i} className="aiwa__service_box hover_lift">
                <div className="aiwa__service_header">
                  <div className="aiwa__box_icon">{s.i}</div>
                  <h4 className="aiwa__box_title_left">{s.t}</h4>
                </div>
                <ul className="aiwa__card_bullets_left">
                  {s.points.map((p, idx) => <li key={idx}><span>›</span> {p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
  
      {/* 5. PROCESS SECTION */}
      <section className="aiwa__section process-section">
        <div className="aiwa__container">
          <div className="process-label">Our Process</div>
          <h2 className="aiwa__title_dark">
            Our Proven <span className="text_light_blue">5-Step Process</span>
          </h2>
          <p className="process-subtitle">
            We follow a structured methodology to design, build, and launch AI-powered web applications.
          </p>

          <div className="steps-grid">
            {/* ... Process mapping logic remains here unchanged ... */}
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE SECTION */}
      <section className="aiwa__section premium-trust-bg">
        <div className="aiwa__container">
          <h2 className="trust-grid-main-title">Why UK & USA Businesses Choose ZonzocTech</h2>
          <div className="trust-premium-grid">
            {whyChoosePoints.map((w, i) => (
              <div key={i} className="trust-premium-card">
                <div className="tech-decor-wrapper"><div className="tech-line-nodes"></div></div>
                <h4 className="trust-premium-card-title">{w.t}</h4>
                <ul className="trust-premium-list">
                  {w.points.map((p, idx) => (
                    <li key={idx} className="trust-premium-item">
                      <div className="prism-icon" aria-hidden="true">
                        <div className="prism-face face-top"></div>
                        <div className="prism-face face-left"></div>
                        <div className="prism-face face-right"></div>
                      </div>
                      <span className="trust-premium-text">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="aiwd-final-cta">
        <div className="aiwd-container">
          <div className="aiwd-cta-box">
            <h2 className="aiwd-cta-title">Ready to Build Your AI Website?</h2>
            <p className="aiwd-cta-subtext">
              Let’s turn your idea into a high-converting AI-powered website for your business.
            </p>
            <div className="aiwd-hero-actions">
              <a href="/contact" className="aiwd-btn-primary">Get Free Consultation →</a>
              {/* Updated Portfolio Button in Final CTA */}
              <a 
                href="https://zonzoc-tech.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="aiwd-btn-secondary"
              >
                View Portfolio →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIWebAppDev;