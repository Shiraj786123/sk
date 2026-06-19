import {
  Activity,
  BarChart3,
  Bot,
  Building2,
  CheckCircle2,
  Clock,
  Code2,
  Cpu,
  Eye,
  Gauge,
  Globe,
  Layers,
  Layout,
  Search,
  Shield,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';

/** Explicit icon per hero feature label (all service pages) */
export const HERO_FEATURE_ICONS = {
  // AI Software
  'Trusted in USA, UK & UAE': Globe,
  '5-Star Client Rating': Star,
  'Enterprise-Ready Solutions': Building2,

  // AI Web App
  'AI Powered Solutions': Sparkles,
  'Scalable Architecture': Layers,
  'Secure & Reliable': ShieldCheck,

  // AI Website Design
  'Modern Design': Layout,
  'SEO Friendly': Search,
  'AI Integration': Cpu,
  'High Converting': Target,

  // Full Stack
  'Modern Tech Stack': Code2,
  'On-Time Delivery': Clock,

  // SEO
  'Higher Rankings': TrendingUp,
  'Qualified Organic Traffic': Users,
  'Transparent Reporting': BarChart3,

  // AI SEO
  'GEO & AEO Expertise': Bot,
  'AI Platform Visibility': Eye,
  'Future-Proof Strategy': TrendingUp,

  // Ecommerce
  'Conversion-Focused Design': Target,
  'Shopify & WooCommerce Experts': ShoppingCart,
  'Speed & SEO Optimized': Gauge,

  // Website Maintenance
  'Speed Optimized': Zap,
  'Secure & Protected': Shield,
  '24/7 Monitoring': Activity,
};

const FALLBACK_ICONS = [Sparkles, ShieldCheck, Target];

export function resolveHeroFeature(feature, index = 0) {
  if (typeof feature === 'object' && feature !== null) {
    const text = feature.text || feature.label || '';
    const icon = feature.icon || HERO_FEATURE_ICONS[text] || FALLBACK_ICONS[index] || CheckCircle2;
    return { text, icon };
  }

  const text = String(feature);
  return {
    text,
    icon: HERO_FEATURE_ICONS[text] || FALLBACK_ICONS[index] || CheckCircle2,
  };
}

export function normalizeHeroFeatures(features) {
  return features.map((feature, index) => resolveHeroFeature(feature, index));
}
