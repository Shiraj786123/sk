'use client';
import React from 'react';
import '../styles/trustbar.css';

const stats = [
  { number: '150+', label: 'Projects Delivered' },
  { number: '4.9★', label: 'Rated Agency' },
  { number: '35%', label: 'Avg Client Growth' },
  { number: 'UK & USA', label: 'Focused' },
];

const TrustBar = () => {
  return (
    <section className="trust-bar">
      <p className="trust-bar-label">
        Trusted by 120+ businesses across  <span className="sky-blue">UK,USA</span>  & Europe
      </p>
      <div className="trust-bar-stats">
        {stats.map((stat, i) => (
          <div key={i} className="trust-bar-item">
            <span className="trust-bar-number">{stat.number}</span>
            <span className="trust-bar-label-text">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;
