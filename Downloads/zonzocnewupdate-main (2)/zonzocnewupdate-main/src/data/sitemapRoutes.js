export const SITE_URL = 'https://zonzoctech.com';

// Public, indexable routes only — no auth pages, redirects, or dynamic segments.
export const sitemapRoutes = [
  { path: '/', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/services', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/seo-services', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/seo-ai-search-optimization', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/ai-software-development', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/ai-web-application-development', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/ai-website-design-development', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/full-stack-web-development', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/ecommerce-development-optimization', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/website-maintenance-performance-security', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/case-studies', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/case-studies/asj-hardscapes', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/case-studies/basildon-acr', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/case-studies/best-life-nl', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/case-studies/frau-rauchfrei', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/case-studies/koning-bamboe', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/case-studies/vitamina-project', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms-conditions', changeFrequency: 'yearly', priority: 0.3 },
];
