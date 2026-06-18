'use client';
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicePageHero from '../components/ServicePageHero';
import ServiceIntroMarqueeSection from '../components/ServiceIntroMarqueeSection';
import ServiceWhyChooseSection from '../components/ServiceWhyChooseSection';
import WhoWeAre from '../components/WhoWeAre';
import ServicePageCta from '../components/ServicePageCta';
import ServicePageMobileStyles from '../components/ServicePageMobileStyles';
import ServiceIndustriesSection from '../components/ServiceIndustriesSection';
import ServiceProcessSection from '../components/ServiceProcessSection';
import { serviceCtaContent } from '../data/serviceCtaContent';
import { serviceImages } from '../data/serviceImages';
import '../styles/WebsiteMaintenance.css';
import '../styles/service-card-text-fix.css';

const imgs = serviceImages['website-maintenance'];
const cta = serviceCtaContent['website-maintenance'];

const WebsiteMaintenance = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const stats = [
    { icon: "🖥️", number: "150+", label: "Websites Maintained" },
    { icon: "😊", number: "120+", label: "Happy Clients" },
    { icon: "📈", number: "99.9%", label: "Average Uptime" },
    { icon: "⭐", number: "4.9★", label: "Client Rating" },
    { icon: "🕐", number: "24/7", label: "Support Available" },
  ];

  const services = [
    { icon: "🛡️", title: "Security Monitoring", description: "24/7 monitoring to detect malware, threats, and vulnerabilities." },
    { icon: "⚡", title: "Performance Tuning", description: "Improve speed, Core Web Vitals, caching, and database performance." },
    { icon: "🧩", title: "WordPress Care", description: "Updates, compatibility checks, plugin care, and core maintenance." },
    { icon: "🔒", title: "Malware Protection", description: "Proactive protection and fast malware removal to keep sites secure." },
    { icon: "💾", title: "Website Backups", description: "Automated backups with easy restore to protect your website data." },
    { icon: "🔧", title: "Technical Support", description: "Support for bugs, errors, downtime, and technical issues when needed." },
    { icon: "📊", title: "SEO Health Checks", description: "Monitor SEO health, broken links, indexing, and technical issues." },
    { icon: "📡", title: "Uptime Monitoring", description: "We monitor your site 24/7 to ensure uptime and availability." },
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
        {/* ── COMFORTABLE LEFT-ALIGNMENT OVERRIDE WITHOUT CLIPPING OVERFLOWS ── */}
<Navbar />

        {/* ── HERO ── */}
        <ServicePageHero
            badge="WEBSITE MAINTENANCE & SECURITY"
            title="Website Maintenance, Performance &"
            titleAccent="Security Services for UK, USA & UAE Businesses"
            subtitle="ZonzocTech provides professional website maintenance, performance and security services for businesses across the UK, USA and UAE. We monitor, protect and optimise your website around the clock — so you can focus on running your business."
            features={["Speed Optimized", "Secure & Protected", "24/7 Monitoring"]}
            primaryCta={{ href: '/contact', label: 'Get Free Website Health Check →' }}
            secondaryCta={{ href: '#wm-services', label: 'See Our Services ↓' }}
            heroImage={imgs.hero?.src || imgs.hero} /* Safeguards static Webpack object resolution */
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

        <ServiceIntroMarqueeSection serviceKey="website-maintenance" />

        {/* ── SECTION 2 — SERVICES ──────────────────── */}
        <section className="wm-services-section">
          <div className="wm-container">
            <div className="wm-section-head">
              <span className="wm-eyebrow">Our Services</span>
              <p className="wm-section-title">Comprehensive Website Maintenance Services</p>
              <p className="wm-section-sub">
                Complete website care covering performance, security, updates and monitoring — everything your website needs to stay fast and stable.
              </p>
            </div>

            <div className="wm-services-grid">
              {services.map((svc, i) => (
                <div key={i} className="wm-service-card">
                  <div className="wm-service-icon-box">{svc.icon}</div>
                  <p className="wm-service-title sp-card-title-1l">{svc.title}</p>
                  <p className="wm-service-desc sp-card-desc-3l">{svc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceWhyChooseSection serviceKey="website-maintenance" />

        <ServiceProcessSection serviceKey="website-maintenance" />

        {/* ── SECTION 3 — CARE PLANS ────────────────── */}
        <section className="wm-plans-section">
          <div className="wm-container">
            <div className="wm-section-head">
              <span className="wm-eyebrow wm-eyebrow--blue">Care Plans</span>
              <p className="wm-section-title">Website Care Plans for Every Business</p>
              <p className="wm-section-sub">
                Choose the plan that fits your website size, traffic, and support needs.
              </p>
            </div>

            <div className="wm-plans-grid">
              {carePlans.map((plan, i) => (
                <div key={i} className={`wm-plan-card ${plan.popular ? 'wm-plan-card--popular' : ''}`}>
                  {plan.popular && <div className="wm-plan-badge">MOST POPULAR</div>}
                  <div className="wm-plan-top">
                    <p className="wm-plan-name">{plan.name}</p>
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

        <ServiceIndustriesSection serviceKey="website-maintenance" />

        {/* ── SECTION 6 — FAQ ───────────────────────── */}
        <section className="wm-faq-section">
          <div className="wm-container">
            <div className="wm-section-head">
              <span className="wm-eyebrow">FAQ / Help</span>
              <p className="wm-section-title">Frequently Asked Questions</p>
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

        <WhoWeAre />
        <ServicePageCta {...cta} />

        <ServicePageMobileStyles />
        <Footer />
      </div>
    </>
  );
};

export default WebsiteMaintenance;