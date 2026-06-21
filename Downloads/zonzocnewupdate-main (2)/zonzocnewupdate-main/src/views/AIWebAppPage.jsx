'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2, Database, Bot, Settings, BarChart3,
  Users, Globe, ShoppingCart, HeartPulse, Briefcase,
  GraduationCap, Truck, Building2, Megaphone, Rocket,
  Shield, Layers, Code2, Layout, Cpu,
  Activity, Sparkles, Target, FileBarChart, RefreshCw,
  UserCheck, Search, PieChart, Bell, Plus, Minus, ArrowRight, TrendingUp
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
import ServiceAiFeaturesSection from "../components/ServiceAiFeaturesSection";
import { serviceCtaContent } from "../data/serviceCtaContent";
import { serviceImages } from "../data/serviceImages";
import "../styles/AIWebAppPage.css";
import "../styles/service-card-text-fix.css";

import heroImg from "../../public/images/aiwebapp.png";

const cta = serviceCtaContent['ai-web-app'];

const AIWebAppDev = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const services = [
    { icon: <Layers size={28} />,       title: "Custom SaaS Development",    desc: "Scalable SaaS with subscriptions and secure user access." },
    { icon: <BarChart3 size={28} />,    title: "AI Dashboard Development",   desc: "Real-time dashboards with analytics and clear reporting." },
    { icon: <Settings size={28} />,     title: "Workflow Automation",        desc: "Automate processes, approvals, and internal workflows." },
    { icon: <Bot size={28} />,          title: "AI Chatbot Integration",     desc: "AI assistants to enhance support and automate interactions." },
    { icon: <Database size={28} />,     title: "CRM & ERP Applications",     desc: "Custom CRM and ERP tools for operations and customers." },
    { icon: <Users size={28} />,        title: "Customer Portals",           desc: "Secure portals with role-based access for your teams." },
    { icon: <FileBarChart size={28} />, title: "Analytics Platforms",        desc: "Analytics, KPI tracking, and automated reporting tools." },
    { icon: <Globe size={28} />,        title: "API Integrations",           desc: "Integrate payments, CRMs, cloud services, and APIs." },
  ];

  const technologies = [
    { name: "React",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",                      color: "#61dafb" },
    { name: "Next.js",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",                  color: "#000000" },
    { name: "Node.js",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",                  color: "#339933" },
    { name: "Laravel",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",                  color: "#ff2d20" },
    { name: "Python",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",                  color: "#3776ab" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",            color: "#336791" },
    { name: "MongoDB",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",                  color: "#47a248" },
    { name: "AWS",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", color: "#ff9900" },
    { name: "Firebase",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",                color: "#ffca28" },
    { name: "Docker",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",                  color: "#2496ed" },
    { name: "REST APIs",  icon: null,                                                                                                    color: "#002d62" },
  ];

  const faqs = [
    { question: "How much does AI web application development cost?",     answer: "Costs vary by complexity. We offer affordable offshore UK quality pricing — contact us for a tailored quote with no hidden fees." },
    { question: "Can AI improve website conversions?",                     answer: "Absolutely. AI-powered personalization, smart CTAs, and behavioral targeting significantly improve conversion rates." },
    { question: "How long does it take to build an AI web application?",   answer: "A standard AI web application takes 6–12 weeks. Simpler tools or dashboards can be delivered in 3–5 weeks." },
    { question: "Do you provide ongoing support after launch?",            answer: "Yes — we offer maintenance plans covering updates, performance monitoring, and feature development post-launch." },
    { question: "What technologies do you use?",                           answer: "We work with React, Next.js, Node.js, Python, PostgreSQL, MongoDB, AWS, and many more modern frameworks." },
    { question: "Can you integrate AI into my existing website?",          answer: "Yes. We specialize in adding AI layers to existing web applications with minimal rebuild requirements." },
  ];

  return (
    <div className="aiwa__wrapper">
      <Navbar />

      {/* ── HERO ── */}
      <ServicePageHero
          badge="AI Web Application Development"
          title="Custom AI Web Applications"
          titleAccent="Built for Automation, Scalability & Growth"
          subtitle="We design and build intelligent AI web applications that automate workflows, process data, and scale with your business — serving companies across the UK, USA, and worldwide."
          features={["AI Powered Solutions", "Scalable Architecture", "Secure & Reliable"]}
          heroImage={heroImg?.src || heroImg} /* Safe URL string extractor */
          heroImageTransparent
          heroAlt="AI Web Application Development"
        />

      <ServiceIntroMarqueeSection serviceKey="ai-web-app" headingTag="h2" />

      <section className="aiwa-services-section">
        <div className="aiwa__container">
          <div className="aiwa-section-head">
            <span className="aiwa-pill">Our Services</span>
            <h3 className="aiwa-section-title sp-heading-2line">
              <span className="sp-heading-line">AI Web Application</span>
              <span className="sp-heading-accent">Development Services</span>
            </h3>
          </div>
          <div className="aiwa-services-grid">
            {services.map((svc, i) => (
              <div key={i} className="aiwa-service-card">
                <div className="aiwa-service-icon">{svc.icon}</div>
                <p className="sp-card-title-1l">{svc.title}</p>
                <p className="sp-card-desc-3l">{svc.desc}</p>
              </div>
            ))}
          </div>
          <div className="aiwa-explore-link"><a href="/services">Explore All Services →</a></div>
        </div>
      </section>

      <ServiceWhyChooseSection serviceKey="ai-web-app" />

      <ServiceProcessSection serviceKey="ai-web-app" headingTag="h4" />

      <ServiceIndustriesSection serviceKey="ai-web-app" headingTag="h6" />

      <ServiceAiFeaturesSection serviceKey="ai-web-app" />

      <section className="aiwa-faq-section">
        <div className="aiwa__container">
          <div className="aiwa-section-head">
            <h6 className="aiwa-section-title sp-heading-2line">
              <span className="sp-heading-line">Frequently Asked</span>
              <span className="sp-heading-accent">Questions</span>
            </h6>
          </div>
          <div className="aiwa-faq-2col">
            {faqs.map((faq, i) => (
              <div key={i} className={`aiwa-faq-item ${activeFaq === i ? "active" : ""}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                <div className="aiwa-faq-q">
                  <span>{faq.question}</span>
                  {activeFaq === i ? <Minus size={17} /> : <Plus size={17} />}
                </div>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="aiwa-faq-a"
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
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

export default AIWebAppDev;