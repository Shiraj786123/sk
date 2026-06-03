'use client';
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/AISoftwareServices.css";
import Breadcrumb from "../components/Breadcrumb";
import {
  Trash2,
  Users,
  BarChart3,
  ShieldCheck,
  Bot,
  Brain,
  Workflow,
  BarChart4,
  Database,
  Cog,
  CheckCircle,
  Layers,
  Plug,
  Wallet,
  RefreshCw,
  Building2,
  ShoppingCart,
  Network,
  Rocket
} from "lucide-react";

const technologies = [
  {
    category: "AI & Machine Learning",
    items: ["OpenAI GPT-4", "Claude API", "Google Gemini", "LangChain", "PyTorch"]
  },
  {
    category: "Automation & APIs",
    items: ["Zapier", "Make (Integromat)", "REST APIs", "Webhooks", "GraphQL"]
  },
  {
    category: "Backend & Cloud",
    items: ["Node.js", "Python FastAPI", "AWS", "Docker", "PostgreSQL"]
  }
];

const AISoftwareServices = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const stats = [
    { number: "150+", label: "Projects Delivered" },
    { number: "120+", label: "Clients Served" },
    { number: "10+", label: "Years Experience" },
    { number: "4.9★", label: "Client Rating" },
  ];

  const businessCase = [
    { title: "Replace Manual Repetitive Work", description: "Every hour your team spends on repetitive tasks — data entry, report generation, email responses, scheduling — is an hour not spent on high-value work. Custom AI software automates these tasks completely, freeing your team to focus on what only humans can do." },
    { title: "Scale Without Hiring", description: "AI software handles growing workloads without growing headcount. As your business scales, your AI systems scale with it — processing more data, handling more queries and managing more tasks without additional staff costs." },
    { title: "Faster, Smarter Decisions", description: "Custom AI tools analyse your business data in real time — surfacing insights, flagging anomalies and recommending actions faster than any manual process. Better information leads to better decisions." },
    { title: "Competitive Advantage", description: "Businesses that automate intelligently move faster, serve customers better and operate more efficiently than competitors still relying on manual processes. Custom AI software is increasingly the difference between market leaders and those falling behind." },
  ];

  const services = [
    { title: "AI Chatbot Development UK", description: "We build custom AI chatbots for businesses across the UK and USA — intelligent conversational assistants that handle customer enquiries, qualify leads, answer product questions, book appointments and escalate complex issues to human agents. Our chatbots are trained on your specific business data and integrated directly into your website, app or internal tools." },
    { title: "GPT Integration & Custom GPT Tools", description: "We integrate OpenAI GPT, Claude, Gemini and other large language models into your business software — building custom GPT-powered tools for content generation, document analysis, customer support, internal knowledge bases and intelligent search. We go beyond simple API calls to build fully functional, production-ready GPT applications." },
    { title: "Business Process Automation", description: "We build AI-powered automation systems that eliminate manual, repetitive business processes — from data collection and processing to report generation, invoice handling, inventory management and customer communication workflows. Our automation solutions integrate with your existing tools and deliver measurable time and cost savings from day one." },
    { title: "Workflow Automation Software", description: "We design and build custom workflow automation software that connects your business tools, automates handoffs between teams and eliminates the manual coordination that slows operations down. Built specifically around how your business works — not a generic template." },
    { title: "AI-Powered Data Analysis Tools", description: "We build custom data analysis and reporting tools that use AI to process large datasets, identify patterns, generate insights and surface the business intelligence your team needs — automatically and in real time. No more manual spreadsheets or waiting for weekly reports." },
    { title: "CRM & System AI Integration", description: "We integrate AI capabilities into your existing CRM, ERP and business software — adding intelligent lead scoring, automated follow-up sequences, predictive analytics and smart data enrichment without requiring a full system replacement." },
    { title: "AI Document Processing", description: "We build AI systems that automatically read, extract, classify and process information from documents — invoices, contracts, forms, reports and emails — eliminating manual data entry and accelerating document-heavy workflows." },
    { title: "Custom AI API Development", description: "We build secure, scalable AI APIs that power your products and platforms — enabling other systems to access AI capabilities, process requests and return intelligent responses reliably at scale." },
  ];

  const whyChoose = [
    { title: "✅ Business-First AI Development", description: "We start every project by understanding your business problem — not by recommending the latest AI technology. We only build AI solutions where they create genuine value and measurable ROI for your business." },
    { title: "✅ Full-Stack AI Engineering", description: "We cover the complete AI development stack — from model selection and training to API development, frontend interfaces and system integrations. One team, full ownership, no gaps." },
    { title: "✅ Seamless Integration", description: "Our AI software integrates with your existing tools and systems — CRMs, ERPs, communication platforms, databases and third-party APIs — without disrupting your current operations." },
    { title: "✅ Affordable for UK Small Business", description: "As an offshore AI software development company we offer the technical expertise of a premium UK studio at a fraction of the cost — making custom AI software accessible to small and medium businesses across the UK and USA." },
    { title: "✅ Ongoing Support & Improvement", description: "AI software improves with use and requires ongoing monitoring and refinement. We provide long-term support — updating models, improving accuracy and adding features as your business needs evolve." },
  ];

  const processSteps = [
    { number: "01", title: "Business Analysis & AI Scoping", description: "We analyse your business workflows, identify the highest-value automation opportunities and define exactly what AI software will and will not do — setting realistic expectations before any development begins." },
    { number: "02", title: "Solution Design & Architecture", description: "We design the AI system architecture — model selection, data flows, integration points, user interfaces and security controls — creating a clear technical blueprint before writing a single line of code." },
    { number: "03", title: "Development & Integration", description: "We build your AI software in sprints with regular demos and check-ins — integrating with your existing systems and testing real-world scenarios throughout the development process." },
    { number: "04", title: "Testing & Accuracy Optimisation", description: "We test AI software extensively for accuracy, edge cases, security and real-world performance — refining models and logic until the system performs reliably in production." },
    { number: "05", title: "Deployment & Ongoing Support", description: "We deploy your AI software, provide full documentation and offer ongoing monitoring, model updates and feature development as your business and data evolve." },
  ];

  const whoFor = [
    { title: "✓ Small & Medium Businesses UK & USA", description: "Who want to automate manual processes, reduce operational costs and compete more effectively — without enterprise-level AI budgets." },
    { title: "✓ Customer-Facing Businesses", description: "Who need AI chatbots and virtual assistants to handle customer enquiries, qualify leads and book appointments — around the clock without additional staff." },
    { title: "✓ Data-Heavy Operations", description: "That process large volumes of documents, forms, reports or customer data manually — and need intelligent automation to handle it faster and more accurately." },
    { title: "✓ Businesses Using Multiple Disconnected Tools", description: "Who need AI to connect their systems, automate handoffs and create a unified intelligent workflow — rather than managing everything manually." },
    { title: "✓ Companies Building AI Products", description: "Startups and established businesses building AI-powered software products that need an experienced technical partner to design and develop the AI layer." },
  ];

  const faqs = [
    { question: "How much does custom AI software development cost in the UK?", answer: "The cost depends on the complexity of the AI system, integrations required and development timeline. As an offshore AI software development company we are significantly more affordable than UK studios — without any compromise on quality or communication. Contact us for a free consultation and quote." },
    { question: "How long does it take to build custom AI software?", answer: "A simple AI chatbot or automation tool can be delivered in 4 to 8 weeks. A complex multi-system AI automation platform typically takes 3 to 5 months. We provide a clear timeline and milestones before any work begins." },
    { question: "Can you build AI chatbots for UK businesses?", answer: "Yes. AI chatbot development is one of our most popular services for UK and USA businesses. We build custom chatbots trained on your specific business data — integrated into your website, CRM or internal tools." },
    { question: "Can you integrate GPT into my existing software?", answer: "Yes. GPT and LLM integration is a core part of what we do. We integrate OpenAI GPT, Claude and other models into existing business software — adding intelligent content generation, smart search, automated responses and AI-driven workflows." },
    { question: "Is custom AI software secure?", answer: "Yes. Security is built into every stage of our development process — including data handling, access control, API security and deployment configuration. We follow best practices for AI system security and data privacy compliance." },
    { question: "Do you offer AI automation for small businesses?", answer: "Yes. We specialise in making custom AI automation accessible and affordable for small and medium businesses across the UK and USA — building practical, high-impact solutions that deliver fast ROI without enterprise-level budgets." },
  ];
  const audience = [
    {
      icon: Building2,
      title: "Small & Medium Businesses",
      desc: "Looking to reduce manual work and scale operations efficiently."
    },
    {
      icon: ShoppingCart,
      title: "Customer-Facing Companies",
      desc: "Need AI chatbots and automation for sales and support."
    },
    {
      icon: Database,
      title: "Data-Heavy Businesses",
      desc: "Process large volumes of data, documents or transactions."
    },
    {
      icon: Network,
      title: "Multi-System Businesses",
      desc: "Need integration across multiple tools and workflows."
    },
    {
      icon: Rocket,
      title: "AI Product Startups",
      desc: "Building AI-powered SaaS products and platforms."
    }
  ];

  function FAQItem({ item, isOpen, onClick }) {
    return (
      <div className="aiss__faq-item">
        <button className="aiss__faq-question" onClick={onClick}>
          {item.question}
          <span>{isOpen ? "−" : "+"}</span>
        </button>

        {isOpen && (
          <div className="aiss__faq-answer">
            {item.answer}
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <div className="aiss__wrapper">
        <Navbar />

        {/* ================= HERO SECTION ================= */}
        <section className="aiss__hero">
          <div className="aiss__hero_gradient"></div>

          <div className="aiss__hero_container">
            {/* MOVED BREADCRUMB HERE: Renders inside the dark container above the badge */}
            <Breadcrumb />

            {/* Top Label / Pill Badge */}
            <span className="aiss__hero_badge">
              AI Software Development Company for UK & USA Businesses
            </span>

            <h1 className="aiss__hero_title">
              Custom AI Software Development That Automates Operations and{" "}
              <span className="aiss__hero_title_accent">Accelerates Growth</span>
            </h1>

            {/* Supporting Text */}
            <p className="aiss__hero_text">
              We design and build intelligent AI software solutions including custom
              chatbots, workflow automation systems, GPT-powered tools, and business
              integrations that reduce manual work, improve decision-making, and scale
              with your business.
            </p>

            {/* CTA Buttons */}
            <div className="hero-buttons">
              <a href="/contact" className="btn-primary">
                Get Free AI Consultation →
              </a>

             <a href="/case-studies" className="aiwd-btn-secondary">
    View Our Works →
  </a>
            </div>

            {/* Trust Text */}
            <p className="aiss__hero_trust">
              Trusted by 120+ businesses across the UK, USA & Europe
            </p>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="stats-bar" id="aiss-work">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </section>
        
        {/* SECTION 1 - WHAT IS AI SOFTWARE */}
        <section className="aiss__section aiss__section--features">
          <div className="aiss__container">

            <div className="aiss__section-header">
              <h2 className="aiss__heading">
                What Is Custom AI Software Development?
              </h2>

              <p className="aiss__text">
                Custom AI software development is the process of building intelligent systems tailored to your business workflows — automating tasks, improving decisions, and integrating with your existing tools.
              </p>
            </div>

            <div className="aiss__grid aiss__grid--features">

              <div className="aiss__card aiss__card--feature">
                <div className="aiss__icon">
                  <Trash2 size={26} />
                </div>
                <h3>Replace Manual Work</h3>
                <p>Automate repetitive tasks like data entry, emails, reporting and scheduling.</p>
              </div>

              <div className="aiss__card aiss__card--feature">
                <div className="aiss__icon">
                  <Users size={26} />
                </div>
                <h3>Scale Without Hiring</h3>
                <p>Handle growing workloads without increasing headcount or operational cost.</p>
              </div>

              <div className="aiss__card aiss__card--feature">
                <div className="aiss__icon">
                  <BarChart3 size={26} />
                </div>
                <h3>Faster Decisions</h3>
                <p>AI analyzes your data in real time and delivers actionable insights instantly.</p>
              </div>

              <div className="aiss__card aiss__card--feature">
                <div className="aiss__icon">
                  <ShieldCheck size={26} />
                </div>
                <h3>Competitive Advantage</h3>
                <p>Move faster than competitors by automating key business processes.</p>
              </div>

            </div>

          </div>
        </section>
        
        {/* SECTION 2 - SERVICES */}
        <section className="aiss__section aiss__section--services">
          <div className="aiss__container">

            <div className="aiss__section-header">
              <h2 className="aiss__heading">
                Our AI Software Development Services
              </h2>

              <p className="aiss__text">
                We build end-to-end AI systems that automate business processes, improve decision-making and integrate seamlessly into your existing tools.
              </p>
            </div>

            <div className="aiss__grid aiss__grid--services">

              <div className="aiss__card aiss__card--service">
                <div className="aiss__icon">
                  <Bot size={24} />
                </div>
                <h3>AI Chatbot Development</h3>
                <p>Intelligent chatbots for customer support, lead generation and automation.</p>
              </div>

              <div className="aiss__card aiss__card--service">
                <div className="aiss__icon">
                  <Brain size={24} />
                </div>
                <h3>GPT Integration</h3>
                <p>Integrate GPT, Claude and Gemini into your business workflows and tools.</p>
              </div>

              <div className="aiss__card aiss__card--service">
                <div className="aiss__icon">
                  <Workflow size={24} />
                </div>
                <h3>Process Automation</h3>
                <p>Automate repetitive business operations and reduce manual workload.</p>
              </div>

              <div className="aiss__card aiss__card--service">
                <div className="aiss__icon">
                  <BarChart4 size={24} />
                </div>
                <h3>AI Data Analysis</h3>
                <p>Transform raw data into real-time insights and business intelligence.</p>
              </div>

              <div className="aiss__card aiss__card--service">
                <div className="aiss__icon">
                  <Database size={24} />
                </div>
                <h3>CRM AI Integration</h3>
                <p>Add AI-powered intelligence into your CRM and ERP systems.</p>
              </div>

              <div className="aiss__card aiss__card--service">
                <div className="aiss__icon">
                  <Cog size={24} />
                </div>
                <h3>Custom AI Systems</h3>
                <p>Fully tailored AI platforms built specifically for your business needs.</p>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 3 - WHY CHOOSE US */}
        <section className="aiss__section aiss__section--why">
          <div className="aiss__container aiss__why-layout">

            {/* LEFT SIDE */}
            <div className="aiss__why-left">
              <h2 className="aiss__heading">
                Why Businesses Choose Us for AI Development
              </h2>

              <p className="aiss__text">
                We don’t just build AI software — we design business-driven systems that deliver measurable ROI, integrate seamlessly, and scale with your operations.
              </p>

              <div className="aiss__why-highlight">
                Built for real business impact — not experimental AI prototypes.
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="aiss__why-right">

              <div className="aiss__why-item">
                <CheckCircle size={20} />
                <p>Business-first AI strategy focused on ROI</p>
              </div>

              <div className="aiss__why-item">
                <Layers size={20} />
                <p>Full-stack AI engineering from model to UI</p>
              </div>

              <div className="aiss__why-item">
                <Plug size={20} />
                <p>Seamless integration with your existing systems</p>
              </div>

              <div className="aiss__why-item">
                <Wallet size={20} />
                <p>Cost-effective offshore development model</p>
              </div>

              <div className="aiss__why-item">
                <RefreshCw size={20} />
                <p>Ongoing optimization and long-term support</p>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 4 - TECHNOLOGIES */}
        <section className="aiss__section aiss__section--tech">
          <div className="aiss__container">

            <div className="aiss__section-header">
              <h2 className="aiss__heading">
                Technologies We Use
              </h2>

              <p className="aiss__text">
                We use modern AI, backend and cloud technologies to build scalable, production-ready systems.
              </p>
            </div>

            <div className="aiss__tech-grid">

              {technologies.map((group, i) => (
                <div key={i} className="aiss__tech-card">

                  <h3 className="aiss__tech-title">
                    {group.category}
                  </h3>

                  <div className="aiss__tech-pills">
                    {group.items.map((item, j) => (
                      <span key={j} className="aiss__tech-pill">
                        {item}
                      </span>
                    ))}
                  </div>

                </div>
              ))}

            </div>

          </div>
        </section>

        {/* SECTION 5 - PROCESS */}
        <section className="aiss__section aiss__section--process">
          <div className="aiss__container">

            <div className="aiss__section-header">
              <h2 className="aiss__heading">
                Our AI Development Process
              </h2>

              <p className="aiss__text">
                A structured, transparent workflow from idea to deployment.
              </p>
            </div>

            <div className="aiss__timeline">

              {processSteps.map((step, i) => (
                <div key={i} className="aiss__timeline-item">

                  <div className="aiss__timeline-left">
                    <div className="aiss__timeline-number">
                      {step.number}
                    </div>

                    {i !== processSteps.length - 1 && (
                      <div className="aiss__timeline-line"></div>
                    )}
                  </div>

                  <div className="aiss__timeline-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>

                </div>
              ))}

            </div>

          </div>
        </section>

        {/* SECTION 6 - WHO IT’S FOR */}
        <section className="aiss__section aiss__section--audience">
          <div className="aiss__container">

            <div className="aiss__section-header">
              <h2 className="aiss__heading">
                Who Our AI Solutions Are Built For
              </h2>

              <p className="aiss__text">
                We design AI systems for businesses that want to automate operations, reduce costs and scale intelligently.
              </p>
            </div>

            <div className="aiss__audience-grid">

              {audience.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="aiss__audience-card">

                    <div className="aiss__audience-icon">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>

                  </div>
                );
              })}

            </div>

          </div>
        </section>

        {/* SECTION 7 - FAQ */}
        <section className="aiss__section aiss__section--faq">
          <div className="aiss__container">
            <div className="aiss__section-header">
              <h2 className="aiss__heading">
                Frequently Asked Questions
              </h2>
              <p className="aiss__text">
                Everything you need to know before starting your AI project.
              </p>
            </div>

            <div className="aiss__faq-wrapper">
              {faqs.map((item, i) => (
                <FAQItem
                  key={i}
                  item={item}
                  isOpen={openIndex === i}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="aiss__cta-section">
          <div className="aiss__container">
            <div className="aiss__cta-card">
              <h2 className="aiss__cta-title">
                Ready to Automate and Scale Your Business with AI?
              </h2>

              <p className="aiss__cta-text">
                Tell us about your business processes and we will put together a free
                AI software consultation — showing you exactly where AI can save time,
                reduce costs and help you grow.
              </p>

              <div className="cta-buttons">
                <a href="/contact" className="btn-primary">
                  Get Free AI Consultation →
                </a>
                <a href="/case-studies" className="aiwd-btn-secondary">
  See Our Works 
</a>
              </div>

              <p className="aiss__cta-small-text">
                No commitment. No spam. Just results.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default AISoftwareServices;