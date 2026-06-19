'use client';

import React from 'react';
import { Clock, ShieldCheck, Target, User, Mail, Phone, Briefcase } from 'lucide-react';
import { CTA_MOBILE_CSS } from '../styles/serviceCtaInline';
import '../styles/ServicePageCta.css';

const DEFAULT_CHECKS = [
  { text: 'We usually respond within 1–3 business hours', icon: Clock },
  { text: 'No spam. No obligation.', icon: ShieldCheck },
  { text: '100% focused on your success.', icon: Target },
];

const DEFAULT_ICONS = [Clock, ShieldCheck, Target];

function normalizeChecks(checks) {
  return checks.map((item, index) => {
    if (typeof item === 'string') {
      const Icon = DEFAULT_ICONS[index] || Target;
      return { text: item, icon: Icon };
    }
    return item;
  });
}

const ServicePageCta = ({
  label = "Let's Build Your Success",
  titleBefore,
  titleAccent,
  description,
  serviceOptions = [],
  checks = DEFAULT_CHECKS,
}) => {
  const checkItems = normalizeChecks(checks);

  return (
    <section className="aiwd-cta-section">
    <div className="service-cta-container">
      <div className="aiwd-cta-inner">
        <div className="aiwd-cta-left">
          <span className="aiwd-cta-label">{label}</span>
          <p className="aiwd-cta-big-title">
            <span className="service-cta-text-white">{titleBefore}</span>{' '}
            {titleAccent && <span className="service-cta-text-blue">{titleAccent}</span>}
          </p>
          <p className="aiwd-cta-desc">{description}</p>
          <div className="aiwd-cta-checks">
            {checkItems.map(({ text, icon: Icon }) => (
              <div key={text} className="aiwd-cta-check-row">
                <span className="aiwd-cta-bullet-icon" aria-hidden="true">
                  <Icon size={16} strokeWidth={2.25} />
                </span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="aiwd-cta-right">
          <div className="aiwd-cta-form">
            <p className="aiwd-cta-form-title">Get Free Consultation</p>
            <div className="aiwd-form-row">
              <div className="aiwd-form-field">
                <User className="aiwd-form-field-icon" size={18} aria-hidden="true" />
                <input type="text" placeholder="Your Name*" className="aiwd-form-input" />
              </div>
              <div className="aiwd-form-field">
                <Mail className="aiwd-form-field-icon" size={18} aria-hidden="true" />
                <input type="email" placeholder="Email Address*" className="aiwd-form-input" />
              </div>
            </div>
            <div className="aiwd-form-row">
              <div className="aiwd-form-field">
                <Phone className="aiwd-form-field-icon" size={18} aria-hidden="true" />
                <input type="tel" placeholder="Phone Number*" className="aiwd-form-input" />
              </div>
              <div className="aiwd-form-field aiwd-form-field--select">
                <Briefcase className="aiwd-form-field-icon" size={18} aria-hidden="true" />
                <select className="aiwd-form-input" defaultValue="">
                  <option value="">Select a Service</option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
            <button type="button" className="aiwd-form-btn">Send Message →</button>
          </div>
        </div>
      </div>
    </div>
      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: CTA_MOBILE_CSS }} />
    </section>
  );
};

export default ServicePageCta;