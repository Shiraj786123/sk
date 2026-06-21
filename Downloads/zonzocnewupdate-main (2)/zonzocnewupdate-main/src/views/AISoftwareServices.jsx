'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot, Brain, Workflow, BarChart4, Database, Cog,
  CheckCircle2, Layers, Plug, RefreshCw, Rocket,
  Building2, ShoppingCart, HeartPulse, Briefcase,
  GraduationCap, Truck, Megaphone, Globe, BarChart3,
  Search, Bell, Target, FileBarChart, UserCheck, Cpu,
  Sparkles, Activity, Shield, Code2, Layout,
  Plus, Minus, Zap, Settings, ArrowRight, TrendingUp
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
import "../styles/AISoftwareServices.css";
import "../styles/service-card-text-fix.css";

import heroImg from "../../public/images/aisoftware.png";

const cta = serviceCtaContent['ai-software'];

/* ─── DATA ──────────────────────────────────────────── */

const services = [
  { icon: <Bot size={28} />,       title: "AI Chatbot Development",  desc: "Intelligent chatbots for support, lead generation, and automation." },
  { icon: <Brain size={28} />,     title: "OpenAI Integration",      desc: "Integrate OpenAI, ChatGPT, and AI APIs into your workflows." },
  { icon: <Workflow size={28} />,  title: "Process Automation",      desc: "Automate tasks, approvals, and operational processes." },
  { icon: <BarChart4 size={28} />, title: "AI Analytics",            desc: "Turn raw data into insights, dashboards, and predictions." },
  { icon: <Database size={28} />,  title: "CRM & ERP Integration",   desc: "AI automation and smart workflows for CRM and ERP systems." },
  { icon: <Cog size={28} />,       title: "Enterprise AI Systems",   desc: "Scalable AI software tailored to your operations and goals." },
  { icon: <Zap size={28} />,       title: "AI Workflows",            desc: "Systems that streamline communication, tasks, and operations." },
  { icon: <Plug size={28} />,      title: "AI API Development",      desc: "Connect platforms, APIs, cloud services, and payment gateways." },
];

const techGroups = [
  {
    category: "AI & Machine Learning",
    items: [
      { name: "OpenAI APIs",  icon: null,                                                                                                     color: "#10a37f" },
      { name: "LangChain",    icon: null,                                                                                                     color: "#1c3c59" },
      { name: "Python",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",                     color: "#3776ab" },
      { name: "TensorFlow",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",             color: "#ff6f00" },
      { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",           color: "#f7931e" },
    ],
  },
  {
    category: "Backend & Cloud",
    items: [
      { name: "Node.js",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",                      color: "#339933" },
      { name: "Laravel",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",                     color: "#ff2d20" },
      { name: "AWS",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", color: "#ff9900" },
      { name: "Firebase",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",                   color: "#ffca28" },
      { name: "GraphQL",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",                        color: "#e10098" },
    ],
  },
  {
    category: "Automation & APIs",
    items: [
      { name: "Zapier",          icon: null,                                                                                                      color: "#ff4a00" },
      { name: "Make",            icon: null,                                                                                                      color: "#6d00cc" },
      { name: "Webhooks",        icon: null,                                                                                                      color: "#003070" },
      { name: "REST APIs",       icon: null,                                                                                                      color: "#003070" },
      { name: "Docker",          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",                  color: "#2496ed" },
    ],
  },
];

const faqs = [
  { question: "How much does AI software development cost in the USA, UK, or UAE?",  answer: "Pricing depends on the software scope, AI integrations, automation complexity, and technical requirements. Contact us for a free tailored quote with no hidden fees." },
  { question: "Can you integrate OpenAI or ChatGPT into existing systems?",           answer: "Yes. We integrate OpenAI APIs, ChatGPT, automation tools, and AI workflows into existing software platforms with minimal disruption to your operations." },
  { question: "Do you develop enterprise AI software solutions?",                     answer: "Yes. We build scalable AI-powered enterprise systems designed for automation, analytics, integrations, and operational efficiency at any scale." },
  { question: "Can AI automate business processes?",                                answer: "Yes. We software can automate repetitive workflows, customer interactions, reporting systems, and operational tasks — freeing your team for high-value work." },
  { question: "How long does it take to build custom AI software?",                   answer: "A simple chatbot or automation tool can be delivered in 4–8 weeks. Complex multi-system AI platforms typically take 3–5 months with clear milestones." },
  { question: "Do you provide ongoing support and maintenance?",                    answer: "Yes. We provide updates, monitoring, optimization, AI model improvements, and long-term technical support as your business needs evolve." },
];

const AISoftwareServices = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <div className="aiss__wrapper">
      
      {/* ── HIGH-PRIORITY INLINE STYLES FOR EXACT DESKTOP & MOBILE HERO LAYOUT OVERRIDES ── */}
<Navbar />

      {/* ═══ HERO SECTION (PASSED DIRECT AS OPTIMIZED NEXT.JS RESOURCE REFERENCE) ═══ */}
      <ServicePageHero
        badge="AI Software Development Company"
        title="Custom AI Software Development"
        titleAccent="That Automates Operations & Accelerates Growth"
        subtitle="We design and build intelligent AI software solutions including custom chatbots, workflow automation systems, GPT-powered tools, and business integrations that reduce manual work and scale with your business."
        features={["Trusted in USA, UK & UAE", "5-Star Client Rating", "Enterprise-Ready Solutions"]}
        heroImage={heroImg?.src || heroImg} /* Safe URL string extractor */
        heroAlt="AI Software Development Performance Dashboards Illustration"
      />

      <ServiceIntroMarqueeSection serviceKey="ai-software" headingTag="h2" />

      {/* ═══ SERVICES GRID ═══ */}
      <section className="aiss-services-section">
        <div className="aiss-container">
          <div className="aiss-section-head">
            <span className="aiss-pill">Our AI Software Development Services</span>
            <h3 className="aiss-section-title sp-heading-2line">
              <span className="sp-heading-line">Intelligent Solutions. Smarter Operations.</span>
              <span className="sp-heading-accent">Better Results.</span>
            </h3>
          </div>
          <div className="aiss-services-grid">
            {services.map((svc, i) => (
              <div key={i} className="aiss-service-card">
                <div className="aiss-service-icon">{svc.icon}</div>
                <p className="sp-card-title-1l">{svc.title}</p>
                <p className="sp-card-desc-3l">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <ServiceWhyChooseSection serviceKey="ai-software" />

      <ServiceProcessSection serviceKey="ai-software" headingTag="h4" />

      <ServiceIndustriesSection serviceKey="ai-software" headingTag="h6" />

      <ServiceAiFeaturesSection serviceKey="ai-software" />

      {/* ═══ FAQ SECTION ═══ */}
      <section className="aiss-faq-section">
        <div className="aiss-container">
          <div className="aiss-section-head">
            <h6 className="aiss-section-title sp-heading-2line">
              <span className="sp-heading-line">Frequently Asked</span>
              <span className="sp-heading-accent">Questions</span>
            </h6>
          </div>
          <div className="aiss-faq-2col">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`aiss-faq-item ${activeFaq === i ? "active" : ""}`}
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
              >
                <div className="aiss-faq-q">
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
                      className="aiss-faq-a"
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

export default AISoftwareServices;