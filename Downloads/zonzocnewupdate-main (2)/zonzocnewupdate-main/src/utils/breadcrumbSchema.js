export const SITE_URL = 'https://zonzoctech.com';

export function buildBreadcrumbSchema(crumbs, pathname) {
  if (!crumbs?.length || !pathname) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => {
      const href =
        crumb.link && crumb.link !== '#'
          ? `${SITE_URL}${crumb.link}`
          : `${SITE_URL}${pathname}`;

      return {
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: href,
      };
    }),
  };
}
