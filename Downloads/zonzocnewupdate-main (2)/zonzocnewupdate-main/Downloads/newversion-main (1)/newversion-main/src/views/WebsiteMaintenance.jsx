'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/WebsiteMaintenance.css';
import Breadcrumb from "../components/Breadcrumb";

const WebsiteMaintenance = () => {
  const stats = [
    { number: "150+", label: "Websites Maintained" },
    { number: "120+", label: "Clients Served" },
    { number: "99.9%", label: "Average Uptime Delivered" },
    { number: "4.9★", label: "Client Rating" },
  ];

  const noMaintenanceProblems = [
    { title: "Performance Degrades", description: "Websites naturally slow down over time without optimisation. Slow sites lose visitors, damage conversions and drop in Google rankings — costing you leads and revenue every day." },
    { title: "Security Vulnerabilities Grow", description: "Outdated plugins, themes and software create security gaps that hackers actively exploit. A single breach can take your site offline, compromise customer data and destroy your reputation overnight." },
    { title: "SEO Rankings Decline", description: "Google rewards fast, technically sound websites. Without ongoing maintenance, Core Web Vitals degrade, crawl errors accumulate and your rankings gradually slip — giving ground to competitors." },
    { title: "Downtime Costs Real Money", description: "Every minute your website is down, you are losing potential leads and revenue. Proactive monitoring and maintenance prevents unplanned downtime before it impacts your business." },
  ];

  const services = [
    { title: "Website Speed Optimisation", description: "We optimise your website for maximum speed and performance — improving Core Web Vitals, Google PageSpeed scores and overall load times. Faster websites rank better, convert better and retain visitors longer. Our speed optimisation service covers image compression, caching, code minification, server response times and CDN configuration." },
    { title: "Website Security Monitoring", description: "We provide ongoing website security monitoring and protection for businesses across the UK and USA — scanning for malware, blocking suspicious activity, hardening configurations and responding to threats before they cause damage. Your website is protected 24 hours a day, 7 days a week." },
    { title: "WordPress Maintenance Service UK", description: "WordPress powers over 40% of all websites — and requires regular, expert maintenance to stay secure and performant. Our WordPress maintenance service covers core updates, plugin updates, theme updates, security hardening, backup management and performance optimisation — keeping your WordPress site running at its best." },
    { title: "Uptime Monitoring & Emergency Support", description: "We monitor your website uptime around the clock and respond immediately when issues arise. If your website goes down or experiences critical errors, our team acts fast to restore it — minimising downtime and protecting your business from lost leads and revenue." },
    { title: "Backup & Disaster Recovery", description: "We implement automated backup systems that create regular copies of your website files and database — stored securely off-site. In the event of a hack, server failure or accidental data loss, we can restore your website quickly and completely." },
    { title: "Technical SEO Health Checks", description: "We perform regular technical SEO audits of your website — checking for crawl errors, broken links, indexation issues, Core Web Vitals and structured data problems. We fix issues as they arise to protect your search rankings and organic traffic." },
    { title: "Plugin, Theme & Software Updates", description: "Outdated software is the most common cause of website security vulnerabilities. We manage all plugin, theme and platform updates — testing each one before applying to ensure nothing breaks on your live website." },
  ];

  const carePlanIncludes = [
    "Monthly performance monitoring & reporting",
    "Security scanning & threat prevention",
    "Plugin, theme & software updates",
    "Uptime monitoring & alert response",
    "Regular backups & secure storage",
    "Technical SEO health checks",
    "Priority support & emergency response",
    "Monthly performance report",
  ];

  const processSteps = [
    { number: "01", title: "Free Website Health Audit", description: "We start with a comprehensive audit of your website — assessing speed, security, uptime, technical SEO and any existing issues that need immediate attention." },
    { number: "02", title: "Optimisation & Hardening", description: "We implement speed improvements, security hardening, software updates and technical fixes — bringing your website up to a strong, healthy baseline." },
    { number: "03", title: "Ongoing Monitoring", description: "We monitor your website continuously for uptime, performance, security threats and technical errors — responding immediately when issues are detected." },
    { number: "04", title: "Regular Updates & Fixes", description: "We apply all necessary updates, fix emerging issues and implement performance improvements proactively — before they impact your visitors or rankings." },
    { number: "05", title: "Monthly Reporting", description: "Every month you receive a clear report showing your website health, actions taken, performance metrics and recommendations for ongoing improvement." },
  ];

  const whoFor = [
    { title: "✓ Small Businesses in the UK & USA", description: "Who need their website maintained professionally without the cost of an in-house developer — at an affordable monthly rate." },
    { title: "✓ WordPress Website Owners", description: "Who need expert WordPress maintenance to keep their site secure, updated and performing at full speed." },
    { title: "✓ E-commerce Store Owners", description: "Who cannot afford downtime, security breaches or slow performance — because every minute offline costs real revenue." },
    { title: "✓ Businesses With No In-House IT", description: "Who need a reliable technical partner to handle all website maintenance, security and performance — giving them complete peace of mind." },
    { title: "✓ Companies That Experienced Hacks or Downtime", description: "Who have already suffered the consequences of poor maintenance and need a proactive partner to ensure it never happens again." },
  ];

  const faqs = [
    { question: "How much does website maintenance cost in the UK?", answer: "Our website maintenance plans are priced to be affordable for small businesses across the UK and USA. As an offshore maintenance agency we offer significantly better value than UK-based agencies — with the same quality, responsiveness and technical expertise. Contact us for a free health check and custom quote." },
    { question: "How often should a website be maintained?", answer: "Website maintenance should be ongoing — not a one-off task. Security monitoring and uptime checks run continuously. Software updates are applied monthly. Performance audits are conducted quarterly. This consistent approach prevents problems before they impact your business." },
    { question: "Do you maintain WordPress websites?", answer: "Yes. WordPress maintenance is one of our core services. We handle all WordPress core updates, plugin updates, theme updates, security hardening, backup management and performance optimisation — keeping your site secure and fast." },
    { question: "What happens if my website gets hacked?", answer: "If your website is covered by one of our care plans, we respond immediately to any security incident — cleaning malware, restoring from backup, identifying the vulnerability and hardening your site to prevent recurrence. We aim to restore hacked sites within hours, not days." },
    { question: "Do you provide emergency website support?", answer: "Yes. Emergency support is included in all our care plans. If your website goes down or experiences a critical issue outside business hours, our team is available to respond and restore it as quickly as possible." },
    { question: "Do you maintain non-WordPress websites?", answer: "Yes. We maintain custom websites, React and Next.js applications, e-commerce stores and any other web platform — not just WordPress." },
  ];
  const getServiceIcon = (i) => {
  const icons = ["⚡", "🛡️", "🧩", "📡", "💾", "📊", "🔄"];
  return icons[i] || "⚙️";
};

const getIcon = (i) => {
  const icons = [
    "⚡", "🛡️", "🔄", "📡", "💾", "🔍", "🚨", "📊"
  ];
  return icons[i] || "✔";
};
const getProcessIcon = (i) => {
  const icons = [
    "🔍", // audit
    "⚙️", // optimize
    "📡", // monitoring
    "🔄", // updates
    "📊"  // reporting
  ];
  return icons[i] || "⚡";
};

const getBadge = (i) => {
  const badges = [
    "Performance",
    "Security",
    "Updates",
    "Monitoring",
    "Backup",
    "SEO",
    "Alerts",
    "Analytics"
  ];
  return badges[i] || "Core";
};

  return (
    <>
      <div className="wm__wrapper">
        <Navbar />

        {/* Hero Section */}
        <section className="wm__hero">
          {/* Pattern container left in case you need it later, but hidden via CSS */}
          <div className="wm__hero_pattern"></div>
          
          <div className="wm__hero_container">
            {/* RENDER THE BREADCRUMB HERE INSIDE THE HERO WRAPPER */}
            <Breadcrumb />

            {/* Top Label / Pill Badge with Safe inline-span wrapper */}
            <span className="wm-hero-badge-wrapper">
              <span className="wm-hero-badge-dot"></span>
              <span className="wm-hero-badge-text">
                Website Maintenance & Security Agency
              </span>
            </span>

            {/* Heading split into White and Sky-Blue */}
            <h1 className="wm__hero_title">
              Website Maintenance Services UK <span className="wm__hero_title_highlight">— Keep Your Website Fast, Secure and Always Online</span>
            </h1>
            
            <p className="wm__hero_text">
              ZonzocTech provides professional website maintenance, performance and security services for businesses across the UK and USA. We monitor, protect and optimise your website around the clock — so you can focus on running your business while we make sure your website never lets you down.
            </p>
            
            <div className="hero-buttons">
              <a href="/contact" className="btn-primary">Get Free Website Health Check →</a>
              <a href="#wm-services" className="btn-secondary">See Our Services ↓</a>
            </div>
            
            {/* Muted trust subtext styled cleanly via CSS class */}
            <p className="wm__hero_trust">Trusted by 120+ businesses across UK, USA & Europe</p>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="stats-bar" id="wm-services">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </section>

        {/* Section 1 — Why Maintenance Is Not Optional */}
        <section className="wm__audience_section wm__sec1_light">
          <div className="wm__container">

            <h2 className="wm__heading2">
              Why Website Maintenance Is Not Optional for UK & USA Businesses
            </h2>

            <p className="wm__intro wm__compact_text">
              Your website is your most important business asset. It generates leads, builds credibility and represents your brand 24/7.
            </p>

            <p className="wm__intro wm__compact_text">
              Without ongoing maintenance, websites slowly lose speed, security, and rankings — impacting revenue and trust.
            </p>

            <h3 className="wm__subtitle wm__compact_subtitle">
              What Happens Without Proper Maintenance
            </h3>

            <div className="wm__problem_grid">

              {noMaintenanceProblems.map((problem, i) => (
                <div key={i} className="wm__problem_card_clean">
                  <div className="wm__problem_bar"></div>

                  <div>
                    <h4>{problem.title}</h4>
                    <p>{problem.description}</p>
                  </div>
                </div>
              ))}

            </div>

          </div>
        </section>

        {/* Section 2 — Services */}
        <section className="wm__services_section wm__sec2_clean">
          <div className="wm__container">

            <div className="wm__services_box">

              <h2 className="wm__heading2">
                Our Website Maintenance Services for UK & USA Businesses
              </h2>

              <p className="wm__subtitle wm__compact_subtitle">
                Complete website care covering performance, security, updates and monitoring — everything your website needs to stay fast and stable.
              </p>

              <div className="wm__services_timeline">

                {services.map((service, i) => (
                  <div key={i} className="wm__service_flow_item">

                    <div className="wm__service_icon">
                      {getServiceIcon(i)}
                    </div>

                    {i !== services.length - 1 && <div className="wm__service_line"></div>}

                    <div className="wm__service_content">
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>
        </section>

        {/* Section 3 — Care Plans */}
        <section className="wm__care_section wm__grid_sec">
          <div className="wm__container">

            <h2 className="wm__heading2">
              Website Care Plans for UK & USA Businesses
            </h2>

            <p className="wm__subtitle">
              Everything your website needs — structured into a complete maintenance system.
            </p>

            <div className="wm__grid">

              {carePlanIncludes.map((item, i) => (
                <div key={i} className="wm__grid_card">

                  <div className="wm__grid_badge">
                    {getBadge(i)}
                  </div>

                  <div className="wm__grid_icon">
                    {getIcon(i)}
                  </div>

                  <div className="wm__grid_text">
                    {item}
                  </div>

                </div>
              ))}

            </div>

            <div className="wm__grid_footer">
              Get a free website health check — we’ll recommend the right plan for you.
            </div>

          </div>
        </section>

        {/* Section 4 — Process */}
        <section className="wm__process_section wm__circle_sec">

          <div className="wm__circle_wrapper">

            <h2 className="wm__heading2">
              Our Website Maintenance Process
            </h2>

            <p className="wm__subtitle">
              A structured workflow that keeps your website secure, fast and continuously optimized.
            </p>

            <div className="wm__circle_row">

              {processSteps.map((step, i) => (
                <div key={i} className="wm__circle_block">

                  <div className="wm__circle_node">

                    <div className="wm__circle_icon">
                      {getProcessIcon(i)}
                    </div>

                    <div className="wm__circle_number">
                      {step.number}
                    </div>

                  </div>

                  <h3 className="wm__circle_title">{step.title}</h3>
                  <p className="wm__circle_desc">{step.description}</p>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* Section 5 — Who For */}
        <section className="wm__who_section">
          <div className="wm__container">
            <div className="wm__who_wrapper">
              {/* Section Label */}
              <div className="wm__section_label">
                <span className="wm__section_label_dot"></span>
                Ideal For
              </div>

              <h2 className="wm__heading2">
                Who Our Website Maintenance Service Is For
              </h2>

              <p className="wm__subtitle">
                Designed for businesses that rely on their website for leads, sales and
                customer trust.
              </p>

              <div className="wm__who_grid">
                {whoFor.map((item, i) => {
                  const icons = ["🏢", "⚙️", "🛒", "🧑‍💻", "🚨"];
                  const badges = [
                    "Business",
                    "WordPress",
                    "E-commerce",
                    "Technical Support",
                    "Recovery"
                  ];

                  return (
                    <div key={i} className="wm__who_card">
                      <div className="wm__who_card_top">
                        <div className="wm__who_icon">
                          {icons[i] || "✓"}
                        </div>

                        <span className="wm__who_badge">
                          {badges[i] || "Business"}
                        </span>
                      </div>

                      <h3 className="wm__who_title">
                        {item.title.replace("✓", "").trim()}
                      </h3>

                      <p className="wm__who_description">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <p className="wm__who_footer">
                If your website is critical to your business, our proactive maintenance
                plans are designed to protect it.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6 — FAQ */}
        <section className="wm__faq_modern_section">
          <div className="wm__container">
            <div className="wm__faq_modern_wrapper">
              {/* Section Label */}
              <div className="wm__section_label">
                <span className="wm__section_label_dot"></span>
                FAQs
              </div>

              <h2 className="wm__heading2">
                Website Maintenance — Frequently Asked Questions
              </h2>

              <p className="wm__subtitle">
                Clear answers to the most common questions about our website maintenance,
                security and support services.
              </p>

              <div className="wm__faq_modern_list">
                {faqs.map((faq, i) => (
                  <div key={i} className="wm__faq_modern_item">
                    <div className="wm__faq_modern_icon">?</div>

                    <div className="wm__faq_modern_content">
                      <h3 className="wm__faq_modern_question">
                        {faq.question}
                      </h3>
                      <p className="wm__faq_modern_answer">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="wm__faq_modern_footer">
                Still have questions? Contact us for a free website health consultation.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="cta-section">
          <div className="wm__container">
            <h2>Ready to Protect and Optimise Your Website?</h2>
            <p>Get a free website health check and find out exactly what needs attention — no commitment required.</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn-primary">Get Free Health Check →</a>
              <a href="/#services" className="btn-secondary">See Our Services</a>
            </div>
            <p className="cta-small-text">No commitment. No spam. Just results.</p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default WebsiteMaintenance;