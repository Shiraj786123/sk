import React from 'react';
import '../styles/process.css';

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We study your business goals, current systems, and challenges to identify the optimal opportunities for high-impact automation.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      )
    },
    {
      number: "02",
      title: "Planning",
      description: "We orchestrate the complete project roadmap, technical architecture, and user blueprints to guarantee absolute clarity before production.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      )
    },
    {
      number: "03",
      title: "Development",
      description: "Our engineering squad builds your architecture in rapid, agile sprints with transparent milestone reviews and automated quality assurance metrics.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      )
    },
    {
      number: "04",
      title: "Launch",
      description: "We run deep stress tests, multi-layered security audits, and full cross-platform responsiveness benchmarks before deploying into high-availability production environments.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      )
    },
    {
      number: "05",
      title: "Growth",
      description: "We stay connected with continuous platform optimization, system upgrades, and strategic monitoring metrics to adapt as your business expands operations.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="8.5" cy="7" r="4"></circle>
          <line x1="20" y1="8" x2="20" y2="14"></line>
          <line x1="23" y1="11" x2="17" y2="11"></line>
        </svg>
      )
    }
  ];

  return (
    <section className="aiwa__section process-section">
      <div className="aiwa__container">
        
        {/* Section Pill Label */}
        <div className="process-label">Our Process</div>

        {/* Heading */}
        <h2 className="aiwa__title_dark">
          A Proven <span className="text_light_blue">5-Step Process</span> to Deliver Results
        </h2>

        {/* Subtitle */}
        <p className="process-subtitle">
          Every project follows a structured engineering roadmap intentionally mapped out to ensure elite clarity, rapid execution, and measurable data metrics.
        </p>

        {/* Process Steps Grid */}
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              
              {/* Header row layout framework */}
              <div className="step-card-header">
                <div className="step-circle">
                  {step.icon}
                </div>
                <div className="step-watermark">
                  {step.number}
                </div>
              </div>

              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              
              {/* Decorative dynamic accent indicator border at base of card */}
              <div className="step-card-indicator-line"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;