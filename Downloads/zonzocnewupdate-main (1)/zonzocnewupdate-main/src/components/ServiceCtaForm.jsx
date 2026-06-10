'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const ServiceCtaForm = ({
  label = "Let's Build Your Success",
  title,
  titleAccent,
  description,
  checks = [],
  formTitle = 'Get Free Consultation',
  serviceOptions = [],
  ctaImage,
  ctaAlt,
}) => (
  <section className="sp-cta-split">
    <div className="sp-hero-pattern" aria-hidden="true" />
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
      <div className="sp-cta-split-grid">
        <div className="sp-cta-split-left">
          <span className="sp-cta-split-label">{label}</span>
          <h2 className="sp-cta-split-title">
            {title}{' '}
            {titleAccent && <span className="sp-cta-split-accent">{titleAccent}</span>}
          </h2>
          <p className="sp-cta-split-desc">{description}</p>
          {checks.length > 0 && (
            <div className="sp-cta-split-checks">
              {checks.map((c) => (
                <div key={c} className="sp-cta-split-check">
                  <CheckCircle2 size={18} />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          )}
          {ctaImage && (
            <div className="sp-cta-image-wrap">
              <Image
                src={ctaImage}
                alt={ctaAlt || 'AI technology illustration'}
                width={400}
                height={300}
                className="sp-cta-image"
              />
            </div>
          )}
        </div>
        <div className="sp-cta-form-card">
          <h3>{formTitle}</h3>
          <div className="sp-cta-form-row">
            <input type="text" placeholder="Your Name*" className="sp-cta-form-input" />
            <input type="email" placeholder="Email Address*" className="sp-cta-form-input" />
          </div>
          <input type="tel" placeholder="Phone Number*" className="sp-cta-form-input" />
          {serviceOptions.length > 0 && (
            <select className="sp-cta-form-input" defaultValue="">
              <option value="">Select a Service</option>
              {serviceOptions.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          )}
          <button type="button" className="sp-cta-form-btn">Send Message →</button>
          <p className="sp-cta-form-note">We respect your privacy. No spam, ever.</p>
        </div>
      </div>
    </div>
  </section>
);

export default ServiceCtaForm;
