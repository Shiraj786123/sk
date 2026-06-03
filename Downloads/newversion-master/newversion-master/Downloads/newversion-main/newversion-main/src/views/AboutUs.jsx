'use client';
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/AboutUs.css";
import Breadcrumb from "../components/Breadcrumb";

const AboutUs = () => {
  const stats = [
    { number: "120+", label: "Clients Served" },
    { number: "150+", label: "Projects Delivered" },
    { number: "35%", label: "Average Growth" },
    { number: "4.9★", label: "Client Rating" },
  ];

  const beliefs = [
    { 
      n: "1", t: "Technology Serves Goals", 
      points: ["Measurable business growth focus.", "Purpose-driven software architecture.", "AI integration for real efficiency.", "Scaling businesses smarter and faster."] 
    },
    { 
      n: "2", t: "Offshore Quality Edge", 
      points: ["Significant offshore cost advantages.", "Uncompromised high-end engineering.", "Responsive professional communication.", "Rapid delivery without project delays."] 
    },
    { 
      n: "3", t: "Long-Term Partnerships", 
      points: ["Trusted advisor-level relationships.", "Beyond one-off project execution.", "Strategic growth support stages.", "Scaling successfully alongside clients."] 
    }
  ];

  const services = [
    { n: "01", t: "AI App Development", points: ["Custom performance builds.", "Scalable cloud architecture.", "Business-focused logic.", "Future-ready AI systems."] },
    { n: "02", t: "Full-Stack Dev", points: ["Modern React & Next.js.", "Robust Node.js backends.", "Clean API integrations.", "Database optimization."] },
    { n: "03", t: "AI Website Design", points: ["High-conversion layouts.", "Data-driven UX principles.", "Interactive AI components.", "Fast loading performance."] },
    { n: "04", t: "SEO & AI Search", points: ["Google ranking dominance.", "AI search engine ready.", "Organic growth strategies.", "Technical SEO audits."] },
    { n: "05", t: "E-commerce Build", points: ["Shopify & WooCommerce.", "Custom checkout flows.", "Payment gateway security.", "Conversion rate focus."] },
    { n: "06", t: "AI Software Logic", points: ["Custom GPT integrations.", "Automated workflow tools.", "Smart chatbot systems.", "Predictive data analytics."] },
    { n: "07", t: "Site Maintenance", points: ["24/7 technical monitoring.", "Regular security patches.", "Performance speed tuning.", "Managed cloud hosting."] },
    { n: "08", t: "Strategic Growth", points: ["Digital roadmap planning.", "Market expansion tools.", "Technical lead generation.", "Conversion optimization."] }
  ];

  const targetClients = [
    { t: "Growth Startups", points: ["Launching new MVPs.", "Building scalable tech.", "Fast-track development.", "Technical co-founding."] },
    { t: "E-commerce Brands", points: ["Scaling online sales.", "High-volume checkouts.", "Inventory automation.", "Conversion rate growth."] },
    { t: "Service Businesses", points: ["Generating digital leads.", "Automating bookings.", "Customer CRM systems.", "Market dominance focus."] },
    { t: "Digital Agencies", points: ["White-label execution.", "Complex technical dev.", "Reliable offshore arm.", "Team capacity scaling."] }
  ];

  const values = [
    { t: "Transparency", i: "👁️", points: ["Clear honest communication.", "No hidden project costs.", "Zero technical jargon.", "No surprise invoices."] },
    { t: "Quality", i: "⭐", points: ["Clean maintainable code.", "Ethical SEO practices.", "Systems built to last.", "Rigorous testing standards."] },
    { t: "Results", i: "🎯", points: ["Direct ROI measurement.", "Success-based outcomes.", "Lead generation focused.", "Conversion tracking setup."] },
    { t: "Innovation", i: "💡", points: ["Ahead of AI evolution.", "Cutting-edge search tech.", "Proactive tool adoption.", "Competitive market edge."] },
  ];

  return (
    <div className="abt__wrapper">
      <Navbar />

      {/* 1. HERO SECTION - High Contrast (White/Light Blue) */}
      <section className="abt__bar_hero">
        <div className="abt__container">
          <Breadcrumb />

          <h1 className="abt__heading">We Build Digital Systems That <span className="text_light_blue">Generate Real Growth</span></h1>
          <p className="abt__hero_text_white">ZonzocTech is an AI-powered agency helping UK and USA businesses scale with high-converting websites at a fraction of local agency prices.</p>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="abt__stats_section">
        <div className="abt__container">
          <div className="abt__stats_border_box">
            {stats.map((s, i) => (
              <div key={i} className="stat_item">
                <span className="stat_num">{s.number}</span>
                <span className="stat_lbl">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR STORY - Blue Theme (No Black) */}
      <section className="abt__section white_bar">
        <div className="abt__container">
          <h2 className="abt__title_dark">Our Story</h2>
          <div className="abt__story_wrapper">
            {[
              { n: "1", t: "The Observation", d: "ZonzocTech started with one simple observation — too many businesses were paying too much for websites that delivered no real results. Many had beautiful designs but generated no traffic and no leads." },
              { n: "2", t: "The Solution", d: "We built ZonzocTech to change that. Based in Sri Lanka, we combine technical expertise with a strong understanding of what UK and USA businesses genuinely need to grow online." },
              { n: "3", t: "The Impact", d: "Today we work with startups and e-commerce brands across the globe — delivering AI systems, SEO strategies, and digital solutions that create measurable, real-world growth." }
            ].map((row, i) => (
              <div key={i} className="abt__bar_row">
                <div className="abt__bar_num"><h2>{row.n}</h2></div>
                <div className="abt__bar_content"><h2>{row.t}</h2><p>{row.d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHAT WE BELIEVE */}
      <section className="abt__section grey_bar">
        <div className="abt__container">
          <h2 className="abt__title_dark">What We Believe</h2>
          <div className="abt__story_wrapper">
            {beliefs.map((row, i) => (
              <div key={i} className="abt__bar_row hover_blue">
                <div className="abt__bar_num"><h2>{row.n}</h2></div>
                <div className="abt__bar_content">
                  <h2>{row.t}</h2>
                  <ul className="abt__bullet_list_left">
                    {row.points.map((p, idx) => <li key={idx}><span>•</span> {p}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHAT WE DO (With Connecting Lines) */}
      <section className="abt__section white_bar">
        <div className="abt__container">
          <h2 className="abt__title_dark">What We Do</h2>
          <div className="abt__services_grid">
            {services.map((s, i) => (
              <div key={i} className="abt__service_box hover_lift">
                <div className="abt__node_wrapper">
                   <div className="abt__circle">{s.n}</div>
                   {i % 4 !== 3 && <div className="abt__connector"></div>}
                </div>
                <h4 className="abt__box_title_left">{s.t}</h4>
                <ul className="abt__card_bullets_left">
                  {s.points.map((p, idx) => <li key={idx}><span>›</span> {p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHO WE WORK WITH */}
      <section className="abt__section grey_bar">
        <div className="abt__container">
          <h2 className="abt__title_dark">Who We Work With</h2>
          <div className="abt__services_grid">
            {targetClients.map((client, i) => (
              <div key={i} className="abt__service_box hover_lift">
                <div className="abt__check_circle">✓</div>
                <h4 className="abt__box_title_left">{client.t}</h4>
                <ul className="abt__card_bullets_left">
                  {client.points.map((p, idx) => <li key={idx}><span>›</span> {p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. OUR VALUES */}
      <section className="abt__section white_bar">
        <div className="abt__container">
          <h2 className="abt__title_dark">Our Values</h2>
          <div className="abt__values_grid">
            {values.map((v, i) => (
              <div key={i} className="abt__value_box hover_lift">
                <div className="abt__value_icon_left">{v.i}</div>
                <h4 className="abt__box_title_left">{v.t}</h4>
                <ul className="abt__card_bullets_left">
                  {v.points.map((p, idx) => <li key={idx}><span>›</span> {p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="abt__cta_image_style">
        <div className="abt__container">
          <div className="abt__cta_content_box">
             <h2>Ready to Work Together?</h2>
             <p> and we'll put together a free growth plan — no commitment required.</p>
             <div className="abt__cta_btn_row">
                <a href="/contact" className="abt__cta_btn_solid">Get Free Proposal →</a>
                {/* UPDATED: Changed href from "/#portfolio" to "/case-studies" */}
                <a href="/case-studies" className="abt__cta_btn_outline">See Our Work</a>
             </div>
             <span className="abt__cta_small_text">No commitment. No spam. Just results.</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;