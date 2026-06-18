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

  const aiFeatures = [
    { icon: <Bot size={28} />,           label: "AI Chatbots"                 },
    { icon: <RefreshCw size={28} />,     label: "Workflow Automation"           },
    { icon: <Bell size={28} />,          label: "Smart Notifications"           },
    { icon: <Activity size={28} />,      label: "Predictive Analytics"          },
    { icon: <Sparkles size={28} />,      label: "AI Content Assistance"         },
    { icon: <Cpu size={28} />,           label: "Recommendation Systems"        },
    { icon: <Target size={28} />,        label: "Lead Qualification Systems"    },
    { icon: <FileBarChart size={28} />,  label: "Automated Reporting"           },
    { icon: <Users size={28} />,         label: "CRM Automation"                },
    { icon: <UserCheck size={28} />,     label: "User Behavior Tracking"        },
    { icon: <BarChart3 size={28} />,     label: "Data Visualization Dashboards" },
    { icon: <Search size={28} />,        label: "AI Search & Filtering"         },
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
          title="Custom AI Web Applications Built for"
          titleAccent="Automation, Scalability & Growth"
          subtitle="We design and build intelligent AI web applications that automate workflows, process data, and scale with your business — serving companies across the UK, USA, and worldwide."
          features={["AI Powered Solutions", "Scalable Architecture", "Secure & Reliable"]}
          heroImage={heroImg?.src || heroImg} /* Safe URL string extractor */
          heroAlt="AI Web Application Development"
        />

      <ServiceIntroMarqueeSection serviceKey="ai-web-app" />

      <section className="aiwa-services-section">
        <div className="aiwa__container">
          <div className="aiwa-section-head">
            <span className="aiwa-pill">Our Services</span>
            <p className="aiwa-section-title">AI Web Application Development Services</p>
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

      <ServiceProcessSection serviceKey="ai-web-app" />

      <ServiceIndustriesSection serviceKey="ai-web-app" />

      {/* Feature section */}
      <section className="aiwa-features-section">
        <div className="aiwa__container">
          <div className="aiwa-section-head">
            <span className="aiwa-pill">AI Features We Can Integrate</span>
          </div>
          <div className="aiwa-features-grid">
            {aiFeatures.map((f, i) => (
              <div key={i} className="aiwa-feature-item">
                <div className="aiwa-feature-icon">{f.icon}</div>
                <span className="aiwa-feature-label">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="aiwa-faq-section">
        <div className="aiwa__container">
          <div className="aiwa-section-head">
            <p className="aiwa-section-title">Frequently Asked Questions</p>
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

      <WhoWeAre />
      <ServicePageCta {...cta} />

      <ServicePageMobileStyles />
      <Footer />
    </div>
  );
};

export default AIWebAppDev;