'use client';
import React from "react";
import "../styles/hero.css";

const Hero = ({ onCtaClick }) => {
  return (
    <section className="hero-section" role="region" aria-label="Hero">
      <div className="hero-inner">
        <div className="hero-copy">
          
          {/* Top Label / Pill Badge with Safe inline-span wrapper */}
          <span className="hero-badge">
            <span className="hero-badge-dot"></span>
            <span className="hero-badge-text">Next-Gen Web Solutions</span>
          </span>

          <h1 className="hero-main-title">
            AI-Powered Web Development <br className="desktop-only" />
            Agency Trusted by Businesses in the <span className="text-highlight">UK & USA</span>
          </h1>

          <p className="hero-description">
            We design high-converting websites, drive targeted organic traffic, and automate your business with AI—so you grow faster without working harder.
          </p>

          <div className="hero-actions">
            <button
              className="hero-contact-btn"
              onClick={onCtaClick}
            >
              Get Free Growth Plan
            </button>

            <a
              href="/#our-work"
              className="hero-secondary-btn"
            >
              See Our Works <span className="arrow">↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;