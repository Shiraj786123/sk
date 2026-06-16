'use client';
import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import "../styles/Servicespage.css";

const ServicesPage = () => {
  const stats = [
    { number: "150+", label: "Projects Delivered" },
    { number: "120+", label: "Clients Served Across UK & USA" },
    { number: "4.9★", label: "Average Client Rating" },
    { number: "35%", label: "Average Client Growth" },
  ];

  const services = [
    {
      icon: "🎨",
      title: "AI Website Design & Development",
      description: "Conversion-focused websites that use AI personalisation and smart automation to turn visitors into customers — built for UK & USA markets.",
      bullets: [
        "AI-powered UX & personalisation",
        "High-converting landing pages",
        "CRO & lead capture built-in",
        "Mobile-first, Core Web Vitals optimised"
      ],
      route: "/ai-website-design-development" 
    },
    {
      icon: "🤖",
      title: "AI Web Application Development",
      description: "Custom AI web applications that automate workflows, surface intelligent insights, and deliver measurable business results at scale.",
      bullets: [
        "GPT & LLM integrations",
        "Intelligent dashboards & portals",
        "Process automation & AI agents",
        "React, Next.js, Node.js stack"
      ],
      route: "/ai-web-application-development" 
    },
    {
      icon: "⚡",
      title: "Full-Stack Web Development",
      description: "End-to-end web development from database architecture to polished frontend — scalable, secure, and built for long-term growth.",
      bullets: [
        "Custom web applications & portals",
        "REST & GraphQL API development",
        "AWS, GCP & cloud deployment",
        "Performance & security hardened"
      ],
      route: "/full-stack-web-development" 
    },
    {
      icon: "🧠",
      title: "AI Software Development",
      description: "Bespoke AI software solutions — from intelligent automation systems to machine learning models — designed around your business processes.",
      bullets: [
        "AI chatbots & virtual assistants",
        "Business process automation (BPA)",
        "TensorFlow & LangChain solutions",
        "Custom ML model development"
      ],
      route: "/ai-software-development" 
    },
    {
      icon: "📈",
      title: "SEO Services",
      description: "Data-driven SEO strategies that build sustainable organic traffic, improve Google rankings, and generate consistent qualified leads for UK & USA businesses.",
      bullets: [
        "Technical SEO & site audits",
        "Keyword research & competitor analysis",
        "Answer engine optimisation (AEO)",
        "On-page & off-page optimization"
      ],
      route: "/seo-services" 
    },
    {
      icon: "🛍️",
      title: "Ecommerce Development & Optimization",
      description: "High-performance ecommerce solutions built on Shopify, WooCommerce, and Magento — designed to maximise conversions and revenue across UK & US stores.",
      bullets: [
        "Shopify & WooCommerce development",
        "Ecommerce SEO & shopping feeds",
        "Conversion rate optimisation (CRO)",
        "Multi-vendor & marketplace builds"
      ],
      route: "/ecommerce-development-optimization" 
    },
    {
      icon: "🛡️",
      title: "Website Maintenance, Performance & Security",
      description: "Proactive website care plans covering security monitoring, performance optimisation, software updates, and uptime management — so your site never lets you down.",
      bullets: [
        "24/7 uptime & security monitoring",
        "Core Web Vitals & speed optimisation",
        "CMS & plugin update management",
        "Malware removal & SSL management"
      ],
      route: "/website-maintenance-performance-security" 
    }
  ];

  return (
    <>
      <div className="svc__wrapper">
        <Navbar />

        {/* Hero Section */}
        <section className="svc__hero">
          <div className="svc__hero_container">
            <Breadcrumb />

            {/* Top Label / Pill Badge */}
            <span className="svc__hero_badge_wrapper">
              <span className="svc__hero_badge_dot"></span>
              <span className="svc__hero_badge_text">
                Serving Businesses Across UK & USA
              </span>
            </span>

            {/* Main Header Heading */}
            <h1 className="svc__hero_title">
              Web Development & Digital Marketing <span className="svc__hero_title_highlight">Services Powered by AI</span>
            </h1>

            <p className="svc__hero_text">
              From AI-powered websites and custom software to SEO and ecommerce — one agency delivering the complete digital stack to grow your business in the UK and USA.
            </p>

            <div className="svc__hero_buttons">
              <Link href="/contact" className="btn-primary">
                Get a Free Proposal →
              </Link>
              <Link href="/case-studies" className="btn-secondary">
                View Case Studies ↓
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="svc__stats_bar">
          {stats.map((stat, i) => (
            <div key={i} className="svc__stat_item">
              <span className="svc__stat_number">{stat.number}</span>
              <span className="svc__stat_label">{stat.label}</span>
            </div>
          ))}
        </section>

        {/* Section Intro - What We Do */}
        <section className="svc__container svc__section_header">
          <div className="svc__tag_container">
            <span className="svc__section_tag">What We Do</span>
          </div>
          <h2 className="svc__heading">
            End-to-End Digital Engineering for UK & US Growth
          </h2>
          <p className="svc__subtitle">
            We design and deploy high-performance websites, bespoke AI integrations, search-optimized platforms, and secure e-commerce architectures engineered to scale your business.
          </p>
        </section>

        {/* Services Cards Grid */}
        <main className="svc__container svc__services_grid">
          {services.map((service, i) => (
            <Link key={i} href={service.route} className="svc__service_card_link">
              <div className="svc__service_card">
                <div className="svc__card_top">
                  <div className="svc__icon_container">{service.icon}</div>
                  <h3 className="svc__service_title">{service.title}</h3>
                  <p className="svc__service_desc">{service.description}</p>
                  
                  <ul className="svc__service_bullets">
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} className="svc__bullet_item">
                        <span className="svc__bullet_arrow">&rarr;</span>
                        <span className="svc__bullet_text">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="svc__learn_more">
                  <span>Learn more</span>
                  <span className="svc__arrow_transition">&rarr;</span>
                </div>
              </div>
            </Link>
          ))}

          {/* Testimonial Block Card inside the layout */}
          <Link href="/case-studies" className="svc__service_card_link">
            <div className="svc__testimonial_card">
              <div className="svc__card_top">
                <div className="svc__icon_container">💬</div>
                <blockquote className="svc__testimonial_quote">
                  "Zonzoctech have been an incredible partner — the site loads instantly, ranks on page 1, and we're getting double the enquiries we were before."
                </blockquote>
                <cite className="svc__testimonial_author">— ASJ Hardscapes, UK client</cite>
              </div>
              
              <div className="svc__learn_more">
                <span>View case studies</span>
                <span className="svc__arrow_transition">&rarr;</span>
              </div>
            </div>
          </Link>
        </main>

        {/* Why Choose Us */}
        <section className="svc__container svc__why_section">
          <span className="svc__section_tag">Why ZonzocTech</span>
          <h2 className="svc__heading">
            What Makes Us Different from Other UK & USA Web Agencies
          </h2>
          <p className="svc__subtitle">
            We combine Silicon Valley-level technical expertise with the responsiveness and transparency that UK & US businesses actually need.
          </p>
        </section>

        {/* Call to Action Block */}
        <section className="svc__container">
          <div className="svc__cta_section">
            <h2 className="svc__cta_title">Ready to Grow Your Business Online?</h2>
            <p className="svc__cta_desc">
              Tell us about your project and we'll put together a free, no-obligation growth plan within 24 hours. No pushy sales. Just honest advice.
            </p>
            <Link href="/contact" className="btn-primary" style={{ display: 'inline-block', maxWidth: '320px' }}>
              Get Your Free Proposal
            </Link>

            <div className="svc__pills_container">
              <span className="svc__pill_item">
                <span className="svc__checkmark">✓</span> Free proposal in 24 hrs
              </span>
              <span className="svc__pill_item">
                <span className="svc__checkmark">✓</span> No-obligation consultation
              </span>
              <span className="svc__pill_item">
                <span className="svc__checkmark">✓</span> UK & USA time zones
              </span>
              <span className="svc__pill_item">
                <span className="svc__checkmark">✓</span> 4.9★ rated agency
              </span>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;