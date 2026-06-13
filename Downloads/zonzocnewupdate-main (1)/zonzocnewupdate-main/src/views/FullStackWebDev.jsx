'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2, Plus, Minus, ArrowRight, Shield, Cpu, Code2, Users, Activity
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicePageHero from "../components/ServicePageHero";
import { serviceImages } from "../data/serviceImages";
import "../styles/FullStackWebDev.css";

const imgs = serviceImages['full-stack'];

/* ==========================================================================
   FORCE LOCAL ASSET OVERRIDE
   ========================================================================== */
const customHeroImage = "/images/fullstack.png";

const FullStackWebDev = () => {
  const [openFaq, setOpenFaq] = useState(null);

  /* ── DATA ─────────────────────────────────────── */
  const stats = [
    { icon: "🏆", number: "150+", label: "Projects Delivered" },
    { icon: "❤️", number: "98%",  label: "Client Satisfaction" },
    { icon: "👨‍💻", number: "50+",  label: "Expert Developers" },
    { icon: "📅", number: "10+",  label: "Years Experience" },
    { icon: "🕐", number: "24/7", label: "Support Available" },
    { icon: "✅", number: "100%", label: "On-Time Delivery" },
  ];

  // Modern colorful items for the horizontally moving sitemap cards
  const introItems = [
    { title: "Scalable & secure application architecture",      icon: <Shield size={32} />,   colorClass: "pink-purple" },
    { title: "Modern technologies for high performance",      icon: <Cpu size={32} />,      colorClass: "cyan-blue" },
    { title: "Clean, maintainable & future-ready code",        icon: <Code2 size={32} />,    colorClass: "lime-green" },
    { title: "Agile development & transparent communication",  icon: <Users size={32} />,    colorClass: "orange-yellow" },
    { title: "Ongoing support & long-term partnership",        icon: <Activity size={32} />,   colorClass: "purple-indigo" }
  ];

  const services = [
    { icon: "💻", title: "Custom Web Applications",  desc: "Tailored solutions to match your business workflows and goals.",                  link: "/web-development" },
    { icon: "🚀", title: "SaaS Development",          desc: "Scalable SaaS platforms with multi-tenancy, subscriptions and dashboards.",          link: "/saas-development" },
    { icon: "🎨", title: "Frontend Development",      desc: "Interactive, responsive and fast user interfaces built with modern frameworks.",      link: "/frontend-development" },
    { icon: "⚙️", title: "Backend Development",       desc: "Robust server-side logic, authentication, databases and business APIs.",             link: "/backend-development" },
    { icon: "🔌", title: "API Development",           desc: "RESTful & GraphQL APIs and third-party service integrations.",                        link: "/api-development" },
    { icon: "☁️", title: "Cloud & DevOps",            desc: "Deployment, CI/CD, monitoring and scalable cloud infrastructures.",                   link: "/cloud-devops" },
  ];

  const techStack = [
    {
      category: "Frontend",
      techs: [
        { name: "React",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Next.js",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
        { name: "Vue.js",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
        { name: "TypeScript",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
        { name: "Tailwind CSS",icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      ],
    },
    {
      category: "Backend",
      techs: [
        { name: "Node.js",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
        { name: "Laravel",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
        { name: "Python",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
        { name: "PHP",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
      ],
    },
    {
      category: "Databases",
      techs: [
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        { name: "MongoDB",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
        { name: "Redis",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
        { name: "Firebase",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
      ],
    },
    {
      category: "Cloud & DevOps",
      techs: [
        { name: "AWS",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Docker",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
        { name: "Vercel",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
        { name: "Cloudflare", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg" },
        { name: "GitHub",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
      ],
    },
  ];

  const processSteps = [
    { n: "01", icon: "🔍", title: "Discovery & Planning",    desc: "We analyze your idea, requirements and goals to create the right strategy." },
    { n: "02", icon: "🎨", title: "Architecture & Design",   desc: "We plan the system architecture, database structure and UI/UX experience." },
    { n: "03", icon: "</>", title: "Development",            desc: "We build the frontend, backend, APIs and integrations with clean and scalable code." },
    { n: "04", icon: "🛡️", title: "Testing & QA",           desc: "We test performance, security, compatibility and ensure bug-free delivery." },
    { n: "05", icon: "🚀", title: "Deployment",              desc: "We deploy your application on a secure and scalable cloud environment." },
    { n: "06", icon: "🎧", title: "Support & Growth",        desc: "We provide ongoing maintenance, updates and performance optimization." },
  ];

  const caseStudies = [
    {
      title: "SaaS Analytics Platform",
      desc: "Custom dashboard for a SaaS startup to track analytics & user insights.",
      stats: [{ val: "+42%", label: "User Engagement" }, { val: "+35%", label: "Performance Boost" }],
      color: "#4f46e5",
      emoji: "📊",
    },
    {
      title: "Ecommerce Management System",
      desc: "Full stack solution for order, inventory and customer management.",
      stats: [{ val: "+60%", label: "Operational Efficiency" }, { val: "+28%", label: "Revenue Growth" }],
      color: "#0891b2",
      emoji: "🛒",
    },
    {
      title: "Healthcare Booking Portal",
      desc: "Secure booking & appointment management system for healthcare.",
      stats: [{ val: "+48%", label: "Faster Appointments" }, { val: "+32%", label: "User Satisfaction" }],
      color: "#059669",
      emoji: "🏥",
    },
  ];

  const faqs = [
    { q: "What is full stack web development?",                    a: "Full stack development covers both frontend (what users see) and backend (server logic, databases, APIs) of a web application — handled by one team end-to-end." },
    { q: "How long does it take to build a web application?",      a: "A simple MVP takes 6–10 weeks. Complex SaaS platforms take 3–6 months. We provide a clear timeline before any work begins." },
    { q: "What technologies do you use?",                          a: "We use modern stacks including React, Next.js, Node.js, Python, PostgreSQL, MongoDB, AWS, Docker, and more — chosen to fit your project requirements." },
    { q: "Do you provide ongoing support and maintenance?",        a: "Yes. We offer updates, monitoring, optimization, security patches, and long-term maintenance services for all projects." },
    { q: "Can you integrate third-party services and APIs?",       a: "Yes. We integrate payment gateways, CRM systems, automation platforms, REST/GraphQL APIs, and any third-party services your business needs." },
  ];

  const codeSnippet = `// Building scalable applications
const app = express();

app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Application is running smoothly 🚀'
  });
});`;

  return (
    <div className="fswd__wrapper">
      {/* ── HIGH PRIORITY STYLES FOR BREADCRUMBS ON BOTH DESKTOP & MOBILE VIEWPORTS ── */}
      <style>{`
        /* Desktop Viewports Override */
        html body div.fswd__wrapper div.sp-hero-split-content div.breadcrumb-wrap,
        html body div.fswd__wrapper div.sp-hero-split-content div.breadcrumb-wrap * {
          font-size: 10px !important;
        }

        /* Mobile Viewports Override */
        @media (max-width: 768px) {
          html body div.fswd__wrapper div.sp-hero-split-content div.breadcrumb-wrap,
          html body div.fswd__wrapper div.sp-hero-split-content div.breadcrumb-wrap * {
            font-size: 10px !important;
          }
        }
      `}</style>

      <Navbar />

      {/* ── HERO SECTION WITH DIRECT CUSTOM ASSET PASS-THROUGH ── */}
      <ServicePageHero
        badge="FULL STACK WEB DEVELOPMENT"
        title="Custom Full Stack Web Applications Built for"
        titleAccent="Performance, Scalability & Growth"
        subtitle="We design and build bespoke, high-performance web applications, MVPs and SaaS platforms built to scale. We combine senior engineering talent with clean, maintainable code and conversion-focused UI/UX."
        features={["Scalable Architecture", "Modern Tech Stack", "On-Time Delivery"]}
        secondaryCta={{ href: "https://zonzoc-tech.netlify.app/", label: "View Portfolio →" }}
        heroImage={customHeroImage}
        heroAlt="Zonzoc Tech Full Stack Web Development Illustration"
      />

      {/* ── STATS BAR — 6 items ───────────────────────── */}
      <section className="fswd-stats-section">
        <div className="fswd__container">
          <div className="fswd-stats-box">
            {stats.map((s, i) => (
              <div key={i} className="fswd-stat-cell">
                <span className="fswd-stat-icon">{s.icon}</span>
                <span className="fswd-stat-num">{s.number}</span>
                <span className="fswd-stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CUSTOM INTRO SECTION WITH HORIZONTAL MARQUEE TRACK (NO IMAGE) ═══ */}
      <section className="fswd-intro-section">
        <div className="fswd__container">
          <div className="fswd-intro-content">
            <span className="fswd-intro-label">Why Businesses Choose Us</span>
            <h2 className="fswd-intro-title">
              End-to-End Development That Powers <span className="aiwa-text-blue">Real Business Growth</span>
            </h2>
            <p className="fswd-intro-desc">
              From idea to deployment, we build robust, scalable and future-ready web applications that drive automation, efficiency and long-term success.
            </p>
            
            {/* Horizontal slider loop wrapper */}
            <div className="fswd-intro-marquee-wrapper">
              <div className="fswd-intro-marquee-track">
                {/* Duplicated items list */}
                {[...introItems, ...introItems].map((item, idx) => (
                  <div key={idx} className="fswd-intro-sitemap-col">
                    <div className="fswd-intro-sitemap-card">
                      <div className="fswd-intro-sitemap-header-bar">
                        <span className="fswd-intro-browser-dot"></span>
                        <span className="fswd-intro-browser-dot"></span>
                        <span className="fswd-intro-browser-dot"></span>
                      </div>
                      <div className="fswd-intro-sitemap-body">
                        <div className="aiwa-intro-card-left-group">
                          <CheckCircle2 size={16} className="fswd-intro-check-icon" />
                          <h4 className="fswd-intro-sitemap-card-title">{item.title}</h4>
                        </div>
                        
                        {/* Modern Colorful Icon container */}
                        <div className={`fswd-intro-icon-box ${item.colorClass}`}>
                          {item.icon}
                        </div>
                        
                        <div className="fswd-intro-sitemap-card-footer">
                          <span>Explore</span>
                          <ArrowRight size={14} className="fswd-intro-card-arrow" />
                        </div>
                      </div>
                    </div>
                    {/* Dotted vertical sitemap connector line */}
                    <div className="fswd-intro-sitemap-line"></div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 2 — WHY + SERVICES ───────────────── */}
      <section className="fswd-why-section">
        <div className="fswd__container">
          <div className="fswd-section-center">
            <span className="fswd-eyebrow">Our Services</span>
            <h2 className="fswd-section-heading">Full Stack Web Development Services</h2>
          </div>
          <div className="fswd-services-grid">
            {services.map((svc, i) => (
              <div key={i} className="fswd-service-card">
                <div className="fswd-service-icon-box">{svc.icon}</div>
                <h3 className="fswd-service-title">{svc.title}</h3>
                <p className="fswd-service-desc">{svc.desc}</p>
                <a href={svc.link} className="fswd-learn-more">Learn More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ────────────────────────────────── */}
      <section className="fswd-tech-section">
        <div className="fswd__container">
          <div className="fswd-section-center">
            <span className="fswd-eyebrow">Technologies We Use</span>
            <h2 className="fswd-section-heading">Modern Tech Stack for Modern Applications</h2>
          </div>

          <div className="fswd-tech-grid">
            {techStack.map((col, ci) => (
              <div key={ci} className="fswd-tech-col">
                <div className="fswd-tech-col-head">{col.category}</div>
                <div className="fswd-tech-icons-row">
                  {col.techs.map((t, ti) => (
                    <div key={ti} className="fswd-tech-icon-item">
                      <div className="fswd-tech-icon-wrap">
                        <img
                          src={t.icon}
                          alt={t.name}
                          className="fswd-tech-img"
                          onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                        />
                        <span className="fswd-tech-fallback" style={{ display: 'none' }}>
                          {t.name.charAt(0)}
                        </span>
                      </div>
                      <span className="fswd-tech-name">{t.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS — Dark bg, 6 steps ───────────────── */}
      <section className="fswd-process-section">
        <div className="fswd__container">
          <div className="fswd-section-center">
            <span className="fswd-eyebrow fswd-eyebrow--light">Our Development Process</span>
            <h2 className="fswd-section-heading fswd-white">A Clear Process. Predictable Results.</h2>
          </div>

          <div className="fswd-process-track">
            {processSteps.map((step, i) => (
              <div key={i} className="fswd-process-step">
                <div className="fswd-process-node-wrap">
                  <div className="fswd-process-circle">
                    <span className="fswd-process-circle-icon">{step.icon}</span>
                  </div>
                  {i < processSteps.length - 1 && <div className="fswd-process-connector"></div>}
                </div>
                <span className="fswd-process-num">{step.n}</span>
                <h4 className="fswd-process-title">{step.title}</h4>
                <p className="fswd-process-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ─────────────────────────────── */}
      <section className="fswd-cases-section">
        <div className="fswd__container">
          <div className="fswd-section-center">
            <span className="fswd-eyebrow">Real Results. Real Impact.</span>
            <h2 className="fswd-section-heading">Solutions That Deliver Real Business Impact</h2>
          </div>

          <div className="fswd-cases-grid">
            {caseStudies.map((c, i) => (
              <div key={i} className="fswd-case-card">
                {/* Mock device preview */}
                <div className="fswd-case-preview" style={{ '--brand-color': c.color }}>
                  <div className="fswd-case-preview-inner">
                    <span className="fswd-case-emoji">{c.emoji}</span>
                    <div className="fswd-case-preview-bar">
                      <span></span><span></span><span></span>
                    </div>
                    <div className="fswd-case-preview-lines">
                      <div></div><div></div><div></div><div style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="fswd-case-body">
                  <h4 className="fswd-case-title">{c.title}</h4>
                  <p className="fswd-case-desc">{c.desc}</p>
                  <div className="fswd-case-stats">
                    {c.stats.map((st, si) => (
                      <div key={si} className="fswd-case-stat">
                        <span className="fswd-case-stat-val" style={{ color: c.color }}>{st.val}</span>
                        <span className="fswd-case-stat-lbl">{st.label}</span>
                      </div>
                    ))}
                  </div>
                  <a href="/case-studies" className="fswd-view-case">View Case Study →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ + CODE BLOCK ─────────────────────────── */}
      <section className="fswd-faq-section">
        <div className="fswd__container">
          <div className="fswd-faq-grid">

            {/* Left — accordion */}
            <div className="fswd-faq-left">
              <span className="fswd-eyebrow">Frequently Asked Questions</span>
              <h2 className="fswd-section-heading">Got Questions? We've Got Answers.</h2>
              <div className="fswd-faq-list">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className={`fswd-faq-item ${openFaq === i ? 'fswd-faq-item--open' : ''}`}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <div className="fswd-faq-q">
                      <span>{faq.q}</span>
                      <span className="fswd-faq-toggle">{openFaq === i ? '−' : '+'}</span>
                    </div>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="fswd-faq-a"
                        >
                          <p>{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — code card */}
            <div className="fswd-code-card">
              <h3 className="fswd-code-heading">Clean Code. Scalable Solutions.</h3>
              <p className="fswd-code-subtext">
                We follow best practices to build secure, maintainable and high-performance applications.
              </p>
              <div className="fswd-code-block">
                <div className="fswd-code-dots">
                  <span className="fswd-dot fswd-dot--red"></span>
                  <span className="fswd-dot fswd-dot--yellow"></span>
                  <span className="fswd-dot fswd-dot--green"></span>
                </div>
                <pre className="fswd-code-pre"><code>{codeSnippet}</code></pre>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA BOTTOM ───────────────────────────────── */}
      <section className="fswd-cta-section">
        <div className="fswd__container">
          <div className="fswd-cta-inner">
            <h2 className="fswd-cta-title">Ready to Build Your Next Big Application?</h2>
            <p className="fswd-cta-desc">
              Let's turn your idea into a powerful, scalable and future-ready web application.
            </p>
            <div className="fswd-cta-buttons">
              <a href="/contact" className="fswd-cta-btn-primary">Get Free Consultation →</a>
              <a href="/case-studies" className="fswd-cta-btn-secondary">View Our Work</a>
            </div>
            <div className="fswd-cta-pills">
              <span>✓ No Obligation</span>
              <span>✓ Quick Response (1–3 Hours)</span>
              <span>✓ 100% Confidential</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FullStackWebDev;