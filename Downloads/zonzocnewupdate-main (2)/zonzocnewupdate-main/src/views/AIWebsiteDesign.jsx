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
import "../styles/AIWebsiteDesign.css";

// Re-imported the working static reference (2 levels up from src/views/)
import heroImg from "../../public/images/aiwebdesign.png";

const AIWebsiteDesign = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  // Modern colorful items for the horizontally moving intro section
  const introItems = [
    {
      title: "Personalized user experiences",
      icon: <Sparkles size={32} />,
      colorClass: "pink-purple"
    },
    {
      title: "AI chatbots & smart automation",
      icon: <Bot size={32} />,
      colorClass: "cyan-blue"
    },
    {
      title: "SEO-friendly modern design",
      icon: <Search size={32} />,
      colorClass: "lime-green"
    },
    {
      title: "High-converting landing pages",
      icon: <Zap size={32} />,
      colorClass: "orange-yellow"
    },
    {
      title: "Scalable for long-term growth",
      icon: <TrendingUp size={32} />,
      colorClass: "purple-indigo"
    }
  ];

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
    { title: "Smart Automation Integration",    icon: <Settings size={30} />,   description: "Automate forms, lead canvas, notifications, workflows, and customer communication." },
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

  const heroFeatures = [
    "Modern Design",
    "SEO Friendly",
    "AI Integration",
    "High Converting",
  ];

  return (
    <div className="aiwd-master-wrapper">
      
      {/* SAFE INJECTED CSS THAT RESOLVES SERVER-SIDE HYDRATION MISMATCHES */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* 1. Make the hero container wider to let the image grow to its full size */
        .aiwd-master-wrapper .aiwd-hero .aiwd-container,
        .aiwd-master-wrapper .sp-hero-split .aiwd-container {
          max-width: 1400px !important;
          width: 100% !important;
        }

        /* 2. Balance the columns: Allocate 45% to text and 55% to the image */
        @media (min-width: 1025px) {
          .aiwd-master-wrapper .sp-hero-split-grid {
            display: grid !important;
            grid-template-columns: 45% 55% !important; 
            align-items: center !important;
            gap: 10px !important; /* Kept tight to keep laptop close to text */
          }
          
          /* Pull the image wrapper to the left closer to the description text */
          .aiwd-master-wrapper .sp-hero-image-wrap {
            justify-content: flex-start !important; 
            margin-left: -100px !important; 
          }
        }

        /* 3. Increase vertical padding of the hero to give the layout breathing room */
        .aiwd-master-wrapper .sp-hero-split {
          padding: 120px 0 100px !important;
        }

        /* 4. Complete reset of any borders, backgrounds, shadows, or rounded corners on the wrapper */
        .aiwd-master-wrapper .sp-hero-image-wrap {
          max-width: 100% !important;         
          width: 100% !important;
          height: auto !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          border-radius: 0 !important;
          padding: 0 !important;
          margin: 0 !important;
          overflow: visible !important;
          isolation: isolate !important;
        }

        /* 5. Scale up the image, blend seamlessly, and keep central area completely sharp */
        .aiwd-master-wrapper .sp-hero-image-wrap img,
        .aiwd-master-wrapper [class*="hero-image-wrap"] img {
          width: 100% !important;
          max-width: 100% !important;
          height: auto !important;
          display: block !important;
          border-radius: 0 !important;
          border: none !important;
          box-shadow: none !important;
          object-fit: contain !important;
          
          /* Force GPU rendering in Chrome to activate blend modes correctly */
          transform: translate3d(0, 0, 0) !important;
          will-change: transform !important;
          
          /* Blends the image background into absolute transparency */
          mix-blend-mode: screen !important;
          
          /* FIXED: Restored balanced contrast filters to push the dark blue-gray JPEG background to absolute transparent black */
          filter: brightness(0.85) contrast(1.2) !important;
          
          /* FIXED: Soft, wide elliptical mask (95% horizontal, 85% vertical) with solid center up to 60% to completely eliminate "eyebrow" lines */
          mask-image: radial-gradient(ellipse 95% 85% at 50% 50%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%) !important;
          -webkit-mask-image: radial-gradient(ellipse 95% 85% at 50% 50%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%) !important;
        }

        /* ═══ HIGH-PRIORITY INLINE MEDIA QUERY OVERRIDES FOR MOBILE ═══ */
        @media (max-width: 768px) {
          /* Force any container with features inside .sp-hero-split-content into a centered 2x2 grid */
          html body .aiwd-master-wrapper div.sp-hero-split-content div[class*="features"],
          html body .aiwd-master-wrapper div.sp-hero-split-content div[class*="Features"],
          html body .aiwd-master-wrapper div.sp-hero-split-content .sp-hero-split-features,
          html body .aiwd-master-wrapper div.sp-hero-split-content > div:last-child,
          html body .aiwd-master-wrapper div.sp-hero-split-content > ul:last-child {
            display: grid !important;
            grid-template-columns: repeat(2, minmax(130px, max-content)) !important;
            gap: 12px 20px !important;
            justify-content: center !important;
            width: 100% !important;
            max-width: 100% !important;
            margin: 20px auto 0 auto !important;
            padding: 0 16px !important;
            box-sizing: border-box !important;
          }

          /* Force individual features items inside the grid to stay horizontal as row cells */
          html body .aiwd-master-wrapper div.sp-hero-split-content div[class*="features"] > *,
          html body .aiwd-master-wrapper div.sp-hero-split-content div[class*="Features"] > *,
          html body .aiwd-master-wrapper div.sp-hero-split-content .sp-hero-split-features > *,
          html body .aiwd-master-wrapper div.sp-hero-split-content > div:last-child > *,
          html body .aiwd-master-wrapper div.sp-hero-split-content > ul:last-child > * {
            display: inline-flex !important;
            flex-direction: row !important;
            align-items: center !important;
            justify-content: flex-start !important;
            width: auto !important;
            margin: 0 !important;
            gap: 8px !important;
            white-space: nowrap !important;
          }

          /* Mobile scale optimization for checkmark icons and labels */
          html body .aiwd-master-wrapper div.sp-hero-split-content div[class*="features"] span,
          html body .aiwd-master-wrapper div.sp-hero-split-content div[class*="features"] svg,
          html body .aiwd-master-wrapper div.sp-hero-split-content > div:last-child span,
          html body .aiwd-master-wrapper div.sp-hero-split-content > div:last-child svg {
            font-size: 11px !important;
            font-weight: 700 !important;
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
        heroAlt="AI Website Design & Development"
      />

      {/* ═══ CUSTOM INTRO SECTION WITH HORIZONTAL MARQUEE TRACK ═══ */}
      <section className="aiwd-intro-section">
        <div className="aiwd-container">
          <div className="aiwd-intro-content">
            <span className="aiwd-intro-label">What Is AI Website Design?</span>
            <h2 className="aiwd-intro-title">
              Modern Websites Powered by <span className="aiwd-text-blue">AI Technology</span>
            </h2>
            <p className="aiwd-intro-desc">
              AI website design combines intelligent automation, personalization, and conversion-focused development to create websites that engage visitors and turn them into customers.
            </p>
            
            {/* Seamless Horizontally Moving Grid wrapper */}
            <div className="aiwd-intro-marquee-wrapper">
              <div className="aiwd-intro-marquee-track">
                {[...introItems, ...introItems].map((item, idx) => (
                  <div key={idx} className="aiwd-intro-sitemap-col">
                    <div className="aiwd-intro-sitemap-card">
                      <div className="aiwd-intro-sitemap-header-bar">
                        <span className="aiwd-intro-browser-dot"></span>
                        <span className="aiwd-intro-browser-dot"></span>
                        <span className="aiwd-intro-browser-dot"></span>
                      </div>
                      <div className="aiwd-intro-sitemap-body">
                        <div className="aiwd-intro-card-left-group">
                          <CheckCircle2 size={16} className="aiwd-intro-check-icon" />
                          <h4 className="aiwd-intro-sitemap-card-title">{item.title}</h4>
                        </div>
                        
                        <div className={`aiwd-intro-icon-box ${item.colorClass}`}>
                          {item.icon}
                        </div>
                        
                        <div className="aiwd-intro-sitemap-card-footer">
                          <span>Explore</span>
                          <ArrowRight size={14} className="aiwd-intro-card-arrow" />
                        </div>
                      </div>
                    </div>
                    <div className="aiwd-intro-sitemap-line"></div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ SECTION 1 ═══ */}
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

      {/* ═══ SECTION 2 ═══ */}
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

      {/* ═══ SECTION 3 ═══ */}
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

      {/* ═══ SECTION 4 ═══ */}
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

      {/* ═══ SECTION 6 ═══ */}
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

      {/* ═══ SECTION 7 ═══ */}
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