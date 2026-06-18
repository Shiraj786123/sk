'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { CTA_MOBILE_CSS } from '../styles/serviceCtaInline';
import '../styles/ServicePageCta.css';

const DEFAULT_CHECKS = [
  'We usually respond within 1–3 business hours',
  'No spam. No obligation.',
  '100% focused on your success.',
];

const ServicePageCta = ({
  label = "Let's Build Your Success",
  titleBefore,
  titleAccent,
  description,
  serviceOptions = [],
  checks = DEFAULT_CHECKS,
}) => (
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
            {checks.map((item) => (
              <div key={item} className="aiwd-cta-check-row">
                <CheckCircle2 size={18} className="aiwd-check-icon" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="aiwd-cta-right">
          <div className="aiwd-cta-form">
            <p className="aiwd-cta-form-title">Get Free Consultation</p>
            <div className="aiwd-form-row">
              <input type="text" placeholder="Your Name*" className="aiwd-form-input" />
              <input type="email" placeholder="Email Address*" className="aiwd-form-input" />
            </div>
            <div className="aiwd-form-row">
              <input type="tel" placeholder="Phone Number*" className="aiwd-form-input" />
              <select className="aiwd-form-input" defaultValue="">
                <option value="">Select a Service</option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <button type="button" className="aiwd-form-btn">Send Message →</button>
          </div>
        </div>
      </div>
    </div>
    <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: CTA_MOBILE_CSS }} />
  </section>
);

export default ServicePageCta;
