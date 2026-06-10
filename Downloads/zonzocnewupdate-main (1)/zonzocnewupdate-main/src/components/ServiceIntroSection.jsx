'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle2, Monitor, Code2 } from 'lucide-react';

const ServiceIntroSection = ({
  label,
  title,
  titleAccent,
  description,
  checklist,
  chipLabel = 'AI',
  introImage,
  introAlt,
}) => (
  <section className="sp-intro-2col">
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
      <div className="sp-intro-2col-grid">
        {introImage ? (
          <div className="sp-intro-image-wrap">
            <Image
              src={introImage}
              alt={introAlt || 'Technology illustration'}
              width={480}
              height={360}
              className="sp-intro-image"
            />
          </div>
        ) : (
          <div className="sp-intro-visual-box" aria-hidden="true">
            <div className="sp-intro-visual-chip">{chipLabel}</div>
            <div className="sp-intro-visual-icons">
              <div className="sp-intro-visual-icon"><Monitor size={22} /></div>
              <div className="sp-intro-visual-icon"><Code2 size={22} /></div>
            </div>
          </div>
        )}
        <div>
          <span className="sp-intro-label">{label}</span>
          <h2 className="sp-intro-title">
            {title}{' '}
            {titleAccent && <span className="sp-intro-title-accent">{titleAccent}</span>}
          </h2>
          <p className="sp-intro-desc">{description}</p>
          <div className="sp-intro-checklist">
            {checklist.map((item) => (
              <div key={item} className="sp-intro-check-item">
                <CheckCircle2 size={17} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ServiceIntroSection;
