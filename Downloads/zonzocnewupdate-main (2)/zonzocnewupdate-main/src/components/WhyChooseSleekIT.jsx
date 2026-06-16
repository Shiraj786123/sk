'use client';
import React from 'react';
import '../styles/WhyChooseUs.css'; 

const WhyChooseUs = () => {
  const points = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
          <path d="M12 6V12h6"/>
        </svg>
      ),
      title: "AI-First Approach",
      desc: "We use AI intelligently to automate, optimize and accelerate what matters most for your business."
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"/>
          <polyline points="2 17 12 22 22 17"/>
          <polyline points="2 12 12 17 22 12"/>
        </svg>
      ),
      title: "Full-Stack Expertise",
      desc: "Design, development, SEO and AI — all under one roof. No outsourcing. No communication gaps."
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
          <line x1="7" y1="7" x2="7.01" y2="7"/>
        </svg>
      ),
      title: "Transparent Pricing",
      desc: "Clear proposals, fixed milestones and no hidden charges. What we commit, we deliver."
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      ),
      title: "Dedicated Communication",
      desc: "Direct access to your project team via WhatsApp, email or video call across UK & USA time zones."
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: "Long-Term Support",
      desc: "We don't just build and leave. We optimise, support and scale with your business for the long run."
    }
  ];

  const metrics = [
    { 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      value: "120+", 
      label: "Clients Served" 
    },
    { 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
         <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      ),
      value: "150+", 
      label: "Projects Delivered" 
    },
    { 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
      ),
      value: "10+", 
      label: "Years Experience" 
    },
    { 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ),
      value: "4.9★", 
      label: "Client Rating" 
    }
  ];

  return (
    <section className="why-us-section">
      <div className="why-us-container">
        
        {/* Left Layout Column */}
        <div className="why-us-left">
          <span className="why-us-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ marginRight: '6px' }}>
              <polygon points="12 2 2 22 12 17 22 22 12 2"/>
            </svg>
            WHY BUSINESSES CHOOSE US
          </span>
          
          <h2 className="why-us-title">
            Built on Innovation.<br className="desktop-only" />
            Focused on Your <span className="highlight-text-blue">Growth.</span>
          </h2>
          
          <p className="why-us-description">
            We combine advanced AI technology, full-stack expertise and business-first strategy to deliver measurable impact.
          </p>

          <div className="why-us-timeline">
            {points.map((point, index) => (
              <div className="timeline-card-row" key={index}>
                <div className="timeline-rail">
                  <div className="timeline-circle-icon">
                    {point.icon}
                  </div>
                  {index < points.length - 1 && <div className="timeline-dashed-line"></div>}
                </div>
                
                <div className="timeline-info-card">
                  <h4 className="info-card-title">{point.title}</h4>
                  <p className="info-card-desc">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Layout Column */}
        <div className="why-us-right">
          
          {/* Dashboard Section */}
          <div className="dashboard-visual-canvas">
            <img 
              src="https://kvnpromosae.b-cdn.net/wp-content/uploads/2026/04/Analytics-dashboard.jpg" 
              alt="Business Growth Analytics Dashboard" 
              className="dashboard-main-img"
            />
            
            {/* Top Rated Card */}
            <div className="top-rated-floating-widget">
              <div className="widget-icon-circle">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.276.91-1.01L12 2z"/>
                </svg>
              </div>
              <h5 className="widget-heading">Top Rated</h5>
              <p className="widget-subheading">AI & Web Partner</p>
              <div className="widget-stars">
                {Array(5).fill().map((_, i) => (
                  <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Metric Dashboard Block */}
          <div className="analytics-metrics-panel">
            <div className="stats-quad-grid">
              {metrics.map((metric, index) => (
                <div className="stat-grid-cell" key={index}>
                  <div className="stat-icon-wrapper">
                    {metric.icon}
                  </div>
                  <h3 className="stat-metric-number">{metric.value}</h3>
                  <p className="stat-metric-label">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;

