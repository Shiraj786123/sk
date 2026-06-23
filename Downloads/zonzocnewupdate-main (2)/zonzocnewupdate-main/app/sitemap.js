import { SITE_URL, sitemapRoutes } from '@/src/data/sitemapRoutes';

export default function sitemap() {
  const lastModified = new Date();

  return sitemapRoutes.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
