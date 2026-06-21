'use client';

import React from 'react';
import {
  Award,
  Bot,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  HardDrive,
  Layers,
  MessageSquare,
  RefreshCw,
  Rocket,
  Search,
  Settings,
  Shield,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  UserCheck,
  Users,
  Zap,
  Activity,
} from 'lucide-react';
import { serviceIntroMarqueeContent } from '../data/serviceIntroMarqueeContent';
import '../styles/ServiceIntroMarqueeSection.css';

const ICON_MAP = {
  Search,
  TrendingUp,
  Shield,
  Target,
  Rocket,
  Sparkles,
  Bot,
  Zap,
  Database,
  RefreshCw,
  UserCheck,
  Settings,
  Layers,
  Cpu,
  Code2,
  Users,
  Activity,
  Smartphone,
  ShoppingCart,
  Award,
  MessageSquare,
  HardDrive,
};

const MarqueeTrack = ({ items }) => (
  <div className="sp-intro-marquee-wrapper">
    <div className="sp-intro-marquee-track">
      {[...items, ...items].map((item, idx) => {
        const Icon = ICON_MAP[item.icon];
        return (
          <div key={`${item.title}-${idx}`} className="sp-intro-marquee-col">
            <div className="sp-intro-marquee-card">
              <div className="sp-intro-marquee-header-bar">
                <span className="sp-intro-browser-dot" />
                <span className="sp-intro-browser-dot" />
                <span className="sp-intro-browser-dot" />
              </div>
              <div className="sp-intro-marquee-body">
                <div className="sp-intro-card-left-group">
                  <CheckCircle2 size={16} className="sp-intro-check-icon" />
                  <p className="sp-intro-marquee-card-title">{item.title}</p>
                </div>
                <div className={`sp-intro-icon-box ${item.colorClass}`}>
                  {Icon ? <Icon size={32} /> : null}
                </div>
              </div>
            </div>
            <div className="sp-intro-marquee-line" />
          </div>
        );
      })}
    </div>
  </div>
);

const ServiceIntroMarqueeSection = ({ serviceKey, marqueeOnly = false, headingTag = 'p' }) => {
  const content = serviceIntroMarqueeContent[serviceKey];
  if (!content?.items?.length) return null;

  const HeadingTag = headingTag;

  if (marqueeOnly) {
    return <MarqueeTrack items={content.items} />;
  }

  return (
    <section className="sp-intro-marquee-section">
      <div className="sp-intro-marquee-container">
        <div className="sp-intro-marquee-content">
          <span className="sp-intro-marquee-label">{content.label}</span>
          <HeadingTag className="sp-intro-marquee-title sp-heading-2line">
            <span className="sp-heading-line">{content.title}</span>
            <span className="sp-intro-marquee-accent sp-heading-accent">{content.titleAccent}</span>
          </HeadingTag>
          <p className="sp-intro-marquee-desc">{content.description}</p>
          <MarqueeTrack items={content.items} />
        </div>
      </div>
    </section>
  );
};

export default ServiceIntroMarqueeSection;
