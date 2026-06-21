import React from 'react';
import { serviceProcessContent } from '../data/serviceProcessContent';
import '../styles/ServiceProcessSection.css';

const ServiceProcessSection = ({ serviceKey, headingTag = 'p' }) => {
  const content = serviceProcessContent[serviceKey];
  if (!content?.steps?.length) return null;

  const isWide = content.steps.length > 5;
  const HeadingTag = headingTag;

  return (
    <section className="sp-process-section">
      <div className="sp-process-container">
        <div className="sp-process-header">
          <span className="sp-process-badge">{content.badge}</span>
          <HeadingTag className="sp-process-heading sp-heading-2line">
            <span className="sp-heading-line">{content.titleBefore}</span>
            <span className="sp-heading-accent">{content.titleAccent}</span>
          </HeadingTag>
          <p className="sp-process-subtitle">{content.subtitle}</p>
        </div>
        <div className={`sp-process-row${isWide ? ' sp-process-row--wide' : ''}`}>
          {content.steps.map((step, i) => (
            <React.Fragment key={step.number}>
              <div className="sp-process-step">
                <div className="sp-process-circle">
                  <span className="sp-process-emoji">{step.icon}</span>
                  <span className="sp-process-number">{step.number}</span>
                </div>
                <p className="sp-process-title sp-card-title-1l">{step.title}</p>
                <p className="sp-process-desc sp-card-desc-3l">{step.description}</p>
              </div>
              {i < content.steps.length - 1 && (
                <div className="sp-process-connector">
                  <div className="sp-process-dots" />
                  <span className="sp-process-arrow">→</span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcessSection;
