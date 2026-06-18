'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import Breadcrumb from './Breadcrumb';
import { HERO_CSS } from '../styles/serviceHeroInline';

const DashboardMockup = () => (
  <div className="sp-dashboard-mockup" aria-hidden="true">
    <div className="sp-dashboard-screen">
      <div className="sp-dashboard-bar"><span /><span /><span /></div>
      <div className="sp-dashboard-stats">
        <div className="sp-dashboard-stat"><strong>Users</strong><em>12.4K</em></div>
        <div className="sp-dashboard-stat"><strong>Revenue</strong><em>$48K</em></div>
        <div className="sp-dashboard-stat"><strong>Growth</strong><em>+24%</em></div>
      </div>
      <div className="sp-dashboard-chart" />
    </div>
    <div className="sp-dashboard-phone">
      <div className="sp-dashboard-phone-label">AI Assistant</div>
      <div className="sp-dashboard-phone-msg" />
      <div className="sp-dashboard-phone-msg" />
    </div>
  </div>
);

const HeroVisual = ({ heroImage, heroAlt, heroImageTransparent }) => {
  if (heroImage) {
    const wrapClass = heroImageTransparent
      ? 'sp-hero-image-wrap sp-hero-image-wrap--transparent'
      : 'sp-hero-image-wrap';

    return (
      <div className={wrapClass}>
        <Image
          src={heroImage}
          alt={heroAlt || 'AI technology illustration'}
          width={860}
          height={680}
          className="sp-hero-image"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 640px, 720px"
        />
      </div>
    );
  }
  return <DashboardMockup />;
};

const ServicePageHero = ({
  badge,
  title,
  titleAccent,
  subtitle,
  primaryCta = { href: '/contact', label: 'Get Free Consultation →' },
  secondaryCta = { href: '/case-studies', label: 'View Our Work' },
  features = [],
  heroImage,
  heroAlt,
  heroImageTransparent,
  showDashboard = true,
}) => (
  <section className="sp-hero-split" data-sp-hero="1">
    <div className="sp-hero-pattern" aria-hidden="true" />
    <div className="sp-hero-container">
      <div className="sp-hero-split-grid">
        <div className="sp-hero-split-content">
          <Breadcrumb />
          <span className="sp-hero-split-badge">{badge}</span>
          <h1 className="sp-hero-split-title">
            {title}{' '}
            {titleAccent && <span className="sp-hero-split-accent">{titleAccent}</span>}
          </h1>
          <p className="sp-hero-split-sub">{subtitle}</p>
          <div className="sp-hero-split-actions">
            <a href={primaryCta.href} className="sp-hero-split-btn-primary">{primaryCta.label}</a>
            {secondaryCta && (
              <a href={secondaryCta.href} className="sp-hero-split-btn-secondary">{secondaryCta.label}</a>
            )}
          </div>
          {features.length > 0 && (
            <div className="sp-hero-split-features">
              {features.map((f) => (
                <div key={f} className="sp-hero-split-feature">
                  <CheckCircle2 size={16} />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        {showDashboard || heroImage ? (
          <HeroVisual heroImage={heroImage} heroAlt={heroAlt} heroImageTransparent={heroImageTransparent} />
        ) : null}
      </div>
    </div>
    <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: HERO_CSS }} />
  </section>
);

export { DashboardMockup };
export default ServicePageHero;
