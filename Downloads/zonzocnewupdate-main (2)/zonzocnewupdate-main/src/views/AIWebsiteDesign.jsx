'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor, Rocket, Zap, RefreshCw, ShieldCheck,
  Search, Layout, Code, Palette, Microscope,
  Plus, Minus, Sparkles, ArrowRight,
  Bot, Settings, Layers, CheckCircle2,
  MessageSquare, Target, TrendingUp, Users, FileText,
  Calendar, UserCheck, PieChart, BarChart3
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
import "../styles/AIWebsiteDesign.css";

import heroImg from "../../public/images/aiwebdesign.png";

const cta = serviceCtaContent['ai-website-design'];

const AIWebsiteDesign = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const aiDifferences = [
    { title: "Personalized Content",   description: "Show the right content to the right audience.",                        icon: Target,         colorClass: "diff-cyan" },
    { title: "Automate Interactions",  description: "AI chatbots and automation improve customer support.",                 icon: MessageSquare,  colorClass: "diff-purple" },
    { title: "Generate More Leads",    description: "Smart forms and AI tools capture more qualified leads.",               icon: TrendingUp,     colorClass: "diff-green" },
    { title: "Analyze Behavior",       description: "Track and understand visitor behavior in real-time.",                  icon: BarChart3,      colorClass: "diff-blue" },
    { title: "Enhance Experience",     description: "AI improves usability and creates smoother user journeys.",            icon: Sparkles,       colorClass: "diff-orange" },
    { title: "Boost Conversions",      description: "Smart features that encourage more actions & sales.",                  icon: Zap,            colorClass: "diff-teal" },
  ];

  const services = [
    { title: "Custom Websites",       icon: <Monitor size={30} />,    description: "Responsive sites that represent your brand and convert visitors." },
    { title: "AI Chatbots",           icon: <Bot size={30} />,        description: "AI chatbots that automate support and capture qualified leads." },
    { title: "SEO Development",       icon: <Search size={30} />,     description: "SEO-ready sites for better rankings, indexing, and visibility." },
    { title: "Landing Pages",         icon: <Rocket size={30} />,     description: "Landing pages designed to boost leads and sales from campaigns." },
    { title: "Ecommerce Sites",       icon: <Zap size={30} />,        description: "Ecommerce sites that improve UX, checkout flow, and sales." },
    { title: "Website Redesign",      icon: <RefreshCw size={30} />,  description: "Modern redesigns that reflect your brand and drive results." },
    { title: "Smart Automation",      icon: <Settings size={30} />,   description: "Automate forms, workflows, and messages to save time daily." },
    { title: "Support & Maintenance", icon: <ShieldCheck size={30} />,description: "Ongoing care to keep your site secure, fast, and up to date." },
  ];

  const aiFeatures = [
    { title: "AI Chatbots",                icon: <Bot size={30} />        },
    { title: "Smart Contact Forms",        icon: <FileText size={30} />   },
    { title: "Lead Qualification Systems", icon: <Target size={30} />     },
    { title: "AI Content Assistance",      icon: <Sparkles size={30} />   },
    { title: "Workflow Automation",        icon: <Settings size={30} />   },
    { title: "CRM Integrations",           icon: <Users size={30} />      },
    { title: "Booking & Scheduling",       icon: <Calendar size={30} />   },
    { title: "Personalized Experiences",   icon: <UserCheck size={30} />  },
    { title: "Analytics & Tracking",       icon: <PieChart size={30} />   },
  ];

  const faqs = [
    { question: "How much does AI website design cost?",                   answer: "Our packages are priced specifically to be affordable for small businesses. As an offshore agency we offer significantly better value than UK studios." },
    { question: "Is SEO included in website development?",                 answer: "Yes. Technical SEO is built-in — including heading structure, speed, meta tags, and schema markup to help you rank faster." },
    { question: "Can AI improve website conversions?",                     answer: "Absolutely. AI enables personalization, smart CTAs, and behavioral targeting that significantly improve conversion rates." },
    { question: "Can you integrate ChatGPT or AI chatbots into websites?", answer: "Yes — we specialize in integrating AI chatbots, GPT-powered tools, and virtual assistants into websites." },
    { question: "Are your websites mobile-friendly?",                      answer: "Yes — every website we design is mobile-first, ensuring a perfect experience on all screen sizes." },
    { question: "How long does it take to design a website?",              answer: "A standard business website takes 4 to 6 weeks. Landing pages can be delivered in 1 to 2 weeks." },
  ];

  const heroFeatures = [
    "Modern Design",
    "SEO Friendly",
    "AI Integration",
    "High Converting",
  ];

  return (
    <div className="aiwd-master-wrapper">

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          html body .aiwd-master-wrapper div.sp-hero-split-content .sp-hero-split-features {
            display: grid !important;
            grid-template-columns: repeat(2, minmax(130px, max-content)) !important;
            gap: 12px 20px !important;
            justify-content: center !important;
            width: 100% !important;
            margin: 20px auto 0 auto !important;
            padding: 0 16px !important;
          }
        }
        @media (max-width: 480px) {
          html body .aiwd-master-wrapper div.sp-hero-split-content .sp-hero-split-features {
            grid-template-columns: 1fr !important;
          }
        }
      ` }} />

      <Navbar />

      {/* ═══ HERO ═══ */}
      <ServicePageHero
        badge="AI Website Design & Development Services"
        title="AI-Powered Website Design That"
        titleAccent="Converts Visitors Into Customers"
        subtitle="We build high-performing AI-powered websites for businesses in the UK, USA, and worldwide — combining modern design, smart automation, and conversion-focused development to turn traffic into real results."
        features={heroFeatures}
        heroImage={heroImg}
        heroAlt="Futuristic laptop with glowing cyan and magenta holographic AI analytics dashboards, 3D data charts, and neon digital interface elements"
      />

      <ServiceIntroMarqueeSection serviceKey="ai-website-design" />

      {/* ═══ SECTION 1 ═══ */}
      <section className="aiwd-diff-section">
        <div className="aiwd-container">
          <div className="aiwd-diff-layout">
            <div className="aiwd-diff-left">
              <span className="aiwd-section-pill">Why AI Websites?</span>
              <p className="aiwd-diff-title">
                What Makes{" "}
                <span className="aiwd-text-blue">AI-Powered Websites</span>{" "}
                Different?
              </p>
              <p className="aiwd-diff-desc">
                AI-powered websites use smart automation, personalization, and intelligent
                user experiences to improve customer engagement and increase conversions.
              </p>
              <a href="#" className="aiwd-diff-link">Explore the Benefits →</a>
            </div>
            <div className="aiwd-diff-right">
              <div className="aiwd-diff-grid">
                {aiDifferences.map((item, i) => {
                  const Icon = item.icon;
                  return (
                  <div key={i} className="aiwd-diff-card">
                    <div className={`aiwd-diff-card-icon ${item.colorClass}`}>
                      <Icon size={22} />
                    </div>
                    <p className="sp-card-title-1l">{item.title}</p>
                    <p className="sp-card-desc-3l">{item.description}</p>
                  </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2 ═══ */}
      <section className="aiwd-services-section">
        <div className="aiwd-container">
          <div className="aiwd-section-head">
            <span className="aiwd-section-pill">Our Services</span>
            <p className="aiwd-section-title">
              AI Website{" "}
              <span className="aiwd-text-blue">Design &amp; Development</span>{" "}
              Services
            </p>
          </div>
          <div className="aiwd-services-grid">
            {services.map((svc, i) => (
              <div key={i} className="aiwd-service-card">
                <div className="aiwd-service-icon">{svc.icon}</div>
                <p className="sp-card-title-1l">{svc.title}</p>
                <p className="sp-card-desc-3l">{svc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceWhyChooseSection serviceKey="ai-website-design" />

      <ServiceProcessSection serviceKey="ai-website-design" />

      {/* ═══ SECTION 5 ═══ */}
      <section className="aiwd-features-section">
        <div className="aiwd-container">
          <div className="aiwd-section-head">
            <span className="aiwd-section-pill">AI Features We Can Integrate</span>
          </div>
          <div className="aiwd-features-grid">
            {aiFeatures.map((f, i) => (
              <div key={i} className="aiwd-feature-item">
                <div className="aiwd-feature-icon">{f.icon}</div>
                <span className="aiwd-feature-label">{f.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceIndustriesSection serviceKey="ai-website-design" />

      {/* ═══ SECTION 6 ═══ */}
      <section className="aiwd-faq-section">
        <div className="aiwd-container">
          <div className="aiwd-section-head">
            <p className="aiwd-section-title">Frequently Asked Questions</p>
          </div>
          <div className="aiwd-faq-2col">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`aiwd-faq-item ${activeFaq === i ? "active" : ""}`}
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
              >
                <div className="aiwd-faq-q">
                  <span>{faq.question}</span>
                  {activeFaq === i ? <Minus size={18} /> : <Plus size={18} />}
                </div>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="aiwd-faq-a"
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

export default AIWebsiteDesign;