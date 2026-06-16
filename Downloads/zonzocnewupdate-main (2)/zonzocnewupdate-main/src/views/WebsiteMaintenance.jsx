'use client';
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicePageHero from '../components/ServicePageHero';
import ServiceIntroSection from '../components/ServiceIntroSection';
import ServiceCtaForm from '../components/ServiceCtaForm';
import { serviceImages } from '../data/serviceImages';
import '../styles/WebsiteMaintenance.css';

const imgs = serviceImages['website-maintenance'];

const WebsiteMaintenance = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const stats = [
    { icon: "🖥️", number: "150+", label: "Websites Maintained" },
    { icon: "😊", number: "120+", label: "Happy Clients" },
    { icon: "📈", number: "99.9%", label: "Average Uptime" },
    { icon: "⭐", number: "4.9★", label: "Client Rating" },
    { icon: "🕐", number: "24/7", label: "Support Available" },
  ];

  const whyChecklist = [
    "Prevent security threats and malware attacks",
    "Improve website speed and user experience",
    "Avoid downtime and unexpected issues",
    "Protect SEO rankings and online visibility",
    "Keep your website updated and compatible",
  ];

  const services = [
    { icon: "🛡️", title: "Website Security Monitoring", description: "24/7 monitoring to detect malware, vulnerabilities, and suspicious schemes before they affect your website." },
    { icon: "⚡", title: "Performance Optimization", description: "Improve speed, Core Web Vitals, caching, images, database and overall website performance." },
    { icon: "🧩", title: "WordPress Maintenance", description: "Regular updates, compatibility checks, plugin management and WordPress core performance care." },
    { icon: "🔒", title: "Malware Protection & Removal", description: "Proactive protection and instant malware removal to keep your site clean all secure." },
    { icon: "💾", title: "Website Backups", description: "Automated backup and easy restore options to protect your website data at all times." },
    { icon: "🔧", title: "Technical Website Support", description: "Ongoing support for bugs, errors, downtime and website tested technical problems." },
    { icon: "📊", title: "SEO & Health Monitoring", description: "Monitor SEO health, broken links, indexing issues and technical performance." },
    { icon: "📡", title: "Uptime Monitoring", description: "We monitor your website 24/7 to ensure maximum uptime and availability." },
  ];

  const carePlans = [
    {
      name: "Monthly Maintenance",
      desc: "Essential care for growing businesses",
      popular: false,
      features: [
        "Weekly Backups",
        "Security Monitoring",
        "Uptime Monitoring",
        "Plugin & Theme Updates",
        "Email Support",
      ],
    },
    {
      name: "Performance Plan",
      desc: "Perfect for performance-focused teams",
      popular: true,
      features: [
        "Daily Backups",
        "Security & Malware Protection",
        "Performance Optimization",
        "Plugin & Theme Updates",
        "Uptime Monitoring",
        "Priority Support",
      ],
    },
    {
      name: "Security & Monitoring",
      desc: "For businesses needing full security",
      popular: false,
      features: [
        "Daily Backups",
        "Advanced Security Monitoring",
        "Performance Optimization",
        "SEO Health Monitoring",
        "Uptime Monitoring",
        "Priority Support",
      ],
    },
    {
      name: "Managed WordPress",
      desc: "Complete management for enterprise sites",
      popular: false,
      features: [
        "Real-time Backups",
        "Advanced Security + Firewall",
        "Speed & Core Web Vitals",
        "Full Site Management",
        "Uptime Monitoring",
        "24/7 Priority Support",
      ],
    },
  ];

  const processSteps = [
    { number: "01", icon: "🔍", title: "Audit & Analysis", description: "We perform a complete audit of your website's security performance and overall health." },
    { number: "02", icon: "⚙️", title: "Optimisation & Setup", description: "We optimise speed, security, and implement full monitoring and take full backup." },
    { number: "03", icon: "📡", title: "Continuous Monitoring", description: "24/7 monitoring for uptime, security threats, performance and technical issues." },
    { number: "04", icon: "🔄", title: "Issue Resolution", description: "We fix issues quickly and ensure your website runs smoothly without downtime." },
    { number: "05", icon: "📊", title: "Reporting & Improvement", description: "You get regular reports and recommendations to keep your website performing at its best." },
  ];

  const whoFor = [
    { icon: "🏢", label: "Business Websites" },
    { icon: "🛒", label: "Ecommerce Stores" },
    { icon: "🧩", label: "WordPress Websites" },
    { icon: "🏛️", label: "Corporate Websites" },
    { icon: "📈", label: "High-Traffic Websites" },
    { icon: "🎯", label: "Agencies & Freelancers" },
    { icon: "🚀", label: "Startups & SMEs" },
    { icon: "🔧", label: "WooCommerce Stores" },
    { icon: "💼", label: "Service Businesses" },
    { icon: "⚡", label: "Enterprise Platforms" },
  ];

  const faqs = [
    { question: "How much does website maintenance cost?", answer: "Pricing depends on your website size, platform, traffic, maintenance requirements, and support needs. Contact us for a free health check and custom quote." },
    { question: "Do you provide WordPress maintenance services?", answer: "Yes. We provide complete WordPress maintenance, updates, security monitoring, optimization, and support." },
    { question: "Will you help improve my website speed?", answer: "Yes. We optimize website performance, loading speed, Core Web Vitals, caching, and server-level configurations." },
    { question: "How do you keep my website secure?", answer: "We provide malware scanning, uptime monitoring, vulnerability detection, and proactive website protection." },
    { question: "Do you offer emergency website support?", answer: "Yes. We provide technical troubleshooting, recovery support, and urgent maintenance assistance when needed." },
    { question: "Do you maintain non-WordPress websites?", answer: "Yes. We maintain custom websites, React and Next.js applications, e-commerce stores and any other web platform." },
  ];

  return (
    <>
      <div className="wm__wrapper">
        <Navbar />

        <ServicePageHero
          badge="WEBSITE MAINTENANCE & SECURITY"
          title="Website Maintenance, Performance &"
          titleAccent="Security Services for UK, USA & UAE Businesses"
          subtitle="ZonzocTech provides professional website maintenance, performance and security services for businesses across the UK, USA and UAE. We monitor, protect and optimise your website around the clock — so you can focus on running your business."
          features={["Speed Optimized", "Secure & Protected", "24/7 Monitoring"]}
          primaryCta={{ href: '/contact', label: 'Get Free Website Health Check →' }}
          secondaryCta={{ href: '#wm-services', label: 'See Our Services ↓' }}
          heroImage={imgs.hero}
          heroAlt={imgs.heroAlt}
        />

        {/* ── STATS BAR ─────────────────────────────── */}
        <section className="wm-stats-bar" id="wm-services">
          <div className="wm-stats-inner">
            {stats.map((s, i) => (
              <div key={i} className="wm-stat-cell">
                <span className="wm-stat-icon">{s.icon}</span>
                <span className="wm-stat-num">{s.number}</span>
                <span className="wm-stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        <ServiceIntroSection
          label="WHY WEBSITE MAINTENANCE MATTERS"
          title="Why Website Maintenance Is Essential for"
          titleAccent="Your Business"
          description="A well-maintained website is faster, more secure, and more reliable. Without regular maintenance, your site can face security risks, downtime, slow performance, and lost customers."
          checklist={whyChecklist}
          chipLabel="Security"
          introImage={imgs.intro}
          introAlt={imgs.introAlt}
        />

        {/* ── SECTION 2 — SERVICES ──────────────────── */}
        <section className="wm-services-section">
          <div className="wm-container">
            <div className="wm-section-head">
              <span className="wm-eyebrow">Our Services</span>
              <h2 className="wm-section-title">Comprehensive Website Maintenance Services</h2>
              <p className="wm-section-sub">
                Complete website care covering performance, security, updates and monitoring — everything your website needs to stay fast and stable.
              </p>
            </div>

            <div className="wm-services-grid">
              {services.map((svc, i) => (
                <div key={i} className="wm-service-card">
                  <div className="wm-service-icon-box">{svc.icon}</div>
                  <h3 className="wm-service-title">{svc.title}</h3>
                  <p className="wm-service-desc">{svc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 3 — CARE PLANS ────────────────── */}
        <section className="wm-plans-section">
          <div className="wm-container">
            <div className="wm-section-head">
              <span className="wm-eyebrow wm-eyebrow--blue">Care Plans</span>
              <h2 className="wm-section-title">Website Care Plans for Every Business</h2>
              <p className="wm-section-sub">
                Choose the plan that fits your website size, traffic, and support needs.
              </p>
            </div>

            <div className="wm-plans-grid">
              {carePlans.map((plan, i) => (
                <div key={i} className={`wm-plan-card ${plan.popular ? 'wm-plan-card--popular' : ''}`}>
                  {plan.popular && <div className="wm-plan-badge">MOST POPULAR</div>}
                  <div className="wm-plan-top">
                    <h3 className="wm-plan-name">{plan.name}</h3>
                    <p className="wm-plan-desc">{plan.desc}</p>
                  </div>
                  <ul className="wm-plan-features">
                    {plan.features.map((f, j) => (
                      <li key={j}><span className="wm-plan-check">✓</span>{f}</li>
                    ))}
                  </ul>
                  <a href="/contact" className={`wm-plan-btn ${plan.popular ? 'wm-plan-btn--pop' : ''}`}>
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 4 — PROCESS ───────────────────── */}
        <section className="wm-process-section">
          <div className="wm-container">
            <div className="wm-section-head">
              <span className="wm-eyebrow wm-eyebrow--light">Our Process</span>
              <h2 className="wm-section-title wm-white">Our Proven Maintenance Process</h2>
              <p className="wm-section-sub wm-sub-light">
                A structured workflow that keeps your website secure, fast and continuously optimised.
              </p>
            </div>

            <div className="wm-process-track">
              {processSteps.map((step, i) => (
                <div key={i} className="wm-process-step">
                  <div className="wm-process-node">
                    <span className="wm-process-icon">{step.icon}</span>
                    {i < processSteps.length - 1 && <div className="wm-process-connector"></div>}
                  </div>
                  <span className="wm-process-num">{step.number}</span>
                  <h3 className="wm-process-title">{step.title}</h3>
                  <p className="wm-process-desc">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 5 — WHO IT'S FOR ──────────────── */}
        <section className="wm-who-section">
          <div className="wm-container">
            <div className="wm-section-head">
              <span className="wm-eyebrow">Who It's For</span>
              <h2 className="wm-section-title">Who Our Website Maintenance Services Are For</h2>
              <p className="wm-section-sub">
                Designed for any business that relies on their website for leads, sales and customer trust.
              </p>
            </div>

            <div className="wm-who-grid">
              {whoFor.map((item, i) => (
                <div key={i} className="wm-who-tile">
                  <div className="wm-who-icon">{item.icon}</div>
                  <span className="wm-who-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 6 — FAQ ───────────────────────── */}
        <section className="wm-faq-section">
          <div className="wm-container">
            <div className="wm-section-head">
              <span className="wm-eyebrow">FAQ / Help</span>
              <h2 className="wm-section-title">Frequently Asked Questions</h2>
            </div>

            <div className="sp-faq-box-grid">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`sp-faq-box-item ${activeFaq === i ? 'active' : ''}`}
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  <div className="sp-faq-box-q">
                    <span>{faq.question}</span>
                    {activeFaq === i ? <Minus size={17} /> : <Plus size={17} />}
                  </div>
                  {activeFaq === i && (
                    <div className="sp-faq-box-a">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceCtaForm
          title="Ready to Protect, Optimise &"
          titleAccent="Maintain Your Website?"
          description="Let our experts handle your website maintenance, security and performance — while you focus on growing your business."
          checks={[
            "No Obligation",
            "Quick Response (1–3 hours)",
            "100% Confidential",
            "UK, USA & UAE Support",
          ]}
          serviceOptions={[
            "Website Security Monitoring",
            "Performance Optimization",
            "WordPress Maintenance",
            "Malware Protection & Removal",
            "Website Backups",
          ]}
          ctaImage={imgs.cta}
          ctaAlt={imgs.ctaAlt}
        />

        <Footer />
      </div>
    </>
  );
};

export default WebsiteMaintenance;
