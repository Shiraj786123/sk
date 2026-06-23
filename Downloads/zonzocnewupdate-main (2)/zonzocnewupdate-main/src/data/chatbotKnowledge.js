export const QUICK_REPLIES = [
  'Our Services',
  'Get a Quote',
  'SEO & Growth',
  'Talk to Human',
];

export const SERVICE_LINKS = [
  { label: 'AI Website Design', href: '/ai-website-design-development' },
  { label: 'AI Web Apps', href: '/ai-web-application-development' },
  { label: 'AI Software', href: '/ai-software-development' },
  { label: 'Full-Stack Development', href: '/full-stack-web-development' },
  { label: 'Ecommerce', href: '/ecommerce-development-optimization' },
  { label: 'SEO Services', href: '/seo-services' },
  { label: 'AI SEO', href: '/seo-ai-search-optimization' },
  { label: 'Website Maintenance', href: '/website-maintenance-performance-security' },
];

function includesAny(text, words) {
  return words.some((word) => text.includes(word));
}

export function getChatbotReply(input) {
  const text = input.toLowerCase().trim();

  if (!text) {
    return {
      text: 'Type a message or pick a quick option below — I\'m here to help!',
      links: [{ label: 'View All Services', href: '/services' }],
    };
  }

  if (includesAny(text, ['hello', 'hi', 'hey', 'good morning', 'good afternoon'])) {
    return {
      text: 'Hello! I\'m Zonzo, your AI assistant at ZonzocTech. I can help you explore our services, pricing, or connect you with our team. What are you looking to build?',
      links: [{ label: 'Browse Services', href: '/services' }],
    };
  }

  if (includesAny(text, ['service', 'services', 'what do you do', 'offer'])) {
    return {
      text: 'We build AI-powered websites, custom software, SEO campaigns, and ecommerce stores for UK & USA businesses. Here are our core services:',
      links: SERVICE_LINKS.slice(0, 5),
    };
  }

  if (includesAny(text, ['seo', 'google', 'ranking', 'traffic', 'search'])) {
    return {
      text: 'Our SEO team helps you rank on Google and AI search engines like ChatGPT and Perplexity. We offer traditional SEO and AI search optimization (GEO/AEO).',
      links: [
        { label: 'SEO Services', href: '/seo-services' },
        { label: 'AI SEO & Search', href: '/seo-ai-search-optimization' },
      ],
    };
  }

  if (includesAny(text, ['website', 'web design', 'web development', 'design'])) {
    return {
      text: 'We design and develop high-converting, AI-enhanced websites — from corporate sites to full custom platforms.',
      links: [
        { label: 'AI Website Design', href: '/ai-website-design-development' },
        { label: 'Full-Stack Development', href: '/full-stack-web-development' },
      ],
    };
  }

  if (includesAny(text, ['app', 'application', 'saas', 'software', 'chatbot', 'automation', 'ai'])) {
    return {
      text: 'We build custom AI software — web apps, SaaS platforms, chatbots, GPT integrations, and business automation tools.',
      links: [
        { label: 'AI Web Applications', href: '/ai-web-application-development' },
        { label: 'AI Software Development', href: '/ai-software-development' },
      ],
    };
  }

  if (includesAny(text, ['ecommerce', 'e-commerce', 'shop', 'shopify', 'woocommerce', 'store'])) {
    return {
      text: 'We build and optimize ecommerce stores on Shopify, WooCommerce, and custom platforms — focused on conversions and speed.',
      links: [{ label: 'Ecommerce Development', href: '/ecommerce-development-optimization' }],
    };
  }

  if (includesAny(text, ['maintenance', 'security', 'support', 'hosting', 'speed'])) {
    return {
      text: 'Our maintenance plans keep your site fast, secure, and updated — including performance monitoring, backups, and security patches.',
      links: [{ label: 'Website Maintenance', href: '/website-maintenance-performance-security' }],
    };
  }

  if (includesAny(text, ['price', 'pricing', 'cost', 'budget', 'quote', 'how much'])) {
    return {
      text: 'Project budgets typically start from $500 and scale based on scope. Every project begins with a free consultation — no obligation.',
      links: [
        { label: 'Get Free Quote', href: '/contact' },
        { label: 'View Case Studies', href: '/case-studies' },
      ],
    };
  }

  if (includesAny(text, ['case study', 'case studies', 'portfolio', 'work', 'projects', 'results'])) {
    return {
      text: 'We\'ve helped businesses across the UK, USA, and Europe grow with better websites and SEO. Check out our case studies for real results.',
      links: [{ label: 'View Case Studies', href: '/case-studies' }],
    };
  }

  if (includesAny(text, ['about', 'who are you', 'company', 'team', 'zonzoctech'])) {
    return {
      text: 'ZonzocTech is an AI-powered web development agency based in Sri Lanka, serving clients across the UK and USA since 2020.',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Contact Us', href: '/contact' },
      ],
    };
  }

  if (includesAny(text, ['contact', 'email', 'phone', 'call', 'human', 'expert', 'speak', 'talk'])) {
    return {
      text: 'You can reach us at info@zonzoctech.com or via WhatsApp. We typically respond within 1–3 business hours.',
      links: [
        { label: 'Contact Page', href: '/contact' },
        { label: 'Email Us', href: 'mailto:info@zonzoctech.com' },
      ],
    };
  }

  if (includesAny(text, ['uk', 'usa', 'us', 'london', 'america', 'international'])) {
    return {
      text: 'Yes! We work with clients across the UK, USA, and worldwide. Our team handles timezone-friendly communication and delivery.',
      links: [{ label: 'Start a Project', href: '/contact' }],
    };
  }

  if (includesAny(text, ['thank', 'thanks', 'bye', 'goodbye'])) {
    return {
      text: 'You\'re welcome! Feel free to come back anytime. Good luck with your project!',
      links: [{ label: 'Get Free Consultation', href: '/contact' }],
    };
  }

  return {
    text: 'I\'m not sure about that one, but our team can help! Try asking about services, pricing, SEO, or contact options.',
    links: [
      { label: 'Contact Our Team', href: '/contact' },
      { label: 'All Services', href: '/services' },
    ],
  };
}

export function mapQuickReply(label) {
  const map = {
    'Our Services': 'What services do you offer?',
    'Get a Quote': 'How much does a project cost?',
    'SEO & Growth': 'Tell me about your SEO services',
    'Talk to Human': 'I want to speak to an expert',
  };
  return map[label] || label;
}
