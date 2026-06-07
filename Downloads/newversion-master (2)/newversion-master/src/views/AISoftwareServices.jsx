'use client';

import React, { useState } from "react";
import {
  Bot, Brain, Workflow, BarChart4, Database, Cog,
  CheckCircle2, Layers, Plug, RefreshCw, Rocket,
  Building2, ShoppingCart, HeartPulse, Briefcase,
  GraduationCap, Truck, Megaphone, Globe, BarChart3,
  Search, Bell, Target, FileBarChart, UserCheck, Cpu,
  Sparkles, Activity, Shield, Code2, Layout,
  Plus, Minus, Zap, Settings
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import "../styles/AISoftwareServices.css";

/* ─── DATA ──────────────────────────────────────────── */

const stats = [
  { number: "150+",  label: "Projects Delivered" },
  { number: "120+",  label: "Happy Clients"       },
  { number: "10+",   label: "Years Experience"    },
  { number: "4.9★",  label: "Client Rating"       },
  { number: "100%",  label: "Secure Solutions"    },
  { number: "24/7",  label: "Support"             },
];

const aiChecklist = [
  "Automate repetitive business tasks",
  "Process and analyze large datasets",
  "Improve operational efficiency",
  "Generate intelligent insights",
  "Enhance customer experiences",
  "Support scalable automation workflows",
];

const services = [
  { icon: <Bot size={28} />,       title: "AI Chatbot Development",           desc: "Build intelligent chatbots and virtual assistants for customer support, lead generation, and automation." },
  { icon: <Brain size={28} />,     title: "OpenAI & GPT Integration",         desc: "Integrate OpenAI, ChatGPT, and AI APIs into your existing systems and workflows." },
  { icon: <Workflow size={28} />,  title: "Business Process Automation",      desc: "Automate repetitive tasks, approvals, notifications, reporting systems, and operational processes." },
  { icon: <BarChart4 size={28} />, title: "AI Analytics & Data Intelligence", desc: "Transform raw data into real-time insights, dashboards, reports, and predictive analytics." },
  { icon: <Database size={28} />,  title: "CRM & ERP AI Integration",         desc: "Integrate AI-powered automation and smart workflows into CRM, ERP, and internal management systems." },
  { icon: <Cog size={28} />,       title: "Custom Enterprise AI Systems",     desc: "Develop scalable AI software tailored to your business operations and long-term goals." },
  { icon: <Zap size={28} />,       title: "AI Workflow Automation",           desc: "Create automated systems to streamline communication, task execution, and operational processes." },
  { icon: <Plug size={28} />,      title: "AI Integration & API Development", desc: "Integrate third-party platforms, APIs, cloud services, and payment gateways into your ecosystem." },
];

const whyChoose = [
  { icon: <Rocket size={22} />,    title: "Business-Focused AI Solutions",         desc: "We build solutions around your workflows, challenges, and business growth objectives.",        color: "wc-blue"   },
  { icon: <Layers size={22} />,    title: "Scalable & Future-Ready Architecture",  desc: "Flexible and scalable systems designed for growth and expansion.",                             color: "wc-purple" },
  { icon: <Brain size={22} />,     title: "AI & Automation Expertise",             desc: "We combine AI technologies and automation to deliver smart solutions.",                         color: "wc-cyan"   },
  { icon: <Shield size={22} />,    title: "Secure & High Performance",             desc: "Built with security, speed, and reliability to support enterprise-level operations.",            color: "wc-green"  },
  { icon: <Plug size={22} />,      title: "Seamless Integrations",                 desc: "We integrate AI tools, APIs, CRMs, cloud platforms, and automation systems.",                  color: "wc-orange" },
  { icon: <RefreshCw size={22} />, title: "Dedicated Support & Maintenance",       desc: "Ongoing support, updates, and optimization to keep your systems running.",                     color: "wc-teal"   },
];

const industries = [
  { icon: <ShoppingCart size={26} />,  label: "Ecommerce"             },
  { icon: <HeartPulse size={26} />,    label: "Healthcare"            },
  { icon: <BarChart3 size={26} />,     label: "Finance"               },
  { icon: <Building2 size={26} />,     label: "Real Estate"           },
  { icon: <Truck size={26} />,         label: "Logistics"             },
  { icon: <GraduationCap size={26} />, label: "Education"             },
  { icon: <Rocket size={26} />,        label: "SaaS Companies"        },
  { icon: <Megaphone size={26} />,     label: "Marketing Agencies"    },
  { icon: <Globe size={26} />,         label: "Enterprise Operations" },
  { icon: <Briefcase size={26} />,     label: "Service Businesses"    },
];

const techGroups = [
  {
    category: "AI & Machine Learning",
    items: [
      { name: "OpenAI APIs",  icon: null,                                                                                                       color: "#10a37f" },
      { name: "LangChain",    icon: null,                                                                                                       color: "#1c3c59" },
      { name: "Python",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",                     color: "#3776ab" },
      { name: "TensorFlow",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",             color: "#ff6f00" },
      { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",           color: "#f7931e" },
    ],
  },
  {
    category: "Backend & Cloud",
    items: [
      { name: "Node.js",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",                       color: "#339933" },
      { name: "Laravel",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",                     color: "#ff2d20" },
      { name: "AWS",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", color: "#ff9900" },
      { name: "Firebase",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",                   color: "#ffca28" },
      { name: "GraphQL",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",                        color: "#e10098" },
    ],
  },
  {
    category: "Automation & APIs",
    items: [
      { name: "Zapier",          icon: null,                                                                                                     color: "#ff4a00" },
      { name: "Make",            icon: null,                                                                                                     color: "#6d00cc" },
      { name: "Webhooks",        icon: null,                                                                                                     color: "#003070" },
      { name: "REST APIs",       icon: null,                                                                                                     color: "#003070" },
      { name: "Docker",          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",                  color: "#2496ed" },
    ],
  },
];

const processSteps = [
  { step: "01", icon: <Search size={26} />,   title: "Business Analysis & AI Strategy",  desc: "We identify automation opportunities, bottlenecks, and AI integration possibilities." },
  { step: "02", icon: <Layout size={26} />,   title: "Solution Architecture & Planning", desc: "We design scalable software structures, workflows, integrations, and technical roadmaps." },
  { step: "03", icon: <Sparkles size={26} />, title: "UI/UX & System Design",            desc: "Modern interface design focused on usability and seamless workflows." },
  { step: "04", icon: <Code2 size={26} />,    title: "Development & AI Integration",     desc: "Custom software development combined with AI models, automation systems, and APIs." },
  { step: "05", icon: <Activity size={26} />, title: "Testing & Optimization",           desc: "Security testing, workflow validation, AI optimization, and performance monitoring." },
  { step: "06", icon: <Rocket size={26} />,   title: "Deployment & Ongoing Support",     desc: "Deployment, monitoring, updates, AI improvements, and long-term technical support." },
];

const aiFeatures = [
  { icon: <Bot size={26} />,          label: "AI Chatbots"                   },
  { icon: <Zap size={26} />,          label: "GPT-Powered Automation"        },
  { icon: <Bell size={26} />,         label: "Smart Notifications"           },
  { icon: <Workflow size={26} />,     label: "Workflow Automation"           },
  { icon: <Activity size={26} />,     label: "Predictive Analytics"          },
  { icon: <Search size={26} />,       label: "AI Search Systems"             },
  { icon: <Target size={26} />,       label: "Lead Qualification Systems"    },
  { icon: <FileBarChart size={26} />, label: "Automated Reporting"           },
  { icon: <Database size={26} />,     label: "CRM Automation"                },
  { icon: <Sparkles size={26} />,     label: "AI Content Assistance"         },
  { icon: <UserCheck size={26} />,    label: "User Behavior Tracking"        },
  { icon: <BarChart3 size={26} />,    label: "Data Visualization Dashboards" },
];

const faqs = [
  { question: "How much does AI software development cost in the USA, UK, or UAE?",  answer: "Pricing depends on the software scope, AI integrations, automation complexity, and technical requirements. Contact us for a free tailored quote with no hidden fees." },
  { question: "Can you integrate OpenAI or ChatGPT into existing systems?",           answer: "Yes. We integrate OpenAI APIs, ChatGPT, automation tools, and AI workflows into existing software platforms with minimal disruption to your operations." },
  { question: "Do you develop enterprise AI software solutions?",                     answer: "Yes. We build scalable AI-powered enterprise systems designed for automation, analytics, integrations, and operational efficiency at any scale." },
  { question: "Can AI automate business processes?",                                  answer: "Yes. AI software can automate repetitive workflows, customer interactions, reporting systems, and operational tasks — freeing your team for high-value work." },
  { question: "How long does it take to build custom AI software?",                   answer: "A simple chatbot or automation tool can be delivered in 4–8 weeks. Complex multi-system AI platforms typically take 3–5 months with clear milestones." },
  { question: "Do you provide ongoing support and maintenance?",                      answer: "Yes. We provide updates, monitoring, optimization, AI model improvements, and long-term technical support as your business needs evolve." },
];

/* ─── COMPONENT ─────────────────────────────────────── */
const AISoftwareServices = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <div className="aiss__wrapper">
      <Navbar />

      {/* ═══════════════════════════════════════
          HERO — UNCHANGED
      ═══════════════════════════════════════ */}
      <section className="aiss__hero">
        <div className="aiss__hero_gradient"></div>
        <div className="aiss__hero_container">
          <Breadcrumb />
          <span className="aiss__hero_badge">
            AI Software Development Company for UK &amp; USA Businesses
          </span>
          <h1 className="aiss__hero_title">
            Custom AI Software Development That Automates Operations and{" "}
            <span className="aiss__hero_title_accent">Accelerates Growth</span>
          </h1>
          <p className="aiss__hero_text">
            We design and build intelligent AI software solutions including custom chatbots,
            workflow automation systems, GPT-powered tools, and business integrations that
            reduce manual work, improve decision-making, and scale with your business.
          </p>
          <div className="aiss-hero-actions">
            <a href="/contact" className="aiss-btn-primary">Get Free AI Consultation →</a>
            <a href="/case-studies" className="aiss-btn-secondary">View Our Works →</a>
          </div>
          <p className="aiss__hero_trust">Trusted by 120+ businesses across the UK, USA &amp; Europe</p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          STATS BAR
      ═══════════════════════════════════════ */}
      <section className="aiss-stats-section">
        <div className="aiss-stats-inner">
          {stats.map((s, i) => (
            <div key={i} className="aiss-stat-item">
              <span className="aiss-stat-num">{s.number}</span>
              <span className="aiss-stat-lbl">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 1 — What Is AI Software Dev?
      ═══════════════════════════════════════ */}
      <section className="aiss-intro-section">
        <div className="aiss-container">
          <div className="aiss-intro-layout">

            {/* Left — illustration */}
            <div className="aiss-intro-visual">
              <div className="aiss-visual-inner">
                <div className="aiss-visual-brain">
                  <Brain size={48} className="aiss-brain-icon" />
                </div>
                <div className="aiss-visual-nodes">
                  <div className="aiss-node n1"><Bot size={18} /></div>
                  <div className="aiss-node n2"><Zap size={18} /></div>
                  <div className="aiss-node n3"><Database size={18} /></div>
                  <div className="aiss-node n4"><BarChart4 size={18} /></div>
                </div>
                <div className="aiss-visual-code">
                  <span className="aiss-code-line cl1">&lt;AI /&gt;</span>
                  <span className="aiss-code-line cl2">{"{ automate }"}</span>
                  <span className="aiss-code-line cl3">{"[ predict ]"}</span>
                </div>
              </div>
            </div>

            {/* Middle — text */}
            <div className="aiss-intro-text">
              <span className="aiss-intro-tag">What Is AI Software Development?</span>
              <h2 className="aiss-intro-title">
                Smarter Software for{" "}
                <span className="aiss-blue">Modern Businesses</span>
              </h2>
              <p className="aiss-intro-desc">
                Custom AI software development involves building intelligent systems
                tailored to automate business operations, improve decision-making,
                reduce manual workloads, and integrate seamlessly with existing
                platforms and workflows.
              </p>
            </div>

            {/* Right — checklist */}
            <div className="aiss-intro-checklist">
              {aiChecklist.map((item, i) => (
                <div key={i} className="aiss-check-row">
                  <CheckCircle2 size={17} className="aiss-check-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 2 — Services 4-column grid
      ═══════════════════════════════════════ */}
      <section className="aiss-services-section">
        <div className="aiss-container">
          <div className="aiss-section-head">
            <span className="aiss-pill">Our AI Software Development Services</span>
            <h2 className="aiss-section-title">
              Intelligent Solutions. Smarter Operations. Better Results.
            </h2>
          </div>
          <div className="aiss-services-grid">
            {services.map((svc, i) => (
              <div key={i} className="aiss-service-card">
                <div className="aiss-service-icon">{svc.icon}</div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 3 — Why Businesses Choose Us (dark)
      ═══════════════════════════════════════ */}
      <section className="aiss-why-section">
        <div className="aiss-container">
          <div className="aiss-section-head">
            <span className="aiss-pill-white">Why Businesses Choose ZonzocTech</span>
          </div>
          <div className="aiss-why-grid">
            {whyChoose.map((item, i) => (
              <div key={i} className={`aiss-why-card ${item.color}`}>
                <div className="aiss-why-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 4 — Industries + Technologies (split)
      ═══════════════════════════════════════ */}
      <section className="aiss-split-section">
        <div className="aiss-container">
          <div className="aiss-split-layout">

            {/* Left — Industries */}
            <div className="aiss-split-col">
              <span className="aiss-split-label">Industries We Support</span>
              <div className="aiss-industry-grid">
                {industries.map((ind, i) => (
                  <div key={i} className="aiss-industry-item">
                    <div className="aiss-industry-icon">{ind.icon}</div>
                    <span>{ind.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="aiss-split-divider" />

            {/* Right — Technologies with icons */}
            <div className="aiss-split-col">
              <span className="aiss-split-label">Technologies We Use</span>
              <div className="aiss-tech-groups">
                {techGroups.map((group, i) => (
                  <div key={i} className="aiss-tech-group">
                    <h4>{group.category}</h4>
                    <div className="aiss-tech-pills">
                      {group.items.map((tech, j) => (
                        <div key={j} className="aiss-tech-pill">
                          <div className="aiss-tech-icon-wrap">
                            {tech.icon ? (
                              <img
                                src={tech.icon}
                                alt={tech.name}
                                className="aiss-tech-img"
                                onError={e => {
                                  e.target.style.display = 'none';
                                  e.target.nextSibling.style.display = 'flex';
                                }}
                              />
                            ) : null}
                            <span
                              className="aiss-tech-fallback"
                              style={{ background: tech.color, display: tech.icon ? 'none' : 'flex' }}
                            >
                              {tech.name.charAt(0)}
                            </span>
                          </div>
                          <span className="aiss-tech-name">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 5 — Process (6 steps)
      ═══════════════════════════════════════ */}
      <section className="aiss-process-section">
        <div className="aiss-container">
          <div className="aiss-section-head">
            <span className="aiss-pill">Our AI Software Development Process</span>
            <h2 className="aiss-section-title">Our AI Software Development Process</h2>
          </div>
          <div className="aiss-process-row">
            {processSteps.map((step, i) => (
              <div key={i} className="aiss-process-col">
                {i < processSteps.length - 1 && <div className="aiss-process-connector" />}
                <div className="aiss-process-circle">{step.icon}</div>
                <span className="aiss-process-num">{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 6 — AI Features icon grid
      ═══════════════════════════════════════ */}
      <section className="aiss-features-section">
        <div className="aiss-container">
          <div className="aiss-section-head">
            <span className="aiss-pill">AI Features We Can Integrate</span>
          </div>
          <div className="aiss-features-grid">
            {aiFeatures.map((f, i) => (
              <div key={i} className="aiss-feature-item">
                <div className="aiss-feature-icon">{f.icon}</div>
                <span className="aiss-feature-label">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 7 — FAQ 2-column
      ═══════════════════════════════════════ */}
      <section className="aiss-faq-section">
        <div className="aiss-container">
          <div className="aiss-section-head">
            <h2 className="aiss-section-title">Frequently Asked Questions</h2>
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
                {activeFaq === i && (
                  <div className="aiss-faq-a"><p>{faq.answer}</p></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 8 — CTA (dark, with AI visual)
      ═══════════════════════════════════════ */}
      <section className="aiss-cta-section">
        <div className="aiss-container">
          <div className="aiss-cta-inner">

            {/* Left */}
            <div className="aiss-cta-left">
              <span className="aiss-cta-tag">Let's Build Something Amazing</span>
              <h2 className="aiss-cta-title">
                Ready to Automate and{" "}
                <span className="aiss-cta-blue">Scale Your Business with AI?</span>
              </h2>
              <p className="aiss-cta-desc">
                Let's build intelligent AI software solutions that automate operations,
                improve efficiency, and support long-term business growth.
              </p>
              <div className="aiss-cta-actions">
                <a href="/contact" className="aiss-btn-primary">Get Free Consultation →</a>
                <a href="/case-studies" className="aiss-btn-secondary">View Our Works →</a>
              </div>
              <div className="aiss-cta-trust">
                <CheckCircle2 size={15} className="aiss-trust-icon" />
                <span>We usually respond within 1–3 business hours. No commitment.</span>
              </div>
            </div>

            {/* Right — AI visual */}
            <div className="aiss-cta-visual">
              <div className="aiss-cta-visual-inner">
                <div className="aiss-cta-brain-wrap">
                  <Brain size={80} className="aiss-cta-brain" />
                </div>
                <div className="aiss-cta-stats">
                  <div className="aiss-cta-stat">
                    <strong>150+</strong><span>Projects</span>
                  </div>
                  <div className="aiss-cta-stat">
                    <strong>10+</strong><span>Years Exp.</span>
                  </div>
                  <div className="aiss-cta-stat">
                    <strong>24/7</strong><span>Support</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AISoftwareServices;
