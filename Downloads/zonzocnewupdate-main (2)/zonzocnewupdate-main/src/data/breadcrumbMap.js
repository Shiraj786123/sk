export const breadcrumbMap = {
  '/services': [
    { name: 'Home', link: '/' },
    { name: 'Services' },
  ],
  '/ai-website-design-development': [
    { name: 'Home', link: '/' },
    { name: 'Services', link: '/services' },
    { name: 'AI Website Design & Development' },
  ],
  '/ai-web-application-development': [
    { name: 'Home', link: '/' },
    { name: 'Services', link: '/services' },
    { name: 'AI Web Application Development' },
  ],
  '/ai-software-development': [
    { name: 'Home', link: '/' },
    { name: 'Services', link: '/services' },
    { name: 'AI Software Development' },
  ],
  '/full-stack-web-development': [
    { name: 'Home', link: '/' },
    { name: 'Services', link: '/services' },
    { name: 'Full-Stack Web Development' },
  ],
  '/ecommerce-development-optimization': [
    { name: 'Home', link: '/' },
    { name: 'Services', link: '/services' },
    { name: 'Ecommerce Development & Optimization' },
  ],
  '/website-maintenance-performance-security': [
    { name: 'Home', link: '/' },
    { name: 'Services', link: '/services' },
    { name: 'Website Maintenance & Security' },
  ],
  '/seo-services': [
    { name: 'Home', link: '/' },
    { name: 'Services', link: '/services' },
    { name: 'SEO Services' },
  ],
  '/seo-ai-search-optimization': [
    { name: 'Home', link: '/' },
    { name: 'Services', link: '/services' },
    { name: 'SEO Services', link: '/seo-services' },
    { name: 'SEO & AI Search Optimization' },
  ],
  '/case-studies': [
    { name: 'Home', link: '/' },
    { name: 'Case Studies' },
  ],
  '/case-studies/vitamina-project': [
    { name: 'Home', link: '/' },
    { name: 'Case Studies', link: '/case-studies' },
    { name: 'Vitamina Project' },
  ],
  '/case-studies/best-life-nl': [
    { name: 'Home', link: '/' },
    { name: 'Case Studies', link: '/case-studies' },
    { name: 'Best Life NL' },
  ],
  '/case-studies/koning-bamboe': [
    { name: 'Home', link: '/' },
    { name: 'Case Studies', link: '/case-studies' },
    { name: 'Koning Bamboe' },
  ],
  '/case-studies/basildon-acr': [
    { name: 'Home', link: '/' },
    { name: 'Case Studies', link: '/case-studies' },
    { name: 'Basildon ACR' },
  ],
  '/case-studies/frau-rauchfrei': [
    { name: 'Home', link: '/' },
    { name: 'Case Studies', link: '/case-studies' },
    { name: 'Frau Rauchfrei' },
  ],
  '/case-studies/asj-hardscapes': [
    { name: 'Home', link: '/' },
    { name: 'Case Studies', link: '/case-studies' },
    { name: 'ASJ Hardscapes' },
  ],
  '/about': [
    { name: 'Home', link: '/' },
    { name: 'About Us' },
  ],
  '/contact': [
    { name: 'Home', link: '/' },
    { name: 'Contact Info' },
  ],
  '/privacy-policy': [
    { name: 'Home', link: '/' },
    { name: 'Privacy Policy' },
  ],
  '/terms-conditions': [
    { name: 'Home', link: '/' },
    { name: 'Terms & Conditions' },
  ],
};

export function getBreadcrumbs(pathname) {
  if (!pathname || pathname === '/') return null;

  let crumbs = breadcrumbMap[pathname];

  if (!crumbs && pathname.startsWith('/case-studies/')) {
    const projectName = pathname
      .split('/')
      .pop()
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    crumbs = [
      { name: 'Home', link: '/' },
      { name: 'Case Studies', link: '/case-studies' },
      { name: projectName },
    ];
  }

  return crumbs || null;
}
