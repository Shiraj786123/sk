'use client';

import React from 'react';
import {
  Activity,
  BarChart3,
  Bot,
  Brain,
  Code2,
  Cpu,
  Eye,
  HardDrive,
  Layers,
  Layout,
  Plug,
  RefreshCw,
  Rocket,
  Search,
  Shield,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';
import { serviceWhyChooseContent } from '../data/serviceWhyChooseContent';
import '../styles/ServiceWhyChooseSection.css';

const ICON_MAP = {
  TrendingUp,
  Target,
  Shield,
  BarChart3,
  Rocket,
  Layers,
  Bot,
  Cpu,
  Layout,
  Brain,
  Plug,
  RefreshCw,
  Sparkles,
  Eye,
  Code2,
  Users,
  ShoppingCart,
  Zap,
  Smartphone,
  Search,
  Activity,
  HardDrive,
};

const ServiceWhyChooseSection = ({ serviceKey }) => {
  const content = serviceWhyChooseContent[serviceKey];
  if (!content?.items?.length) return null;

  return (
    <section className="sp-why-choose-section">
      <div className="sp-why-choose-container">
        <div className="sp-why-choose-head">
          <span className="sp-why-choose-badge">{content.badge}</span>
        </div>
        <div className={`sp-why-choose-grid sp-why-choose-grid--${content.items.length}`}>
          {content.items.map((item) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <div key={item.title} className={`sp-why-choose-card ${item.color}`}>
                <div className="sp-why-choose-icon">{Icon ? <Icon size={22} /> : null}</div>
                <p className="sp-card-title-1l sp-why-choose-title">{item.title}</p>
                <p className="sp-card-desc-3l sp-why-choose-desc">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceWhyChooseSection;
