'use client';
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicePageHero from "../components/ServicePageHero";
import ServiceCtaForm from "../components/ServiceCtaForm";
import { serviceImages } from "../data/serviceImages";
import "../styles/EcommercePage.css";

const imgs = serviceImages['ecommerce'];

const EcommerceDev = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const stats = [
    { icon: "🛒", number: "150+", label: "Stores Launched" },
    { icon: "❤️", number: "98%",  label: "Client Satisfaction" },
    { icon: "💰", number: "50M+", label: "Revenue Generated" },
    { icon: "👥", number: "90+",  label: "Experts & Developers" },
    { icon: "🕐", number: "24/7", label: "Support Available" },
    { icon: "⭐", number: "5+",   label: "Years Experience" },
  ];

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

  const whyChecklist = [
    "Slow loading speeds lead to higher bounce rates",
    "Poor mobile experience reduces conversions",
    "Complex checkout causes cart abandonment",
    "Weak SEO limits organic traffic and visibility",
    "Poor user experience lowers customer trust",
    "Lack of optimization hurts long-term growth",
  ];

  const services = [
    { icon: "🛍️", title: "Shopify Development",         description: "Custom Shopify stores built for performance, scalability, and high conversions.",       link: "/shopify-development" },
    { icon: "🧩", title: "WooCommerce Development",      description: "Powerful WooCommerce solutions for growing brands and online businesses.",              link: "/woocommerce-development" },
    { icon: "🎨", title: "Ecommerce Design",             description: "Modern, conversion-focused designs that enhance customer experience.",                   link: "/ecommerce-design" },
    { icon: "📈", title: "Conversion Optimization",      description: "Improve product pages, checkout flows, and user journeys to increase sales.",            link: "/cro" },
    { icon: "📱", title: "Mobile Optimization",          description: "Mobile-first ecommerce experiences that drive more mobile conversions.",                  link: "/mobile-optimization" },
    { icon: "🔍", title: "Ecommerce SEO",                description: "Technical SEO, product optimization, and strategies to increase organic visibility.",     link: "/ecommerce-seo" },
    { icon: "⚡", title: "Speed Optimization",           description: "Improve Core Web Vitals, loading speed, and overall website performance.",               link: "/speed-optimization" },
    { icon: "⚙️", title: "Integrations & Automation",   description: "Payment gateways, CRM, inventory, marketing automation & third-party integrations.",    link: "/integrations" },
  ];

  const platforms = [
    { name: "Shopify",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/shopify/shopify-original.svg",         color: "#96bf48" },
    { name: "WooCommerce",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/woocommerce/woocommerce-original.svg", color: "#7f54b3" },
    { name: "WordPress",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg",     color: "#21759b" },
    { name: "Stripe",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/stripe/stripe-original.svg",           color: "#635bff" },
    { name: "PayPal",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/paypal/paypal-original.svg",           color: "#003087" },
    { name: "Klaviyo",      icon: null,                                                                                              color: "#1b7f3b" },
    { name: "NX Commerce",  icon: null,                                                                                              color: "#003070" },
    { name: "Headless",     icon: null,                                                                                              color: "#0d1b3e" },
  ];

  const results = [
    { stat: "+42%", label: "Increase in Conversion Rate",    sub: "After redesign & CRO Implementation",         icon: "📈" },
    { stat: "+65%", label: "Mobile Performance Boost",       sub: "Faster load times and better mobile experience", icon: "📱" },
    { stat: "+48%", label: "Revenue Growth",                 sub: "Through optimization and better user journeys",  icon: "💰" },
    { stat: "+31%", label: "Organic Traffic Growth",         sub: "With advanced SEO and technical improvements",   icon: "🔍" },
  ];

  const processSteps = [
    { number: "01", icon: "🔍", title: "Discovery & Strategy",      description: "We analyze your business, audience, competitors, and goals to create the right ecommerce strategy." },
    { number: "02", icon: "🎨", title: "UX & Design",               description: "We design intuitive user experiences and stunning visuals that drive engagement and sales." },
    { number: "03", icon: "</>", title: "Development",              description: "Our developers build fast, secure, scalable, and high-performing ecommerce stores." },
    { number: "04", icon: "⚙️", title: "Optimization & Testing",   description: "We optimize speed, SEO, checkout, and conversions with rigorous testing." },
    { number: "05", icon: "🚀", title: "Launch & Growth",           description: "We launch your store and provide ongoing support to ensure long-term growth." },
  ];

  const whoFor = [
    { icon: "🛒", label: "Ecommerce Brands" },
    { icon: "🏪", label: "Online Stores" },
    { icon: "🛍️", label: "Shopify Businesses" },
    { icon: "🧩", label: "WooCommerce Stores" },
    { icon: "👗", label: "Fashion Brands" },
    { icon: "💄", label: "Beauty & Cosmetics" },
    { icon: "💻", label: "Electronics Stores" },
    { icon: "💎", label: "Luxury Brands" },
    { icon: "🚀", label: "Startup Ecommerce" },
    { icon: "📈", label: "High-Growth Stores" },
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
        <Navbar />

        <ServicePageHero
          badge="ECOMMERCE DEVELOPMENT & OPTIMIZATION"
          title="High-Converting Ecommerce Stores Built for"
          titleAccent="Performance, Scalability & Revenue Growth"
          subtitle="We design and develop conversion-focused ecommerce stores that turn traffic into revenue. From Shopify and WooCommerce to fully custom platforms — we build scalable, fast, and sales-driven online stores engineered for growth."
          features={["Conversion-Focused Design", "Shopify & WooCommerce Experts", "Speed & SEO Optimized"]}
          primaryCta={{ href: "/contact", label: "Get Free Ecommerce Audit →" }}
          secondaryCta={{ href: "/case-studies", label: "See Our Works →" }}
          heroImage={imgs.hero}
          heroAlt={imgs.heroAlt}
        />

        {/* ── STATS BAR — 6 items with icons ──────────── */}
        <section className="ecd-stats-bar" id="ecd-work">
          <div className="ecd-stats-inner">
            {stats.map((s, i) => (
              <div key={i} className="ecd-stat-cell">
                <span className="ecd-stat-icon">{s.icon}</span>
                <span className="ecd-stat-num">{s.number}</span>
                <span className="ecd-stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 1 — WHY STORES UNDERPERFORM ──────── */}
        <section className="ecd-why-section">
          <div className="ecd__container">
            <div className="ecd-why-grid">

              {/* Left — text + checklist */}
              <div className="ecd-why-left">
                <span className="ecd-eyebrow">Why Stores Underperform</span>
                <h2 className="ecd__heading" style={{ textAlign: 'left', marginBottom: '16px' }}>
                  Great Products Deserve Better Ecommerce Experiences
                </h2>
                <p className="ecd__description" style={{ textAlign: 'left', margin: '0 0 24px' }}>
                  Slow websites, poor design, complicated checkouts, and weak SEO cost businesses thousands of potential customers every month.
                </p>
                <ul className="ecd-checklist">
                  {whyChecklist.map((item, i) => (
                    <li key={i} className="ecd-check-item">
                      <span className="ecd-check-dot"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — comparison table */}
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

        {/* ── SECTION 2 — SERVICES GRID ─────────────────── */}
        <section className="ecd-services-section">
          <div className="ecd__container">
            <div className="ecd-section-head">
              <span className="ecd-eyebrow">Our Services</span>
              <h2 className="ecd__heading">Ecommerce Development & Optimization Services</h2>
              <p className="ecd__subtitle">
                Complete ecommerce solutions — from new store builds to performance optimization and conversion improvements.
              </p>
            </div>

            <div className="ecd-services-grid">
              {services.map((svc, i) => (
                <div key={i} className="ecd-service-card">
                  <div className="ecd-service-icon-box">{svc.icon}</div>
                  <h3 className="ecd-service-title">{svc.title}</h3>
                  <p className="ecd-service-desc">{svc.description}</p>
                  <a href={svc.link} className="ecd-learn-more">Learn More →</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PLATFORMS STRIP ───────────────────────────── */}
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

        {/* ── SUCCESS RESULTS — Dark bg stats ───────────── */}
        <section className="ecd-results-section">
          <div className="ecd__container">
            <div className="ecd-section-head">
              <span className="ecd-eyebrow ecd-eyebrow--light">Real Results. Real Growth.</span>
              <h2 className="ecd__heading ecd-white">Ecommerce Success Stories</h2>
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

        {/* ── PROCESS — Horizontal 5 steps ──────────────── */}
        <section className="ecd-process-section">
          <div className="ecd__container">
            <div className="ecd-section-head">
              <span className="ecd-eyebrow">Our Proven Process</span>
              <h2 className="ecd__heading">How We Build & Optimize Ecommerce Stores</h2>
              <p className="ecd__subtitle">
                A proven process that takes you from strategy to a live, high-performing ecommerce store.
              </p>
            </div>

            <div className="ecd-process-track">
              {processSteps.map((step, i) => (
                <div key={i} className="ecd-process-step">
                  <div className="ecd-process-node">
                    <span className="ecd-process-icon">{step.icon}</span>
                    {i < processSteps.length - 1 && <div className="ecd-process-dash"></div>}
                  </div>
                  <span className="ecd-process-num">{step.number}. {step.title}</span>
                  <p className="ecd-process-desc">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHO FOR — Icon tile grid ───────────────────── */}
        <section className="ecd-who-section">
          <div className="ecd__container">
            <div className="ecd-section-head">
              <span className="ecd-eyebrow">Who It's For</span>
              <h2 className="ecd__heading">Who Our Ecommerce Solutions Are Built For</h2>
            </div>
            <div className="ecd-who-grid">
              {whoFor.map((item, i) => (
                <div key={i} className="ecd-who-tile">
                  <div className="ecd-who-icon">{item.icon}</div>
                  <span className="ecd-who-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────── */}
        <section className="ecd-faq-section">
          <div className="ecd__container">
            <div className="ecd-section-head">
              <span className="ecd-eyebrow">FAQ</span>
              <h2 className="ecd__heading">Frequently Asked Questions</h2>
            </div>
            <div className="sp-faq-box-grid">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`sp-faq-box-item ${openFaq === i ? "active" : ""}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className="sp-faq-box-q">
                    <span>{faq.question}</span>
                    {openFaq === i ? <Minus size={17} /> : <Plus size={17} />}
                  </div>
                  {openFaq === i && (
                    <div className="sp-faq-box-a"><p>{faq.answer}</p></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceCtaForm
          title="Ready to Build a"
          titleAccent="High-Converting Ecommerce Store?"
          description="Let's create an ecommerce experience that converts visitors into customers and helps your business grow online."
          checks={[
            "Free Consultation",
            "No Obligation",
            "Quick Response (1–3 hours)",
            "100% Confidential",
          ]}
          serviceOptions={[
            "Shopify Development",
            "WooCommerce Development",
            "Ecommerce Design",
            "Conversion Optimization",
            "Ecommerce SEO",
            "Speed Optimization",
          ]}
          ctaImage={imgs.cta}
          ctaAlt={imgs.ctaAlt}
        />

        <Footer />
      </div>
    </>
  );
};

export default EcommerceDev;
