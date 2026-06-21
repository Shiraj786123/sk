'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2, Plus, Minus, ArrowRight, Shield, Cpu, Code2, Users, Activity
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
import { serviceImages } from "../data/serviceImages";
import "../styles/FullStackWebDev.css";
import "../styles/service-card-text-fix.css";

const cta = serviceCtaContent['full-stack'];

const FullStackWebDev = () => {
  const [openFaq, setOpenFaq] = useState(null);

  /* ── DATA ─────────────────────────────────────── */
  const services = [
    { icon: "💻", title: "Custom Web Apps",       desc: "Tailored apps built to match your workflows and growth plans.",           link: "/web-development" },
    { icon: "🚀", title: "SaaS Development",      desc: "Scalable SaaS with subscriptions, dashboards, and user management.", link: "/saas-development" },
    { icon: "🎨", title: "Frontend Development",  desc: "Responsive interfaces built with modern frameworks and practices.", link: "/frontend-development" },
    { icon: "⚙️", title: "Backend Development",   desc: "Server logic, authentication, databases, and APIs you can rely on.",   link: "/backend-development" },
    { icon: "🔌", title: "API Development",       desc: "RESTful and GraphQL APIs plus integrations for connected products.",            link: "/api-development" },
    { icon: "☁️", title: "Cloud & DevOps",        desc: "Deployment, CI/CD, monitoring, and cloud infrastructure for apps.",    link: "/cloud-devops" },
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
      
      {/* ── HIGH PRIORITY STYLES FOR EXACT ALIGNMENT & BREADCRUMBS (FIXED HYDRATION HOOK WITHOUT ATTRIBUTE QUOTES) ── */}
<Navbar />

      {/* ── HERO SECTION WITH OPTIMIZED NEXT.JS RESOURCE REFERENCE ── */}
      <ServicePageHero
        badge="FULL STACK WEB DEVELOPMENT"
        title="Custom Full Stack Web Applications"
        titleAccent="Built for Performance, Scalability & Growth"
        subtitle="We design and build bespoke, high-performance web applications, MVPs and SaaS platforms built to scale. We combine senior engineering talent with clean, maintainable code and conversion-focused UI/UX."
        features={["Scalable Architecture", "Modern Tech Stack", "On-Time Delivery"]}
        secondaryCta={{ href: "https://zonzoc-tech.netlify.app/", label: "View Portfolio →" }}
        heroImage="/images/fullstack.png"
        heroImageTransparent
        heroAlt="Zonzoc Tech Full Stack Web Development Illustration"
      />

      <ServiceIntroMarqueeSection serviceKey="full-stack" headingTag="h2" />

      {/* ── SECTION 2 — WHY + SERVICES ───────────────── */}
      <section className="fswd-why-section">
        <div className="fswd__container">
          <div className="fswd-section-center">
            <span className="fswd-eyebrow">Our Services</span>
            <h3 className="fswd-section-heading sp-heading-inline">
              <span className="sp-heading-line">Full Stack Web Development </span>
              <span className="sp-heading-accent">Services</span>
            </h3>
          </div>
          <div className="fswd-services-grid">
            {services.map((svc, i) => (
              <div key={i} className="fswd-service-card">
                <div className="fswd-service-icon-box">{svc.icon}</div>
                <p className="fswd-service-title sp-card-title-1l">{svc.title}</p>
                <p className="fswd-service-desc sp-card-desc-3l">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceWhyChooseSection serviceKey="full-stack" />

      <ServiceProcessSection serviceKey="full-stack" headingTag="h4" />

      {/* ── CASE STUDIES ─────────────────────────────── */}
      <section className="fswd-cases-section">
        <div className="fswd__container">
          <div className="fswd-section-center">
            <span className="fswd-eyebrow">Real Results. Real Impact.</span>
            <h5 className="fswd-section-heading sp-heading-2line">
              <span className="sp-heading-line">Solutions That Deliver</span>
              <span className="sp-heading-accent">Real Business Impact</span>
            </h5>
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
                  <p className="fswd-case-title">{c.title}</p>
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

      <ServiceIndustriesSection serviceKey="full-stack" headingTag="h6" />

      {/* ── FAQ + CODE BLOCK ─────────────────────────── */}
      <section className="fswd-faq-section">
        <div className="fswd__container">
          <div className="fswd-faq-grid">

            {/* Left — accordion */}
            <div className="fswd-faq-left">
              <span className="fswd-eyebrow">Frequently Asked Questions</span>
              <h6 className="fswd-section-heading sp-heading-inline sp-heading-2line--left">
                <span className="sp-heading-line">Got Questions? We've Got </span>
                <span className="sp-heading-accent">Answers.</span>
              </h6>
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
              <p className="fswd-code-heading">Clean Code. Scalable Solutions.</p>
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

      <WhoWeAre headingTag="h6" techStackHeadingTag="h6" />
      <ServicePageCta {...cta} headingTag="h6" />

      <ServicePageMobileStyles />
      <Footer />
    </div>
  );
};

export default FullStackWebDev;