'use client';
import React from 'react';
import ContactFormCard from './ContactFormCard';
import '../styles/contact.css';

const ContactSection = () => {
  const steps = [
    { number: '01', text: 'Share Your Requirements', desc: 'Tell us about your project, goals and timeline.' },
    { number: '02', text: 'Free Strategy Call', desc: 'We\'ll schedule a call to discuss your needs in detail.' },
    { number: '03', text: 'Receive a Custom Proposal', desc: 'Get a clear, itemised proposal with no hidden costs.' },
    { number: '04', text: 'We Start Building', desc: 'Once approved, we hit the ground running immediately.' }
  ];

  return (
    <section className="contact-section">
      <div className="contact-container">
        
        {/* Left Side Content Container - 50% Width */}
        <div className="contact-left">
          <div className="left-inner-wrapper">
            <span className="contact-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ marginRight: '6px' }}>
                <polygon points="12 2 2 22 12 17 22 22 12 2"/>
              </svg> 
              Free Consultation & Proposal
            </span>

            <h2 className="contact-title">
              Ready to Grow Your Business with <span className="highlight-text">Smart Digital Solutions?</span>
            </h2>

            <p className="contact-subtitle">
              Tell us about your project and our team will prepare a tailored, no-obligation strategy and proposal within 24 hours.
            </p>

            <h3 className="steps-heading">Here’s What Happens Next</h3>

            <div className="contact-steps">
              {steps.map((step, index) => (
                <div key={index} className="step-item">
                  <div className="step-number-wrapper">
                    <div className="step-number-box">{step.number}</div>
                    {index < steps.length - 1 && <div className="step-connector-line"></div>}
                  </div>
                  <div className="step-content">
                    <p className="step-text">{step.text}</p>
                    <p className="step-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side Card Container - 50% Width & Auto-Stretched */}
        <div className="contact-right">
          <ContactFormCard />
        </div>

      </div>
    </section>
  );
};

export default ContactSection;