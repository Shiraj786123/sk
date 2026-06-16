'use client';
import React from "react";
import Navbar from "../components//Navbar";
import Footer from "../components/Footer";
import "../styles/EcommercePage.css";
import Breadcrumb from "../components/Breadcrumb";

const EcommerceDev = () => {
  const stats = [
    { number: "150+", label: "Projects Delivered" },
    { number: "120+", label: "Clients Served" },
    { number: "35%", label: "Average Revenue Growth" },
    { number: "4.9★", label: "Client Rating" },
  ];

  const problems = [
    { title: "Low Conversion Rates", description: "Your store gets visitors but not enough sales. We redesign and optimise product pages, category layouts and checkout flows to convert more of your existing traffic." },
    { title: "High Cart Abandonment", description: "Visitors add products but don't complete purchase. We identify and eliminate every friction point in your checkout process — reducing abandonment and recovering lost revenue." },
    { title: "Slow Page Speed", description: "Slow stores lose sales. Google research shows that a 1 second delay reduces conversions by up to 7%. We optimise every aspect of store performance to keep customers engaged." },
    { title: "Poor Mobile Experience", description: "Over 60% of UK ecommerce traffic comes from mobile. We design and optimise every store mobile-first — ensuring a seamless shopping experience on every device." },
    { title: "Weak SEO & Low Organic Traffic", description: "Paid ads are expensive. We build ecommerce SEO into every store from day one — optimising product pages, category structures and technical foundations to drive sustainable organic traffic." },
  ];

  const services = [
    { title: "Shopify Development Agency UK", description: "We are a specialist Shopify development agency building custom Shopify stores for businesses across the UK and USA. From theme customisation and app integrations to fully custom Shopify builds — we deliver fast, beautiful and high-converting Shopify stores that grow with your business." },
    { title: "WooCommerce Development Agency UK", description: "We design and build custom WooCommerce stores for businesses that need the flexibility of WordPress combined with powerful ecommerce functionality. Our WooCommerce stores are fast, secure and fully optimised for search and conversion." },
    { title: "Custom Ecommerce Development", description: "Need something beyond Shopify or WooCommerce? We build fully custom ecommerce platforms using React, Next.js and Node.js — designed specifically around your products, customers and business model with no platform limitations." },
    { title: "Ecommerce Conversion Rate Optimisation", description: "Already have a store but not enough sales? Our ecommerce conversion optimisation service identifies exactly what is stopping visitors from buying — and fixes it. We analyse your store data, user behaviour and checkout flow to deliver measurable conversion improvements." },
    { title: "Ecommerce Speed & Performance", description: "We optimise ecommerce store speed and Core Web Vitals — reducing load times, improving Google PageSpeed scores and ensuring your store performs at full speed on every device and connection." },
    { title: "Ecommerce SEO", description: "We optimise your store for organic search — covering product page SEO, category page optimisation, technical SEO fixes, schema markup and content strategy — driving consistent organic traffic that reduces your paid ad dependency." },
    { title: "Multi-Vendor & Marketplace Development", description: "We build custom multi-vendor marketplace platforms — enabling multiple sellers to list, manage and sell products through a single storefront with admin controls, vendor dashboards and automated commission systems." },
  ];

  const platforms = [
    { title: "Shopify & Shopify Plus", description: "The UK's most popular ecommerce platform for growing brands. We build custom Shopify themes, app integrations and headless Shopify experiences." },
    { title: "WooCommerce", description: "The most flexible WordPress ecommerce solution. We build custom WooCommerce stores with advanced functionality, performance optimisation and full SEO integration." },
    { title: "Custom Platforms", description: "Built with React, Next.js, Node.js and Java Spring Boot for businesses with unique requirements that off-the-shelf platforms cannot meet." },
    { title: "Headless Ecommerce", description: "Decoupled frontend and backend architecture for maximum performance, flexibility and omnichannel selling — using modern frameworks with Shopify or custom backends." },
  ];

  const processSteps = [
    { number: "01", title: "Discovery & Store Audit", description: "We analyse your current store, target customers, competitors and conversion goals — identifying the biggest opportunities for revenue improvement." },
    { number: "02", title: "Strategy & Design", description: "We design conversion-focused layouts for every key page — homepage, category pages, product pages and checkout — with your customers' buying journey at the centre." },
    { number: "03", title: "Development & Integration", description: "We build your store with clean, performant code — integrating payment gateways, shipping providers, inventory systems and any third-party tools your business needs." },
    { number: "04", title: "Testing & Optimisation", description: "We test checkout flow, page speed, mobile experience and cross-browser compatibility — fixing every issue before launch." },
    { number: "05", title: "Launch & Growth Support", description: "We deploy your store, set up analytics and conversion tracking, and provide ongoing optimisation and support as your business scales." },
  ];

  const whoFor = [
    { title: "✓ New Ecommerce Brands", description: "Launching their first online store and needing it built properly from the start — fast, secure and conversion-ready." },
    { title: "✓ Existing Stores Not Converting", description: "Getting traffic but not enough sales. We diagnose exactly what is stopping visitors from buying and fix it." },
    { title: "✓ Shopify Store Owners", description: "Who need a custom Shopify build, advanced app integrations or a full Shopify redesign to increase revenue." },
    { title: "✓ WooCommerce Store Owners", description: "Who need better performance, custom functionality or a full WooCommerce rebuild on a faster, more reliable foundation." },
    { title: "✓ Scaling Ecommerce Businesses", description: "That have outgrown their current platform and need a custom solution built for high volume, multi-channel selling and advanced automation." },
  ];

  const faqs = [
    { question: "How much does ecommerce development cost in the UK?", answer: "The cost depends on the platform, number of products, custom features and integrations required. As an offshore ecommerce development agency we offer significantly more competitive pricing than UK-based agencies — without compromising on quality or delivery. Contact us for a free audit and transparent quote." },
    { question: "How long does it take to build an ecommerce store?", answer: "A standard Shopify or WooCommerce store typically takes 4 to 8 weeks. A custom ecommerce platform with advanced features can take 3 to 5 months. We provide a clear timeline before any work begins." },
    { question: "Do you build Shopify stores for UK businesses?", answer: "Yes. Shopify development is one of our most popular services for UK and USA businesses. We build custom Shopify themes, advanced integrations and fully custom Shopify experiences for brands of all sizes." },
    { question: "Can you improve my existing ecommerce store?", answer: "Yes. Ecommerce optimisation is a core part of what we do. We analyse your existing store, identify conversion blockers and implement targeted improvements — without requiring a full rebuild in most cases." },
    { question: "Do you offer ecommerce SEO?", answer: "Yes. Every store we build includes ecommerce SEO fundamentals — and we offer dedicated ecommerce SEO services for stores that want to grow organic traffic and reduce paid ad dependency." },
    { question: "Do you integrate with payment gateways and shipping providers?", answer: "Yes. We integrate all major payment gateways including Stripe, PayPal and Klarna — plus shipping providers, inventory systems, CRMs and any third-party tools your store needs." },
  ];

  return (
    <>
      <div className="ecd__wrapper">
        <Navbar />

        {/* Hero Section */}
        <section className="ecd__hero">
          {/* Pattern container left in case you need it later, but hidden via CSS */}
          <div className="ecd__hero_pattern"></div>

          <div className="ecd__hero_container">
            {/* MOVED BREADCRUMB HERE: Renders inside the dark container above the badge */}
            <Breadcrumb />

            {/* Top Label / Pill Badge with Safe inline-span wrapper */}
            <span className="ecd__hero_badge_wrapper">
              <span className="ecd__hero_badge_dot"></span>
              <span className="ecd__hero_badge_text">
                Ecommerce Design & Development Agency
              </span>
            </span>

            {/* Mixed color heading using inline span */}
            <h1 className="ecd__hero_title">
              High-Performance Ecommerce Development Agency <span className="ecd__hero_title_highlight">for UK & USA Brands</span>
            </h1>

            <p className="ecd__hero_text">
              We design and develop conversion-focused ecommerce stores that turn traffic into revenue.
              From Shopify and WooCommerce to fully custom platforms — we build scalable, fast, and sales-driven online stores engineered for growth.
            </p>

            <div className="hero-buttons">
              <a href="/contact" className="btn-primary">
                Get Free Ecommerce Audit →
              </a>

              <a href="/case-studies" className="btn-secondary">
  See Our Works →
</a>
            </div>

            <p className="ecd__hero_trust">
              Trusted by 120+ businesses across UK, USA & Europe
            </p>

          </div>
        </section>
        
        {/* Stats Bar */}
        <section className="stats-bar" id="ecd-work">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </section>

        {/* Section 1 — Why Most Stores Underperform */}
        <section className="ecd__audience_section">
          <div className="ecd__container">

            <h2 className="ecd__heading">
              Why Most Ecommerce Stores Underperform — And How We Fix It
            </h2>

            <p className="ecd__description">
              Most online stores struggle with one of two issues: they either fail to
              attract qualified traffic, or they attract visitors who leave without
              making a purchase. In both cases, revenue is lost every single day.
            </p>

            <p className="ecd__description">
              At ZonzocTech, we build ecommerce websites with one objective in mind:
              revenue growth. Every design decision, product page layout, and checkout
              experience is engineered to reduce friction, build trust, and convert
              more visitors into loyal customers.
            </p>

            <h3 className="ecd__problem_section_title">
              Common Ecommerce Problems We Solve
            </h3>

            {/* CIRCLE ROW */}
            <div className="ecd__problem_circle_row">

              {problems.map((problem, i) => (
                <React.Fragment key={i}>

                  {/* CIRCLE CARD */}
                  <div className="ecd__problem_circle_card_scroll">

                    <div className="ecd__problem_circle_number">
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    <h4 className="ecd__problem_circle_title">
                      {problem.title}
                    </h4>

                    <p className="ecd__problem_circle_description">
                      {problem.description}
                    </p>

                  </div>

                  {/* ARROW */}
                  {i < problems.length - 1 && (
                    <div className="ecd__problem_circle_arrow">→</div>
                  )}

                </React.Fragment>
              ))}

            </div>

          </div>
        </section>
        
        <div className="ecd__ticker_wrapper">
          <div className="ecd__ticker_track">
            <span className="t1">⚡ Faster Online Stores That Convert</span>
            <span className="t2">💰 Built for Higher Revenue Growth</span>
            <span className="t3">🛒 Seamless Checkout Experiences</span>
            <span className="t4">📱 Mobile First Ecommerce Design</span>
            <span className="t5">🚀 Shopify & WooCommerce Experts</span>
            <span className="t6">🔍 SEO Optimized Product Pages</span>
            <span className="t7">⚙️ Performance & Speed Optimization</span>
          </div>
        </div>

        {/* Section 2 — Services */}
        <section className="ecd__services_section">
          <div className="ecd__container">
            <h2 className="ecd__heading2">
              Our Ecommerce Development Services for UK & USA Businesses
            </h2>

            <p className="ecd__subtitle">
              From new store builds to performance optimisation — we offer complete
              ecommerce development services tailored to your platform and growth goals.
            </p>

            {/* Horizontal Scroll Row */}
            <div className="ecd__services_row">
              {services.map((service, i) => (
                <div key={i} className="ecd__service_row_card">

                  {/* Number Badge */}
                  <div className="ecd__service_number_badge">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Icon */}
                  <div className="ecd__service_icon">
                    ⚡
                  </div>

                  {/* Title */}
                  <h3 className="ecd__service_title">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="ecd__service_text">
                    {service.description}
                  </p>

                </div>
              ))}
            </div>

            {/* Footer Banner CTA */}
            <div className="ecd__services_footer_banner">
              <h3>Complete Ecommerce Solutions</h3>
              <p>
                Strategy • Design • Development • SEO • Optimisation • Scaling
              </p>
              <a href="/contact">Start Your Project →</a>
            </div>
          </div>
        </section>

        <section className="ecd__platforms_section">
          <div className="ecd__container">

            <h2 className="ecd__heading">
              Platforms We Work With
            </h2>

            <p className="ecd__subtitle">
              We build scalable ecommerce solutions across leading platforms and custom stacks.
            </p>

            <div className="ecd__platforms_grid">

              {platforms.map((platform, i) => {
                const icons = ["🛍️", "🧩", "⚡", "☁️"];
                return (
                  <div key={i} className="ecd__platform_card">

                    <div className="ecd__platform_icon">
                      {icons[i]}
                    </div>

                    <h3 className="ecd__platform_title">
                      {platform.title}
                    </h3>

                    <p className="ecd__platform_desc">
                      {platform.description}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>
        </section>
        
        {/* Section 4 — Process */}
        <section className="ecd__process_section">
          <div className="ecd__container">

            <h2 className="ecd__heading">
              Our Ecommerce Development Process
            </h2>

            <div className="ecd__process_center">

              {processSteps.map((step, i) => (
                <div key={i} className="ecd__process_item">

                  {/* DOT */}
                  <div className="ecd__process_dot">
                    {step.number}
                  </div>

                  {/* CONTENT */}
                  <div className="ecd__process_content">

                    <h3 className="ecd__process_title">
                      {step.title}
                    </h3>

                    <p className="ecd__process_desc">
                      {step.description}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>
        </section>

        {/* Section 5 — Who For */}
        <section className="ecd__why_section">
          <div className="ecd__container">

            <h2 className="ecd__heading">
              Who Our Ecommerce Service Is For
            </h2>

            <p className="ecd__description">
              We work with businesses at different stages of growth — from first-time store launches to scaling ecommerce brands.
            </p>

            <div className="ecd__who_stack">

              {whoFor.map((item, i) => (
                <div key={i} className="ecd__who_row">

                  {/* NUMBER */}
                  <div className="ecd__who_number">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* CONTENT */}
                  <div className="ecd__who_content">

                    <h3 className="ecd__who_title">
                      {item.title.replace("✓", "").trim()}
                    </h3>

                    <p className="ecd__who_desc">
                      {item.description}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>
        </section>

        {/* Section 6 — FAQ */}
        <section className="ecd__faq_section">
          <div className="ecd__container">

            <h2 className="ecd__heading">
              Ecommerce Development — Frequently Asked Questions
            </h2>

            <div className="ecd__faq_stack">
              {faqs.map((faq, i) => (
                <details key={i} className="ecd__faq_bar">
                  <summary className="ecd__faq_question">
                    <span className="ecd__faq_qtext">
                      {faq.question}
                    </span>

                    <span className="ecd__faq_toggle">
                      +
                    </span>
                  </summary>

                  <div className="ecd__faq_answer">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>

          </div>
        </section>

        {/* Technology Divider Strip */}
        <div className="ecd__faq_tech_strip">
          <span>💡 Lovable Technology</span>
          <span>•</span>
          <span>Built with Modern React Architecture</span>
          <span>•</span>
          <span>Performance Driven Ecommerce Systems</span>
          <span>•</span>
          <span>Scalable Digital Solutions</span>
        </div>

        {/* Final CTA */}
        <section className="ecd__cta_section">
          <div className="ecd__cta_box">

            <h2 className="ecd__cta_title">
              Ready to Build an Ecommerce Store That Actually Sells?
            </h2>

            <p className="ecd__cta_text">
              We help UK & USA businesses turn underperforming stores into high-converting ecommerce systems.
              Get a free audit and see exactly what’s stopping your sales growth.
            </p>

            <div className="ecd__cta_buttons">

              <a href="/contact" className="ecd__cta_primary">
                Get Free Ecommerce Audit →
              </a>

              <a href="/case-studies" className="ecd__cta_secondary">
  View Our Work
</a>
            </div>

            <p className="ecd__cta_note">
              No spam. No pressure. Just actionable insights.
            </p>

          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default EcommerceDev;