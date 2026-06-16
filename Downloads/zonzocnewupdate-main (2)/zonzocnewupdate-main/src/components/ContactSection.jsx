'use client';
import React, { useState } from 'react';
import '../styles/contact.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
  };

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
        <div className="contact-right" style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="form-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', flexGrow: 1, paddingBottom: '24px', boxSizing: 'border-box' }}>
            <h3 className="form-title">Send Us a Message</h3>

            {submitStatus === 'success' && (
              <div className="alert alert-success">✓ Message sent successfully!</div>
            )}
            {submitStatus === 'error' && (
              <div className="alert alert-error">✗ Error. Please try again.</div>
            )}

            <form onSubmit={handleSubmit} className="contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="form-grid">
                
                {/* Name Input */}
                <div className="form-group">
                  <svg className="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Email Input */}
                <div className="form-group">
                  <svg className="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Phone Input */}
                <div className="form-group">
                  <svg className="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone No."
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Company Input */}
                <div className="form-group">
                  <svg className="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                    <line x1="9" y1="22" x2="9" y2="16" />
                    <line x1="15" y1="22" x2="15" y2="16" />
                    <line x1="9" y1="16" x2="15" y2="16" />
                    <path d="M8 6h2v2H8V6zm4 0h2v2h-2V6zm4 0h2v2h-2V6zm-8 4h2v2H8v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z" />
                  </svg>
                  <input
                    type="text"
                    name="company"
                    placeholder="Your Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Textarea container keeps outline and standard border */}
              <div className="form-group textarea-group" style={{ display: 'flex', flexDirection: 'column', height: '150px', position: 'relative', border: '1px solid #cbd5e1', borderRadius: '8px', backgroundColor: '#ffffff' }}>
                <svg className="input-icon textarea-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'absolute', top: '16px', left: '16px' }}>
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <textarea
                  name="message"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  style={{ 
                    flexGrow: 1, 
                    width: '100%',
                    height: '100%',
                    resize: 'none', 
                    border: 'none', 
                    background: 'transparent',
                    outline: 'none',
                    padding: '12px 16px 12px 42px',
                    boxSizing: 'border-box',
                    fontFamily: 'inherit',
                    fontSize: 'inherit',
                    color: 'inherit'
                  }}
                ></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                <span>{isSubmitting ? 'Sending...' : 'Send My Free Proposal'}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </form>

            {/* Combined Card Footer wrapper absorbs the remaining space of the card 
                and distributes the 3 components with balanced spacing */}
            <div className="contact-card-footer" style={{ marginTop: 'auto', paddingTop: '28px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', width: '100%' }}>
              
              {/* 1. "(or chat directly)" label */}
              <span style={{ fontSize: '13px', color: '#64748b', fontWeight: '500' }}>
                (or chat directly)
              </span>

              {/* 2. WhatsApp Button */}
              <a 
                href="https://wa.me/94763286116" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  gap: '8px', 
                  fontSize: '14px', 
                  fontWeight: '600', 
                  color: '#ffffff', 
                  backgroundColor: '#25D366', 
                  padding: '11px 32px', 
                  borderRadius: '24px', 
                  textDecoration: 'none',
                  boxShadow: '0 4px 12px rgba(37, 211, 102, 0.2)',
                  transition: 'all 0.2s ease',
                  width: '100%',
                  maxWidth: '240px'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.62.962 3.21 1.48 4.815 1.481 5.426 0 9.843-4.414 9.846-9.843.001-2.63-1.012-5.101-2.855-6.946C16.611 1.998 14.135 1.01 11.51 1.01c-5.43 0-9.848 4.416-9.851 9.847-.001 1.73.475 3.42 1.378 4.895l-.994 3.63 3.731-.978c1.455.85 3.014 1.29 4.603 1.29zm9.522-6.83c-.263-.131-1.554-.767-1.795-.853-.24-.087-.416-.13-.591.132-.175.263-.679.853-.831 1.029-.153.175-.306.197-.569.066-.263-.131-1.112-.41-2.119-1.31-.783-.698-1.31-1.562-1.464-1.825-.153-.263-.016-.405.115-.536.118-.118.263-.306.394-.46.131-.153.175-.263.263-.438.088-.175.044-.328-.022-.46-.066-.131-.591-1.424-.81-1.95-.213-.514-.429-.444-.591-.452-.153-.007-.328-.008-.503-.008-.175 0-.46.066-.7.328-.24.263-.92.898-.92 2.193s.941 2.544 1.072 2.72c.131.175 1.851 2.827 4.485 3.968.627.272 1.115.434 1.496.555.63.201 1.203.172 1.657.104.506-.076 1.554-.634 1.774-1.246.22-.612.22-1.138.153-1.246-.066-.109-.24-.153-.503-.284z"/>
                </svg>
                WhatsApp
              </a>

              {/* 3. No commitment subtext placed perfectly at the card bottom */}
              <p className="submit-note" style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>
                No commitment. No spam. Just results.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;