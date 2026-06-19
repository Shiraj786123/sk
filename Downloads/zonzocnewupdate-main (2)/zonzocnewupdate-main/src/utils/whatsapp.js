export const WHATSAPP_PHONE = '94740309534';

const DEFAULT_MESSAGE =
  "Hi ZonzocTech, I'm interested in your services. Could you please share more details and a free proposal?";

const SERVICE_MESSAGES = {
  '/seo-services':
    "Hi ZonzocTech, I'm interested in your SEO Services. Could you please share more details and a free proposal?",
  '/seo-ai-search-optimization':
    "Hi ZonzocTech, I'm interested in your SEO & AI Search Optimization services. Could you please share more details?",
  '/ai-website-design-development':
    "Hi ZonzocTech, I'm interested in AI Website Design & Development. Could you please share more details?",
  '/ai-web-application-development':
    "Hi ZonzocTech, I'm interested in AI Web Application Development. Could you please share more details?",
  '/full-stack-web-development':
    "Hi ZonzocTech, I'm interested in Full-Stack Web Development. Could you please share more details?",
  '/ecommerce-development-optimization':
    "Hi ZonzocTech, I'm interested in E-commerce Development & Optimization. Could you please share more details?",
  '/website-maintenance-performance-security':
    "Hi ZonzocTech, I'm interested in Website Maintenance, Performance & Security. Could you please share more details?",
  '/ai-software-development':
    "Hi ZonzocTech, I'm interested in AI Software Development. Could you please share more details?",
  '/contact':
    "Hi ZonzocTech, I'd like to get in touch about a project. Could you please help me get started?",
  '/about':
    "Hi ZonzocTech, I visited your About page and would like to learn more about working with your team.",
  '/services':
    "Hi ZonzocTech, I'm exploring your services and would like to discuss which option fits my business best.",
  '/case-studies':
    "Hi ZonzocTech, I reviewed your case studies and I'm interested in similar results for my business.",
};

export function getWhatsAppMessageForPath(pathname) {
  if (!pathname) return DEFAULT_MESSAGE;

  if (SERVICE_MESSAGES[pathname]) {
    return SERVICE_MESSAGES[pathname];
  }

  if (pathname.startsWith('/case-studies/')) {
    return "Hi ZonzocTech, I read one of your case studies and I'm interested in similar results. Could we discuss my project?";
  }

  return DEFAULT_MESSAGE;
}

export function getWhatsAppUrl(pathname, customMessage) {
  const message = customMessage || getWhatsAppMessageForPath(pathname);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
