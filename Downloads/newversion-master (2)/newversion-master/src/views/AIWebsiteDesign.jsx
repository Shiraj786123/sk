'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor, Rocket, Zap, RefreshCw, ShieldCheck,
  Search, Layout, Code, Palette, Microscope,
  Plus, Minus, Sparkles,
  Bot, Settings, Layers, CheckCircle2,
  MessageSquare, Target, TrendingUp, Users, FileText,
  Calendar, UserCheck, PieChart, BarChart3
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import "../styles/AIWebsiteDesign.css";

const AIWebsiteDesign = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const aiDifferences = [
    { title: "Personalized Content",   description: "Show the right content to the right audience.",                        icon: <Target size={22} />        },
    { title: "Automate Interactions",  description: "AI chatbots and automation improve customer support.",                 icon: <MessageSquare size={22} />  },
    { title: "Generate More Leads",    description: "Smart forms and AI tools capture more qualified leads.",               icon: <TrendingUp size={22} />     },
    { title: "Analyze Behavior",       description: "Track and understand visitor behavior in real-time.",                  icon: <BarChart3 size={22} />      },
    { title: "Enhance Experience",     description: "AI improves usability and creates smoother user journeys.",            icon: <Sparkles size={22} />       },
    { title: "Boost Conversions",      description: "Smart features that encourage more actions & sales.",                  icon: <Zap size={22} />            },
  ];

  const services = [
    { title: "Custom Business Website Design",  icon: <Monitor size={30} />,    description: "Professional, responsive websites designed to represent your brand and convert visitors." },
    { title: "AI Chatbot Integration",          icon: <Bot size={30} />,        description: "Integrate AI-powered chatbots and virtual assistants to automate customer support." },
    { title: "SEO-Friendly Development",        icon: <Search size={30} />,     description: "Websites built with SEO best practices for better rankings and long-term visibility." },
    { title: "Landing Page Design",             icon: <Rocket size={30} />,     description: "High-converting landing pages built to increase leads, inquiries, and conversions." },
    { title: "Ecommerce Website Development",   icon: <Zap size={30} />,        description: "Modern ecommerce websites designed to improve user experience and increase sales." },
    { title: "Website Redesign Services",       icon: <RefreshCw size={30} />,  description: "Transform outdated websites into modern, high-performing digital platforms." },
    { title: "Smart Automation Integration",    icon: <Settings size={30} />,   description: "Automate forms, lead capture, notifications, workflows, and customer communication." },
    { title: "Ongoing Support & Maintenance",   icon: <ShieldCheck size={30} />,description: "We keep your website secure, updated, and performing at its best all the time." },
  ];

  const whyChoose = [
    { title: "Conversion-Focused Design",   description: "Every element is designed to turn visitors into customers.",                              icon: <BarChart3 size={22} />,  colorClass: "why-cyan"   },
    { title: "Modern UI/UX Experience",     description: "Clean, intuitive, and engaging designs that improve user satisfaction.",                  icon: <Layers size={22} />,     colorClass: "why-purple" },
    { title: "SEO & Performance Optimized", description: "Fast-loading, mobile-friendly websites optimized for search engines.",                   icon: <TrendingUp size={22} />, colorClass: "why-green"  },
    { title: "AI-Powered Features",         description: "Smart technologies that automate, engage and convert more customers.",                    icon: <Bot size={22} />,        colorClass: "why-blue"   },
    { title: "Built for Long-Term Growth",  description: "Scalable solutions that grow with your business and future requirements.",                icon: <Rocket size={22} />,     colorClass: "why-orange" },
  ];

  const processSteps = [
    { step: "01", title: "Discovery & Strategy",   icon: <Microscope size={26} />, description: "We learn about your business, audience, goals, and competitors to create a strategic foundation." },
    { step: "02", title: "Planning & Wireframing", icon: <Layout size={26} />,     description: "We structure the user experience and website layout before design and development begins." },
    { step: "03", title: "UI/UX Design",           icon: <Palette size={26} />,    description: "Modern interface design focused on branding, usability, and conversion optimization." },
    { step: "04", title: "Website Development",    icon: <Code size={26} />,       description: "Clean, responsive development optimized for performance, SEO, and security." },
    { step: "05", title: "Launch & Optimization",  icon: <Rocket size={26} />,     description: "Deployment, testing, analytics setup, and ongoing optimization for long-term growth." },
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

  return (
    <div className="aiwd-master-wrapper">
      <Navbar />

      {/* ═══ HERO — UNCHANGED ═══ */}
      <section className="aiwd-hero">
        <div className="aiwd-container">
          <div className="aiwd-hero-content">
            <Breadcrumb />
            <span className="aiwd-hero-badge">AI Web Design & Development Agency</span>
            <h1 className="aiwd-hero-title">
              AI Website Design That Turns{" "}
              <span className="aiwd-hero-title-accent">Visitors Into Customers</span>
            </h1>
            <p className="aiwd-hero-subtext">
              We build high-converting AI-powered websites for UK &amp; USA businesses —
              combining modern UI, conversion psychology, and performance engineering.
            </p>
            <div className="aiwd-hero-actions">
              <a href="/contact" className="aiwd-btn-primary">Get Free Consultation</a>
              <a href="/case-studies" className="aiwd-btn-secondary">View Our Works →</a>
            </div>
            <p className="aiwd-hero-trust">Trusted by 120+ businesses across the UK, USA &amp; Europe</p>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 1 — What Makes AI-Powered Websites Different? ═══ */}
      <section className="aiwd-diff-section">
        <div className="aiwd-container">
          <div className="aiwd-diff-layout">
            <div className="aiwd-diff-left">
              <span className="aiwd-section-pill">Why AI Websites?</span>
              <h2 className="aiwd-diff-title">
                What Makes{" "}
                <span className="aiwd-text-blue">AI-Powered Websites</span>{" "}
                Different?
              </h2>
              <p className="aiwd-diff-desc">
                AI-powered websites use smart automation, personalization, and intelligent
                user experiences to improve customer engagement and increase conversions.
              </p>
              <a href="#" className="aiwd-diff-link">Explore the Benefits →</a>
            </div>
            <div className="aiwd-diff-right">
              <div className="aiwd-diff-grid">
                {aiDifferences.map((item, i) => (
                  <div key={i} className="aiwd-diff-card">
                    <div className="aiwd-diff-card-icon">{item.icon}</div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2 — Services 4-column grid ═══ */}
      <section className="aiwd-services-section">
        <div className="aiwd-container">
          <div className="aiwd-section-head">
            <span className="aiwd-section-pill">Our Services</span>
            <h2 className="aiwd-section-title">
              AI Website{" "}
              <span className="aiwd-text-blue">Design &amp; Development</span>{" "}
              Services
            </h2>
          </div>
          <div className="aiwd-services-grid">
            {services.map((svc, i) => (
              <div key={i} className="aiwd-service-card">
                <div className="aiwd-service-icon">{svc.icon}</div>
                <h3>{svc.title}</h3>
                <p>{svc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3 — Why Businesses Choose Us (dark) ═══ */}
      <section className="aiwd-why-section">
        <div className="aiwd-container">
          <div className="aiwd-section-head">
            <span className="aiwd-section-pill-white">Why Businesses Choose Us</span>
          </div>
          <div className="aiwd-why-grid">
            {whyChoose.map((item, i) => (
              <div key={i} className={`aiwd-why-card ${item.colorClass}`}>
                <div className="aiwd-why-icon-wrap">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4 — Our Website Design Process ═══ */}
      <section className="aiwd-process-section">
        <div className="aiwd-container">
          <div className="aiwd-section-head">
            <span className="aiwd-section-pill">Our Website Design Process</span>
          </div>
          <div className="aiwd-process-row">
            {processSteps.map((item, i) => (
              <div key={i} className="aiwd-process-col">
                {i < processSteps.length - 1 && <div className="aiwd-process-connector" />}
                <div className="aiwd-process-circle">{item.icon}</div>
                <span className="aiwd-process-num">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5 — AI Features We Can Integrate ═══ */}
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

      {/* ═══ SECTION 6 — FAQ 2-column ═══ */}
      <section className="aiwd-faq-section">
        <div className="aiwd-container">
          <div className="aiwd-section-head">
            <h2 className="aiwd-section-title">Frequently Asked Questions</h2>
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

      {/* ═══ SECTION 7 — CTA with form ═══ */}
      <section className="aiwd-cta-section">
        <div className="aiwd-container">
          <div className="aiwd-cta-inner">
            <div className="aiwd-cta-left">
              <span className="aiwd-cta-label">Let's Build Your Success</span>
              <h2 className="aiwd-cta-big-title">
                Ready to Build an{" "}
                <span className="aiwd-text-blue">AI-Powered Website?</span>
              </h2>
              <p className="aiwd-cta-desc">
                Let's create a high-performing website designed to grow your business,
                improve conversions, and support long-term digital success.
              </p>
              <div className="aiwd-cta-checks">
                <div className="aiwd-cta-check-row">
                  <CheckCircle2 size={18} className="aiwd-check-icon" />
                  <span>We usually respond within 1–3 business hours</span>
                </div>
                <div className="aiwd-cta-check-row">
                  <CheckCircle2 size={18} className="aiwd-check-icon" />
                  <span>No spam. No obligation.</span>
                </div>
                <div className="aiwd-cta-check-row">
                  <CheckCircle2 size={18} className="aiwd-check-icon" />
                  <span>100% focused on your success.</span>
                </div>
              </div>
            </div>
            <div className="aiwd-cta-right">
              <div className="aiwd-cta-form">
                <h3>Get Free Consultation</h3>
                <div className="aiwd-form-row">
                  <input type="text"  placeholder="Your Name*"     className="aiwd-form-input" />
                  <input type="email" placeholder="Email Address*" className="aiwd-form-input" />
                </div>
                <div className="aiwd-form-row">
                  <input type="tel" placeholder="Phone Number*" className="aiwd-form-input" />
                  <select className="aiwd-form-input">
                    <option value="">Select a Service</option>
                    <option>Business Website Design</option>
                    <option>Landing Page</option>
                    <option>E-commerce</option>
                    <option>AI Integration</option>
                    <option>Website Redesign</option>
                  </select>
                </div>
                <button className="aiwd-form-btn">Send Message →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIWebsiteDesign;