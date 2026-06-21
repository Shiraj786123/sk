'use client';

import React from 'react';
import {
  Activity,
  BarChart3,
  Bell,
  Bot,
  Calendar,
  Cpu,
  Database,
  FileBarChart,
  FileText,
  PieChart,
  RefreshCw,
  Search,
  Settings,
  Sparkles,
  Target,
  UserCheck,
  Users,
  Workflow,
  Zap,
  MessageSquare,
} from 'lucide-react';
import { serviceAiFeaturesContent } from '../data/serviceAiFeaturesContent';
import '../styles/ServiceAiFeaturesSection.css';

const ICON_MAP = {
  Bot,
  FileText,
  Target,
  Sparkles,
  Settings,
  Users,
  Calendar,
  UserCheck,
  PieChart,
  RefreshCw,
  Bell,
  Activity,
  Cpu,
  FileBarChart,
  BarChart3,
  Search,
  Zap,
  Workflow,
  Database,
  MessageSquare,
};

const ServiceAiFeaturesSection = ({ serviceKey }) => {
  const content = serviceAiFeaturesContent[serviceKey];
  if (!content?.items?.length) return null;

  return (
    <section className="sp-ai-features-section">
      <div className="sp-ai-features-container">
        <div className="sp-ai-features-header">
          <span className="sp-ai-features-badge">{content.badge}</span>
        </div>
        <div className="sp-ai-features-grid">
          {content.items.map((item) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <div className="sp-ai-feature-item" key={item.label}>
                <div className="sp-ai-feature-icon">
                  {Icon ? <Icon size={26} strokeWidth={2} /> : null}
                </div>
                <span className="sp-ai-feature-label">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceAiFeaturesSection;
