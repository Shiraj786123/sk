'use client';
import React, { useState } from 'react';
import '../styles/solution.css';


const SolutionSection = () => {
  const [activeTab, setActiveTab] = useState('seo');


  const tabs = [
    { id: 'seo', label: 'SEO & Lead Generation' },
    { id: 'ux', label: 'High-Converting Websites' },
    { id: 'ai', label: 'AI Automation Systems' },
  ];

  const services = {
    seo: [
      {
        title: 'Organic Search & SEO Strategy',
        items: [
          'SEO Strategy & Consulting',
          'Keyword Research & Mapping',
          'Competitor & Market Analysis',
          'On-Page & Content Optimization',
          'Enterprise SEO Solutions',
        ]
      },
      {
        title: 'SEO Analytics & Platforms',
        items: [
          'Google Search Console Setup & Insights',
          'Google Analytics & GA4 Tracking',
          'Rank Tracking & Performance Monitoring',
          'Google Merchant Center Management',
          'Google Ads & Search Campaign Support'
        ]
      },
      {
        title: 'Ecommerce SEO & Growth',
        items: [
          'Ecommerce SEO Strategy',
          'Product & Shopping Feed Optimization',
          'Shopping Feed Automation',
          'Ecommerce PPC Management',
          'Conversion Rate Optimization (CRO)'
        ]
      }
    ],
    ux: [
      {
        title: 'UI/UX Design',
        items: [
          'User Interface (UI) Design',
          'User Experience (UX) Design',
          'Wireframing & Prototyping',
          'Design Systems & Style Guides',
          'Usability & User Testing',
        ]
      },
      {
        title: 'Design That Converts',
        items: [
          'Frontend Development',
          'Backend Development',
          'Full Stack Development',
          'Web Application Development',
          'API & Third-Party Integration',
        ]
      },
      {
        title: 'Development',
        items: [
          'Animation & Motion Design',
          'Micro-Interactions',
          'Responsive & Mobile-First Design',
          'Accessibility & WCAG Compliance',
          'Performance-Focused UX',
        ]
      }
    ],
    ai: [
      {
        title: 'AI for Business Growth',
        items: [
          'AI Chatbots & Assistants',
          'AI Lead Handling',
          'AI Sales Assistants',
        ]
      },
      {
        title: 'Automation Systems',
        items: [
          'Workflow Automation',
          'CRM & Tool Integration',
          'Email & WhatsApp Automation',
        ]
      },
      {
        title: 'AI Consulting',
        items: [
          'AI Strategy',
          'AI Readiness Assessment',
          'Custom AI Solutions',
        ]
      }
    ]
  };

  const tabDescriptions = {
    seo: "Rank higher, attract the right audience, and turn search traffic into consistent paying customers.",
    ux: "We build fast, beautiful, conversion-focused websites that turn visitors into leads — not just impressions.",
    ai: "Automate repetitive tasks, qualify leads instantly, and scale your operations with custom AI tools.",
  };

  return (
    <section className="solution-section">
      <div className="solution-hero">
        <h1 className="solution-title">
          Everything You Need to Grow Online
        </h1>
        <p className="solution-subtitle">
          From search visibility to custom AI systems — we deliver end-to-end digital solutions that generate real, measurable business results for UK & USA businesses.
        </p>

        {/* Tab Navigation */}
        <div className="solution-tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>            
          ))}
        </div>
        <p className="tab-description">
  {tabDescriptions[activeTab]}
</p>
      </div>

      {/* Service Cards */}
      <div className="services-grid">
        {services[activeTab].map((service, index) => (
          <div key={index} className="service-card">
            <h3 className="service-card-title">{service.title}</h3>
            <ul className="service-list">
              {service.items.map((item, idx) => (
                <li key={idx} className="service-item">
                  <span className="service-arrow">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/*<button className="service-btn">
        <span className="btn-text">
          <span>NEED TO GET THE SERVICE?</span>
          <span>NEED TO GET THE SERVICE?</span>
        </span>
        <span className="btn-arrow">↗</span>
      </button>*/}
    </section>
  );
};

export default SolutionSection;
