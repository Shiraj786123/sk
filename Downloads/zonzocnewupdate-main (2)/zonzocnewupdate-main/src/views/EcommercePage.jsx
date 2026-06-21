'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus, Minus, ArrowRight, Zap, Smartphone, ShoppingCart, Search, Shield, TrendingUp, CheckCircle2
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
import "../styles/EcommercePage.css";
import "../styles/service-card-text-fix.css";

const cta = serviceCtaContent.ecommerce;

const EcommerceDev = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const withoutOpt = [
    "Slow Loading Speed",
    "High Cart Abandonment",
    "Low Conversion Rate",
    "Poor Mobile Experience",
    "Low Search Visibility",
    "Lost Revenue Opportunities",
  ];

  const withZonzoc = [
    "Lightning Fast Performance",
    "Smooth Checkout Experience",
    "Higher Conversion Rate",
    "Mobile-First Design",
    "Strong SEO & Visibility",
    "More Revenue & Growth",
  ];

  const services = [
    { icon: "🛍️", title: "Shopify Dev",        description: "Custom Shopify stores built for performance, scalability, and conversions." },
    { icon: "🧩", title: "WooCommerce",        description: "WooCommerce solutions for growing brands and online businesses of every size." },
    { icon: "🎨", title: "Store Design",       description: "Conversion-focused designs that enhance customer experience and drive sales." },
    { icon: "📈", title: "CRO",                description: "Improve product pages, checkout flows, and journeys to increase revenue." },
    { icon: "📱", title: "Mobile UX",          description: "Mobile-first stores that drive more conversions from smartphone shoppers." },
    { icon: "🔍", title: "Store SEO",          description: "Technical and product SEO to grow organic visibility and store traffic." },
    { icon: "⚡", title: "Page Speed",         description: "Improve Core Web Vitals, load speed, and overall store performance." },
    { icon: "⚙️", title: "Integrations",       description: "Payment gateways, CRM, inventory, and marketing automation integrations." },
  ];

  const platforms = [
    { name: "Shopify",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/shopify/shopify-original.svg",         color: "#96bf48" },
    { name: "WooCommerce",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/woocommerce/woocommerce-original.svg", color: "#7f54b3" },
    { name: "WordPress",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg",     color: "#21759b" },
    { name: "Stripe",       icon: "https://cdn.simpleicons.org/stripe",                                                             color: "#635bff" },
    { name: "PayPal",       icon: "https://cdn.simpleicons.org/paypal",                                                             color: "#003087" },
    { name: "Klaviyo",      icon: null,                                                                                             color: "#1b7f3b" },
    { name: "NX Commerce",  icon: null,                                                                                             color: "#003070" },
    { name: "Headless",     icon: null,                                                                                             color: "#0d1b3e" },
  ];

  const results = [
    { stat: "+42%", label: "Increase in Conversion Rate",    sub: "After redesign & CRO Implementation",         icon: "📈" },
    { stat: "+65%", label: "Mobile Performance Boost",       sub: "Faster load times and better mobile experience", icon: "📱" },
    { stat: "+48%", label: "Revenue Growth",                 sub: "Through optimization and better user journeys",  icon: "💰" },
    { stat: "+31%", label: "Organic Traffic Growth",         sub: "With advanced SEO and technical improvements",   icon: "🔍" },
  ];

  const faqs = [
    { question: "How much does ecommerce development cost?",         answer: "Pricing depends on store size, features, integrations, platform requirements, and customization needs. Contact us for a free audit and transparent quote." },
    { question: "Do you build Shopify and WooCommerce stores?",      answer: "Yes. We develop and optimize both Shopify and WooCommerce ecommerce websites for businesses across the UK, USA, and UAE." },
    { question: "Can you improve ecommerce conversion rates?",       answer: "Yes. We optimize product pages, checkout flows, mobile UX, speed, and customer journeys to improve conversions." },
    { question: "Do you provide ecommerce SEO services?",            answer: "Yes. We provide technical SEO, product optimization, category optimization, and ecommerce search visibility improvements." },
    { question: "Can you optimize existing ecommerce websites?",     answer: "Yes. We improve performance, speed, UX, SEO, checkout experiences, and ecommerce functionality for existing stores." },
  ];

  return (
    <>
      <div className="ecd__wrapper">
        {/* ── COMFORTABLE LEFT-ALIGNMENT OVERRIDE WITHOUT CLIPPING OVERFLOWS ── */}
<Navbar />

        {/* ── HERO CONTEXT WRAPPER FOR PRECISE VISUAL POSITIONING ── */}
        <ServicePageHero
            badge="ECOMMERCE DEVELOPMENT & OPTIMIZATION"
            title="High-Converting Ecommerce Stores"
            titleAccent="Built for Performance, Scalability & Revenue Growth"
            subtitle="We design and develop conversion-focused ecommerce stores that turn traffic into revenue. From Shopify and WooCommerce to fully custom platforms — we build scalable, fast, and sales-driven online stores engineered for growth."
            features={["Conversion-Focused Design", "Shopify & WooCommerce Experts", "Speed & SEO Optimized"]}
            primaryCta={{ href: "/contact", label: "Get Free Ecommerce Audit →" }}
            secondaryCta={{ href: "/case-studies", label: "See Our Works →" }}
            heroImage="/images/ecommerce.png"
            heroImageTransparent
            heroAlt="E-commerce Sales Performance Dashboard Analytics Grid"
          />

        <ServiceIntroMarqueeSection serviceKey="ecommerce" headingTag="h2" />

        {/* ── WHY STORES UNDERPERFORM ── */}
        <section className="ecd-why-section">
          <div className="ecd__container">
            <div className="ecd-why-grid">
              <div className="ecd-why-left">
                <span className="ecd-eyebrow">Why Stores Underperform</span>
                <h3 className="ecd__heading ecd-why-heading sp-heading-2line sp-heading-2line--left">
                  <span className="sp-heading-line">Great Products Deserve</span>
                  <span className="sp-heading-accent">Better Ecommerce Experiences</span>
                </h3>
                <p className="ecd__description ecd-why-desc">
                  Slow websites, poor design, complicated checkouts, and weak SEO cost businesses thousands of potential customers every month.
                </p>
              </div>

              <div className="ecd-comparison-card">
                <div className="ecd-compare-col ecd-compare-bad">
                  <div className="ecd-compare-head ecd-head-bad">
                    <span className="ecd-compare-icon">✕</span>
                    Without Optimization
                  </div>
                  {withoutOpt.map((item, i) => (
                    <div key={i} className="ecd-compare-row ecd-row-bad">
                      <span className="ecd-row-x">✕</span>
                      {item}
                    </div>
                  ))}
                </div>
                <div className="ecd-compare-col ecd-compare-good">
                  <div className="ecd-compare-head ecd-head-good">
                    <span className="ecd-compare-icon">✓</span>
                    With ZonzocTech
                  </div>
                  {withZonzoc.map((item, i) => (
                    <div key={i} className="ecd-compare-row ecd-row-good">
                      <span className="ecd-row-check">✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES GRID ── */}
        <section className="ecd-services-section">
          <div className="ecd__container">
            <div className="ecd-section-head">
              <span className="ecd-eyebrow">Our Services</span>
              <h4 className="ecd__heading sp-heading-2line">
                <span className="sp-heading-line">Ecommerce Development &</span>
                <span className="sp-heading-accent">Optimization Services</span>
              </h4>
              <p className="ecd__subtitle">
                Complete ecommerce solutions — from new store builds to performance optimization and conversion improvements.
              </p>
            </div>
            <div className="ecd-services-grid">
              {services.map((svc, i) => (
                <div key={i} className="ecd-service-card">
                  <div className="ecd-service-icon-box">{svc.icon}</div>
                  <p className="ecd-service-title sp-card-title-1l">{svc.title}</p>
                  <p className="ecd-service-desc sp-card-desc-3l">{svc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceWhyChooseSection serviceKey="ecommerce" />

        {/* ── PLATFORMS STRIP ── */}
        <section className="ecd-platforms-section">
          <div className="ecd__container">
            <span className="ecd-eyebrow ecd-eyebrow--center">Platforms We Work With</span>
            <div className="ecd-platforms-strip">
              {platforms.map((p, i) => (
                <div key={i} className="ecd-platform-card">
                  <div className="ecd-platform-icon-wrap">
                    {p.icon ? (
                      <img
                        src={p.icon}
                        alt={p.name}
                        className="ecd-platform-img"
                        onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                      />
                    ) : null}
                    <span
                      className="ecd-platform-fallback"
                      style={{ background: p.color, display: p.icon ? 'none' : 'flex' }}
                    >
                      {p.name.charAt(0)}
                    </span>
                  </div>
                  <span className="ecd-platform-name" style={{ color: p.color }}>{p.name}</span>
                </div>
              ))}
              <div className="ecd-platform-card ecd-platform-more-card">
                <div className="ecd-platform-icon-wrap ecd-more-icon">+</div>
                <span className="ecd-platform-name" style={{ color: '#6b7280' }}>More</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── SUCCESS RESULTS ── */}
        <section className="ecd-results-section">
          <div className="ecd__container">
            <div className="ecd-section-head">
              <span className="ecd-eyebrow ecd-eyebrow--light">Real Results. Real Growth.</span>
              <h5 className="ecd__heading ecd-white sp-heading-2line">
                <span className="sp-heading-line">Ecommerce Success</span>
                <span className="sp-heading-accent">Stories</span>
              </h5>
            </div>
            <div className="ecd-results-grid">
              {results.map((r, i) => (
                <div key={i} className="ecd-result-card">
                  <div className="ecd-result-icon">{r.icon}</div>
                  <div className="ecd-result-stat">{r.stat}</div>
                  <div className="ecd-result-label">{r.label}</div>
                  <div className="ecd-result-sub">{r.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceProcessSection serviceKey="ecommerce" headingTag="h6" />

        <ServiceIndustriesSection serviceKey="ecommerce" headingTag="h6" />

        {/* ── FAQ ── */}
        <section className="ecd-faq-section">
          <div className="ecd__container">
            <div className="ecd-section-head">
              <span className="ecd-eyebrow">FAQ</span>
              <h6 className="ecd__heading sp-heading-2line">
                <span className="sp-heading-line">Frequently Asked</span>
                <span className="sp-heading-accent">Questions</span>
              </h6>
            </div>
            <div className="ecd-faq-list">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`ecd-faq-item ${openFaq === i ? 'ecd-faq-item--open' : ''}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className="ecd-faq-q">
                    <span>{faq.question}</span>
                    <span className="ecd-faq-chevron">{openFaq === i ? '−' : '+'}</span>
                  </div>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="ecd-faq-a"
                      >
                        <p>{faq.answer}</p>
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
    </>
  );
};

export default EcommerceDev;