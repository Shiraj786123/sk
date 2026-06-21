import React from 'react';
import { serviceIndustriesContent } from '../data/serviceIndustries';
import '../styles/ServiceIndustriesSection.css';

const ServiceIndustriesSection = ({ serviceKey, headingTag = 'p' }) => {
  const content = serviceIndustriesContent[serviceKey];
  if (!content?.items?.length) return null;

  const HeadingTag = headingTag;

  return (
    <section className="sp-industries-section">
      <div className="sp-industries-container">
        <div className="sp-industries-header">
          <span className="sp-industries-badge">{content.badge}</span>
          <HeadingTag className="sp-industries-title sp-heading-2line">
            <span className="sp-heading-line">{content.titleBefore}</span>
            <span className="sp-heading-accent">{content.titleAccent}</span>
          </HeadingTag>
          <p className="sp-industries-subtitle">{content.subtitle}</p>
        </div>
        <div className="sp-industries-grid">
          {content.items.map((item) => (
            <div className="sp-industry-item" key={item.label}>
              <div className="sp-industry-icon">{item.icon}</div>
              <span className="sp-industry-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceIndustriesSection;
