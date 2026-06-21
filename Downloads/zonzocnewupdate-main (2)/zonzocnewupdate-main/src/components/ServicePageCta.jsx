'use client';

import React from 'react';
import { Clock, ShieldCheck, Target } from 'lucide-react';
import ContactFormCard from './ContactFormCard';
import '../styles/ServicePageCta.css';
import '../styles/service-cta-mobile.css';

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
  defaultMessage = '',
  checks = DEFAULT_CHECKS,
}) => {
  const checkItems = normalizeChecks(checks);
  const prefilledMessage =
    defaultMessage ||
    (titleAccent ? `I'm interested in ${titleAccent.replace('?', '').trim()}.` : '');

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
            <ContactFormCard className="service-cta-form-card" defaultMessage={prefilledMessage} compact />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePageCta;
