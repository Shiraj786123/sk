'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus, Minus, ArrowRight, Search, TrendingUp, Shield, Target, Rocket, CheckCircle2
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
import "../styles/SEOServices.css";

const cta = serviceCtaContent.seo;

const SEOServices = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const seoServices = [
    {
      icon: "⚙️",
      title: "Technical SEO",
      description: "Fix site structure, indexing, crawlability, and Core Web Vitals for rankings.",
    },
    {
      icon: "📝",
      title: "On-Page SEO",
      description: "Optimize content, headings, metadata, and links for search visibility.",
    },
    {
      icon: "🔍",
      title: "Keyword Research",
      description: "Data-driven keyword strategy targeting high-intent search terms.",
    },
    {
      icon: "📊",
      title: "SEO Audits",
      description: "Full audits uncovering issues, opportunities, and quick wins for growth.",
    },
    {
      icon: "📍",
      title: "Local SEO",
      description: "Google Business Profile, citations, and local pages for local rankings.",
    },
    {
      icon: "🛒",
      title: "Ecommerce SEO",
      description: "Product and category SEO to drive organic traffic and online sales.",
    },
    {
      icon: "✍️",
      title: "Content SEO",
      description: "Content that ranks higher, matches search intent, and converts leads.",
    },
    {
      icon: "⚡",
      title: "Speed Optimization",
      description: "Faster load times, mobile performance, and Core Web Vitals tuning.",
    },
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
        <style dangerouslySetInnerHTML={{ __html: `
          html body .seo-page > .topbar {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }

          html body .seo-page > .topbar .topbar-inner {
            padding: 8px 24px !important;
          }
        ` }} />

        <Navbar />

        {/* ── HERO ── */}
        <ServicePageHero
          badge="SEO SERVICES"
          title="SEO Built for Rankings and Traffic"
          titleAccent="with Sustainable Growth"
          subtitle="ZonzocTech is an AI SEO agency helping small businesses and startups across the UK and USA grow their organic traffic, attract qualified leads and turn search visibility into real revenue — without the price tag of a big London agency."
          primaryCta={{ href: "/contact", label: "Get Your Free SEO Audit →" }}
          secondaryCta={{ href: "/case-studies", label: "See Our Work ↓" }}
          features={["Higher Rankings", "Qualified Organic Traffic", "Transparent Reporting"]}
          heroImage="/images/seoservices.png"
          heroImageTransparent
          heroAlt="SEO Services — targeted traffic, lead generation and growth illustration"
        />

        <ServiceIntroMarqueeSection serviceKey="seo" />

        {/* ── WHY SEO MATTERS ── */}
        <section className="ss-section ss-section--white">
          <div className="ss-container">
            <div className="ss-why-grid" style={{ marginBottom: 40 }}>

              {/* Left */}
              <div className="ss-why-left">
                <span className="ss-badge">Why SEO Matters</span>
                <p className="ss-h2 sp-heading-2line sp-heading-2line--left">
                  <span className="sp-heading-line">Get Found. Get Traffic.</span>
                  <span className="sp-heading-accent">Grow Your Business.</span>
                </p>
                <p className="ss-p">
                  Search engines are the #1 source of traffic for businesses online. Our SEO
                  strategies help you rank higher, attract the right audience and convert visitors
                  into loyal customers.
                </p>
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
                    <div className="ss-google-result-badge">Position #1</div>
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
              <p className="ss-h2 sp-heading-2line">
                <span className="sp-heading-line">Complete SEO Solutions to</span>
                <span className="sp-heading-accent">Boost Your Online Presence</span>
              </p>
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
                  <p className="ss-service-title sp-card-title-1l">{s.title}</p>
                  <p className="ss-service-desc sp-card-desc-3l">{s.description}</p>
                  <a href="/contact" className="ss-learn-more">Learn More →</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceWhyChooseSection serviceKey="seo" />

        <ServiceProcessSection serviceKey="seo" />

        <ServiceIndustriesSection serviceKey="seo" />

        {/* ── FAQ ORIGINAL ACCORDION WITH ANIMATEPRESENCE SLIDE ── */}
        <section className="ss-section ss-section--white">
          <div className="ss-container">
            <div className="ss-section-header">
              <span className="ss-badge">Frequently Asked Questions</span>
              <p className="ss-h2 sp-heading-2line">
                <span className="sp-heading-line">SEO Services —</span>
                <span className="sp-heading-accent">Frequently Asked Questions</span>
              </p>
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
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="ss-faq-a"
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

        <WhoWeAre />
        <ServicePageCta {...cta} />

        <ServicePageMobileStyles />
        <Footer />
      </div>
    </>
  );
};
    
export default SEOServices;