const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

async function generate() {
  const { SITE_URL, sitemapRoutes } = await import('./src/data/sitemapRoutes.js');

  const sitemap = new SitemapStream({ hostname: SITE_URL });
  const writeStream = createWriteStream('./public/sitemap.xml');

  sitemap.pipe(writeStream);

  sitemapRoutes.forEach(({ path, priority, changeFrequency }) => {
    sitemap.write({ url: path, priority, changefreq: changeFrequency });
  });

  sitemap.end();

  await streamToPromise(sitemap);
  console.log('Sitemap generated with', sitemapRoutes.length, 'URLs →', './public/sitemap.xml');
}

generate().catch((error) => {
  console.error('Sitemap generation failed:', error);
  process.exit(1);
});
