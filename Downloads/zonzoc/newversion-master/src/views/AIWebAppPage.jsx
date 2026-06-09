'use client';

import React, { useState } from "react";
import {
  CheckCircle2, Database, Bot, Settings, BarChart3,
  Users, Globe, ShoppingCart, HeartPulse, Briefcase,
  GraduationCap, Truck, Building2, Megaphone, Rocket,
  Shield, Layers, Code2, Layout, Cpu,
  Activity, Sparkles, Target, FileBarChart, RefreshCw,
  UserCheck, Search, PieChart, Bell, Plus, Minus
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import "../styles/AIWebAppPage.css";

const AIWebAppDev = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const aiChecklist = [
    "Process large amounts of data",
    "Automate repetitive tasks",
    "Personalize user experiences",
    "Generate intelligent insights",
    "Improve operational efficiency",
    "Support scalable business workflows",
  ];

  const services = [
    { icon: <Layers size={28} />,       title: "Custom SaaS Development",                   desc: "Scalable SaaS platforms with multi-tenant architecture, subscriptions, and secure user management." },
    { icon: <BarChart3 size={28} />,    title: "AI Dashboard Development",                  desc: "Real-time dashboards with powerful analytics, reporting, and data visualization." },
    { icon: <Settings size={28} />,     title: "Workflow Automation Systems",                desc: "Automate business processes, approvals, notifications, and internal workflows." },
    { icon: <Bot size={28} />,          title: "AI Chatbot & Virtual Assistant Integration", desc: "Integrate smart AI assistants to enhance customer support and automate interactions." },
    { icon: <Database size={28} />,     title: "CRM & ERP Web Applications",                desc: "Custom CRM and ERP solutions to manage your operations, customers, and teams." },
    { icon: <Users size={28} />,        title: "Customer Portals & Admin Systems",           desc: "Secure portals with role-based access for customers, vendors, and internal teams." },
    { icon: <FileBarChart size={28} />, title: "Data Analytics & Reporting Platforms",       desc: "Advanced analytics, KPI tracking, and automated reporting for smarter decisions." },
    { icon: <Globe size={28} />,        title: "API & Third-Party Integrations",             desc: "Seamless integration with payment gateways, CRMs, cloud services, and external APIs." },
  ];

  const whyChoose = [
    { icon: <Layers size={22} />,  title: "Scalable Architecture",      desc: "Built for performance, flexibility, and long-term growth.",                           colorClass: "wc-cyan"   },
    { icon: <Cpu size={22} />,     title: "AI & Automation Expertise",  desc: "Smart solutions that automate and optimize business processes.",                      colorClass: "wc-purple" },
    { icon: <Layout size={22} />,  title: "Modern UI/UX Design",        desc: "Clean, intuitive, and user-focused interfaces that engage.",                          colorClass: "wc-blue"   },
    { icon: <Shield size={22} />,  title: "Secure & High Performance",  desc: "Security-first development with fast, reliable, and optimized applications.",         colorClass: "wc-green"  },
    { icon: <Rocket size={22} />,  title: "Business-Focused Solutions", desc: "Solutions designed around your goals, workflows, and real business needs.",           colorClass: "wc-orange" },
  ];

  const industries = [
    { icon: <ShoppingCart size={28} />,  label: "Ecommerce"             },
    { icon: <HeartPulse size={28} />,    label: "Healthcare"            },
    { icon: <BarChart3 size={28} />,     label: "Finance"               },
    { icon: <GraduationCap size={28} />, label: "Education"             },
    { icon: <Truck size={28} />,         label: "Logistics"             },
    { icon: <Building2 size={28} />,     label: "Real Estate"           },
    { icon: <Megaphone size={28} />,     label: "Marketing Agencies"    },
    { icon: <Rocket size={28} />,        label: "SaaS Startups"         },
    { icon: <Briefcase size={28} />,     label: "Service Businesses"    },
    { icon: <Globe size={28} />,         label: "Enterprise Operations" },
  ];

  const processSteps = [
    { step: "01", icon: <Search size={26} />,   title: "Discovery & Analysis",    desc: "We understand your business, users, and requirements." },
    { step: "02", icon: <Layout size={26} />,   title: "Planning & Architecture", desc: "We design scalable architecture and plan the perfect solution." },
    { step: "03", icon: <Sparkles size={26} />, title: "UI/UX Design",            desc: "We create modern, intuitive designs, focused on UX." },
    { step: "04", icon: <Code2 size={26} />,    title: "Development",             desc: "We build your application using latest technologies." },
    { step: "05", icon: <Activity size={26} />, title: "Testing & Optimization",  desc: "We test for performance, security, and functionality." },
    { step: "06", icon: <Rocket size={26} />,   title: "Deployment & Support",    desc: "We deploy, monitor, and provide ongoing support." },
  ];

  const aiFeatures = [
    { icon: <Bot size={28} />,          label: "AI Chatbots"                   },
    { icon: <RefreshCw size={28} />,    label: "Workflow Automation"           },
    { icon: <Bell size={28} />,         label: "Smart Notifications"           },
    { icon: <Activity size={28} />,     label: "Predictive Analytics"          },
    { icon: <Sparkles size={28} />,     label: "AI Content Assistance"         },
    { icon: <Cpu size={28} />,          label: "Recommendation Systems"        },
    { icon: <Target size={28} />,       label: "Lead Qualification Systems"    },
    { icon: <FileBarChart size={28} />, label: "Automated Reporting"           },
    { icon: <Users size={28} />,        label: "CRM Automation"                },
    { icon: <UserCheck size={28} />,    label: "User Behavior Tracking"        },
    { icon: <BarChart3 size={28} />,    label: "Data Visualization Dashboards" },
    { icon: <Search size={28} />,       label: "AI Search & Filtering"         },
  ];

  const technologies = [
    { name: "React",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",                              color: "#61dafb" },
    { name: "Next.js",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",                            color: "#000000" },
    { name: "Node.js",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",                            color: "#339933" },
    { name: "Laravel",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",                          color: "#ff2d20" },
    { name: "Python",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",                            color: "#3776ab" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",                    color: "#336791" },
    { name: "MongoDB",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",                          color: "#47a248" },
    { name: "AWS",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", color: "#ff9900" },
    { name: "Firebase",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",                        color: "#ffca28" },
    { name: "Docker",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",                            color: "#2496ed" },
    { name: "REST APIs",  icon: null,                                                                                                               color: "#002d62" },
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

      {/* ═══ HERO — UNCHANGED ═══ */}
      <section className="aiwa__hero_section">
        <div className="aiwa__container">
          <Breadcrumb />
          <span className="aiwa__hero_badge_wrapper">
            <span className="aiwa__hero_badge_dot"></span>
            <span className="aiwa__hero_badge_text">AI Web Application Development Agency</span>
          </span>
          <h1 className="aiwa__heading">
            AI Web Application Development for{" "}
            <span className="text_light_blue">UK &amp; USA Businesses</span>
          </h1>
          <p className="aiwa__hero_text_white">
            ZonzocTech builds custom AI-powered web applications. From intelligent
            dashboards to GPT-powered tools — we scale your business growth.
          </p>
          <div className="aiwa__hero_actions">
            <a href="/contact" className="aiwa__btn_primary">Get Free Consultation</a>
            <a href="https://zonzoc-tech.netlify.app/" target="_blank" rel="noopener noreferrer" className="aiwa__btn_secondary">View Portfolio →</a>
          </div>
          <p className="aiwa__hero_trust_text">Trusted by 120+ businesses across the UK, USA &amp; Europe</p>
        </div>
      </section>

      {/* ═══ SECTION 1 — What Is AI Web App Dev? ═══ */}
      <section className="aiwa-intro-section">
        <div className="aiwa__container">
          <div className="aiwa-intro-layout">
            <div className="aiwa-intro-visual">
              <div className="aiwa-intro-visual-inner">
                <div className="aiwa-visual-badge">AI</div>
                <div className="aiwa-visual-code">
                  <span className="aiwa-code-line l1">&lt;AI /&gt;</span>
                  <span className="aiwa-code-line l2">{"{ automate }"}</span>
                  <span className="aiwa-code-line l3">{"[ predict ]"}</span>
                  <span className="aiwa-code-line l4">"personalize"</span>
                </div>
              </div>
            </div>
            <div className="aiwa-intro-text">
              <span className="aiwa-intro-label">What Is AI Web Application Development?</span>
              <h2 className="aiwa-intro-title">
                Smarter Applications for{" "}
                <span className="aiwa-text-blue">Modern Businesses</span>
              </h2>
              <p className="aiwa-intro-desc">
                AI web application development combines powerful web technologies with
                artificial intelligence and automation to create smart, data-driven
                applications that improve efficiency and user experiences.
              </p>
            </div>
            <div className="aiwa-intro-checklist">
              {aiChecklist.map((item, i) => (
                <div key={i} className="aiwa-check-item">
                  <CheckCircle2 size={17} className="aiwa-check-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2 — Services 4-column grid ═══ */}
      <section className="aiwa-services-section">
        <div className="aiwa__container">
          <div className="aiwa-section-head">
            <span className="aiwa-pill">Our Services</span>
            <h2 className="aiwa-section-title">AI Web Application Development Services</h2>
          </div>
          <div className="aiwa-services-grid">
            {services.map((svc, i) => (
              <div key={i} className="aiwa-service-card">
                <div className="aiwa-service-icon">{svc.icon}</div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
              </div>
            ))}
          </div>
          <div className="aiwa-explore-link"><a href="/services">Explore All Services →</a></div>
        </div>
      </section>

      {/* ═══ SECTION 3 — Why Businesses Choose Us (dark) ═══ */}
      <section className="aiwa-why-section">
        <div className="aiwa__container">
          <div className="aiwa-section-head">
            <span className="aiwa-pill-white">Why Businesses Choose ZonzocTech</span>
          </div>
          <div className="aiwa-why-grid">
            {whyChoose.map((item, i) => (
              <div key={i} className={`aiwa-why-card ${item.colorClass}`}>
                <div className="aiwa-why-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4 — Industries ═══ */}
      <section className="aiwa-industries-section">
        <div className="aiwa__container">
          <div className="aiwa-section-head">
            <span className="aiwa-pill">Industries We Support</span>
            <h2 className="aiwa-section-title">Solutions for Every Industry</h2>
          </div>
          <div className="aiwa-industries-grid">
            {industries.map((ind, i) => (
              <div key={i} className="aiwa-industry-item">
                <div className="aiwa-industry-icon">{ind.icon}</div>
                <span className="aiwa-industry-label">{ind.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5 — Process (6 steps) ═══ */}
      <section className="aiwa-process-section">
        <div className="aiwa__container">
          <div className="aiwa-section-head">
            <span className="aiwa-pill">Our Development Process</span>
            <h2 className="aiwa-section-title">Our AI Web Application Development Process</h2>
          </div>
          <div className="aiwa-process-row">
            {processSteps.map((step, i) => (
              <div key={i} className="aiwa-process-col">
                {i < processSteps.length - 1 && <div className="aiwa-process-connector" />}
                <div className="aiwa-process-circle">{step.icon}</div>
                <span className="aiwa-process-num">{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6 — AI Features ═══ */}
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

      {/* ═══ SECTION 7 — Technologies with icons ═══ */}
      <section className="aiwa-tech-section">
        <div className="aiwa__container">
          <div className="aiwa-section-head">
            <span className="aiwa-pill">Technologies We Work With</span>
          </div>
          <div className="aiwa-tech-row">
            {technologies.map((tech, i) => (
              <div key={i} className="aiwa-tech-pill">
                <div className="aiwa-tech-icon-wrap">
                  {tech.icon ? (
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="aiwa-tech-img"
                      onError={e => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <span
                    className="aiwa-tech-fallback"
                    style={{ background: tech.color, display: tech.icon ? 'none' : 'flex' }}
                  >
                    {tech.name.charAt(0)}
                  </span>
                </div>
                <span className="aiwa-tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 8 — FAQ 2-column ═══ */}
      <section className="aiwa-faq-section">
        <div className="aiwa__container">
          <div className="aiwa-section-head">
            <h2 className="aiwa-section-title">Frequently Asked Questions</h2>
          </div>
          <div className="aiwa-faq-2col">
            {faqs.map((faq, i) => (
              <div key={i} className={`aiwa-faq-item ${activeFaq === i ? "active" : ""}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                <div className="aiwa-faq-q">
                  <span>{faq.question}</span>
                  {activeFaq === i ? <Minus size={17} /> : <Plus size={17} />}
                </div>
                {activeFaq === i && (
                  <div className="aiwa-faq-a"><p>{faq.answer}</p></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 9 — CTA with form ═══ */}
      <section className="aiwa-cta-section">
        <div className="aiwa__container">
          <div className="aiwa-cta-inner">
            <div className="aiwa-cta-left">
              <span className="aiwa-cta-top-label">Let's Build Something Amazing</span>
              <h2 className="aiwa-cta-big-title">
                Ready to Build Your{" "}
                <span className="aiwa-text-blue">AI-Powered Web Application?</span>
              </h2>
              <p className="aiwa-cta-desc">
                Let's create a powerful, scalable, and intelligent web application that drives
                automation, improves efficiency, and grows your business.
              </p>
              <div className="aiwa-cta-badges">
                <div className="aiwa-cta-badge">
                  <CheckCircle2 size={16} className="aiwa-badge-icon" />
                  <div><strong>Quick Response</strong><span>We respond within 1-3 business hours</span></div>
                </div>
                <div className="aiwa-cta-badge">
                  <CheckCircle2 size={16} className="aiwa-badge-icon" />
                  <div><strong>No Obligation</strong><span>Free consultation, no commitment</span></div>
                </div>
                <div className="aiwa-cta-badge">
                  <CheckCircle2 size={16} className="aiwa-badge-icon" />
                  <div><strong>100% Focused</strong><span>We focus on your success</span></div>
                </div>
              </div>
            </div>
            <div className="aiwa-cta-right">
              <div className="aiwa-cta-form">
                <h3>Get Free Consultation</h3>
                <div className="aiwa-form-row">
                  <input type="text"  placeholder="Your Name*"     className="aiwa-form-input" />
                  <input type="email" placeholder="Email Address*" className="aiwa-form-input" />
                </div>
                <input type="tel" placeholder="Phone Number*" className="aiwa-form-input" />
                <select className="aiwa-form-input">
                  <option value="">Select a Service</option>
                  <option>Custom SaaS Development</option>
                  <option>AI Dashboard</option>
                  <option>Workflow Automation</option>
                  <option>AI Chatbot Integration</option>
                  <option>CRM / ERP Development</option>
                </select>
                <button className="aiwa-form-btn">Send Message →</button>
                <p className="aiwa-form-note">🔒 We respect your privacy. No spam, ever.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIWebAppDev;
