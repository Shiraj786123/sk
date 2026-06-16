'use client';
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import "../styles/FullStackWebDev.css";

const FullStackWebDev = () => {
  const stats = [
    { number: "150+", label: "Projects Delivered" },
    { number: "120+", label: "Clients Served" },
    { number: "10+", label: "Years Experience" },
    { number: "4.9★", label: "Client Rating" },
  ];

  const whatIsItems = [
    { i: "🎨", title: "Frontend Development", description: "Everything the user sees — designed for speed, clarity and conversion." },
    { i: "⚙️", title: "Backend Development", description: "The logic, data and APIs that power your application — built for reliability and scale." },
    { i: "🗄️", title: "Database Architecture", description: "Structured, optimised data systems that keep your application fast as it grows." },
    { i: "🔌", title: "API & Integrations", description: "Seamless connections between your app and third-party tools, payment systems and data sources." },
    { i: "☁️", title: "Cloud Deployment", description: "Secure, scalable hosting and deployment on AWS or Google Cloud with full CI/CD setup." },
    { i: "🖌️", title: "UI/UX Design", description: "User-centric design systems that ensure your product is intuitive, beautiful, and highly engaging." },
  ];

  const services = [
    { i: "💻", t: "Custom Web Application Development", points: ["Bespoke architectures.", "User-focused workflows.", "Scalable codebases.", "Performance-first design."] },
    { i: "🚀", t: "MVP Development for Startups", points: ["Lean feature sets.", "Fast-track timeline.", "User validation ready.", "Cost-efficient build."] },
    { i: "☁️", t: "SaaS Platform Development", points: ["Multi-tenant architecture.", "Subscription billing engines.", "Role-based access control.", "Advanced analytics suites."] },
    { i: "⚛️", t: "React & Next.js Specialists", points: ["Server-side rendering.", "SEO-optimized builds.", "Fast component architecture.", "Scalable frontend logic."] },
    { i: "⚙️", t: "Backend & API Development", points: ["Secure REST & GraphQL APIs.", "High-concurrency logic.", "Robust database design.", "Third-party integrations."] },
    { i: "🔄", t: "Legacy System Modernisation", points: ["Refactoring legacy code.", "Performance bottlenecks fix.", "Seamless data migration.", "Cloud-native transformation."] },
  ];

  const techStack = [
    { c: "Frontend", icon: "https://img.icons8.com/color/96/react-native.png", items: ["React & Next.js", "TypeScript", "Tailwind CSS", "Redux"] },
    { c: "Backend", icon: "https://img.icons8.com/color/96/nodejs.png", items: ["Node.js & Express", "Java Spring Boot", "Python Django", "GraphQL"] },
    { c: "Databases", icon: "https://img.icons8.com/color/96/database.png", items: ["PostgreSQL & MySQL", "MongoDB", "Firebase", "Redis"] },
    { c: "Cloud & DevOps", icon: "https://img.icons8.com/color/96/amazon-web-services.png", items: ["AWS & Google Cloud", "Docker & Kubernetes", "CI/CD Pipelines", "Vercel"] },
  ];

  const whyChoose = [
    { i: "✅", t: "Affordable Without Cutting Corners", points: ["Premium UK quality.", "Senior developer talent.", "Clean, maintainable code.", "Transparent cost model."] },
    { i: "⚛️", t: "React & Next.js Specialists", points: ["Deep stack expertise.", "High-performance builds.", "Scalable architecture.", "SEO-ready logic."] },
    { i: "🤝", t: "One Team, Full Ownership", points: ["Zero outsourcing.", "Dedicated project teams.", "Direct communication.", "End-to-end accountability."] },
    { i: "🚀", t: "Built for Growth", points: ["Scalable infrastructure.", "Start-up friendly budget.", "Fast MVP timelines.", "Growth-aligned support."] },
    { i: "🔍", t: "SEO & Performance First", points: ["Server-side rendering.", "Core Web Vitals optimized.", "Structured data implementation.", "Technical SEO foundation."] },
    { i: "🛠️", t: "24/7 Support & Maintenance", points: ["Continuous monitoring.", "Rapid bug resolution.", "Ongoing security patches.", "Growth-oriented scaling."] }
  ];

  const processSteps = [
    { n: "01", t: "Discovery & Requirements", d: "We define your business goals, identify target users, and establish the complete technical requirements for the project." },
    { n: "02", t: "Architecture & UI Design", d: "We design the system architecture, database structure, API blueprints, and UI/UX wireframes for a robust system build." },
    { n: "03", t: "Agile Development", d: "We build in two-week sprints with regular demos and check-ins to ensure total transparency and early user feedback." },
    { n: "04", t: "Testing & QA", d: "Every feature undergoes rigorous functionality, performance, security, and cross-browser compatibility validation." },
    { n: "05", t: "Deployment & Support", d: "We manage production deployment, system monitoring, documentation, and ongoing maintenance to ensure success." },
  ];

  const faqs = [
    { q: "How much does full stack development cost in the UK?", a: "The cost depends on complexity and features. We offer offshore pricing with UK-level quality. Contact us for a transparent quote." },
    { q: "How long does it take to build a web application?", a: "A simple MVP takes 6 to 10 weeks. Complex SaaS platforms take 3 to 6 months. We provide clear timelines before we start." },
    { q: "Can I hire a full stack developer for my UK company?", a: "Yes. We offer dedicated developer engagement models." },
    { q: "Do you build MVPs for startups?", a: "Yes. We build lean, functional products fast to help startups test ideas and attract early investment." },
    { q: "Can you upgrade my existing application?", a: "Yes. We modernise legacy systems, refactor code, and improve performance for existing applications." },
  ];

  return (
    <div className="fswd__wrapper">
      <Navbar />

      {/* HERO SECTION */}
      <section className="fswd__bar_hero">
        <div className="fswd__container">
          <div className="fswd__hero_content">
            {/* MOVED BREADCRUMB HERE: Renders inside the dark container above the badge */}
            <Breadcrumb />

            <span className="fswd__hero_label">
              Full Stack Web Development Agency
            </span>

            <h1 className="fswd__heading">
              Full Stack Web Development Agency for{" "}
              <span className="text_light_blue">UK & USA Businesses</span>
            </h1>

            <p className="fswd__hero_text_white">
              Bespoke, high-performance web applications, MVPs and SaaS platforms
              built to scale. We combine senior engineering talent with clean,
              maintainable code and conversion-focused UI/UX.
            </p>

            {/* CTA BUTTONS */}
            <div className="fswd__hero_actions">
              <a
                href="/contact"
                className="fswd__hero_btn fswd__hero_btn--primary"
              >
                Get Free Consultation
              </a>

              {/* Updated Portfolio Button */}
              <a
                href="https://zonzoc-tech.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="fswd__hero_btn fswd__hero_btn--secondary"
              >
                View Portfolio→
              </a>
            </div>

            {/* TRUST TEXT */}
            <p className="fswd__hero_trust">
              Trusted by 120+ businesses across the UK, USA & Europe
            </p>
          </div>
        </div>
      </section>

      <section className="fswd__stats_section">
        <div className="fswd__container">
          <div className="fswd__stats_border_box">
            {stats.map((s, i) => (
              <div key={i} className="stat_item">
                <span className="stat_num">{s.number}</span>
                <span className="stat_lbl">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fswd__section white_bar">
        <div className="fswd__container">
          <h2 className="fswd__title_dark">What Is Full Stack Web Development?</h2>
          <div className="fswd__intro_content">
            <p>Full stack web development covers both sides of a web application — the frontend that users see and interact with, and the backend that powers the logic, data and integrations behind the scenes.</p>
            <p>For businesses in the UK and USA, working with a full stack development agency means one team handles everything — from database architecture and API development to user interface design and cloud deployment.</p>
          </div>
          <div className="fswd__grid_3">
            {whatIsItems.map((item, i) => (
              <div key={i} className="fswd__service_box hover_lift">
                <div className="fswd__box_icon_circle">{item.i}</div>
                <h4 className="fswd__box_title">{item.title}</h4>
                <p className="fswd__justify_text">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fswd__section grey_bar">
        <div className="fswd__container">
          <h2 className="fswd__title_dark">Our Full Stack Web Development Services</h2>
          <div className="fswd__grid_3">
            {services.map((s, i) => (
              <div key={i} className="fswd__service_box hover_lift">
                <div className="fswd__box_icon">{s.i}</div>
                <h4 className="fswd__box_title">{s.t}</h4>
                <ul className="fswd__card_bullets">
                  {s.points.map((p, idx) => <li key={idx}><span>›</span> {p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fswd__section white_bar">
        <div className="fswd__container">
          <h2 className="fswd__title_dark">Technologies We Use</h2>
          <div className="fswd__grid_4">
            {techStack.map((t, i) => (
              <div key={i} className="tech_box_full hover_lift">
                <div className="tech_box_head">
                  <img src={t.icon} alt={t.c} style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
                  {t.c}
                </div>
                <div className="tech_pills_wrap">
                  {t.items.map((item, j) => <span key={j} className="tech_pill">{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fswd__section grey_bar">
        <div className="fswd__container">
          <h2 className="fswd__title_dark">Why UK & USA Businesses Hire ZonzocTech</h2>
          <div className="fswd__grid_3">
            {whyChoose.map((w, i) => (
              <div key={i} className="fswd__service_box hover_lift">
                <div className="fswd__box_icon">{w.i}</div>
                <h4 className="fswd__box_title">{w.t}</h4>
                <ul className="fswd__card_bullets">
                  {w.points.map((p, idx) => <li key={idx}><span>›</span> {p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fswd__section white_bar">
        <div className="fswd__container">
          <h2 className="fswd__title_dark">Development Process</h2>
          <div className="fswd__roadmap_grid">
            {processSteps.map((step, i) => (
              <div key={i} className="fswd__roadmap_card">
                <div className="roadmap_node">
                  <div className="roadmap_circle">{step.n}</div>
                </div>
                <div className="roadmap_content_box hover_lift">
                  <h4>{step.t}</h4>
                  <p className="fswd__justify_text">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fswd__section grey_bar">
        <div className="fswd__container">
          <h2 className="fswd__title_dark">Frequently Asked Questions</h2>
          <div className="fswd__faq_narrow">
            {faqs.map((f, i) => (
              <details key={i} className="faq_item">
                <summary><div><span>{i + 1}.</span> {f.q}</div> <span className="faq_plus">+</span></summary>
                <div className="faq_ans fswd__justify_text">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* MID CTA SECTION */}
      <section className="fswd__section fswd__cta_section">
        <div className="fswd__container">
          <div className="fswd__cta_card">
            <h2 className="fswd__cta_heading">
              Ready to Build a High-Performance Web Application?
            </h2>

            <p className="fswd__cta_text">
              Let’s turn your idea into a scalable full-stack system with clean architecture,
              modern UI/UX, and production-ready performance.
            </p>

            <div className="fswd__hero_actions">
              <a href="/contact" className="fswd__hero_btn fswd__hero_btn--primary">
                Get Free Consultation →
              </a>

              {/* Updated Portfolio Button in Mid CTA */}
              <a 
                href="https://zonzoc-tech.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="fswd__hero_btn fswd__hero_btn--secondary"
              >
                View Work →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FullStackWebDev;