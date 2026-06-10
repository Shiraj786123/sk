const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

const baseUrl = "https://zonzoctech.com";

// All public, crawlable routes — no dynamic segments, no auth-gated pages
const routes = [
  { url: "/",                                          priority: 1.0, changefreq: "weekly"  },
  { url: "/ai-seo",                                    priority: 0.9, changefreq: "monthly" },
  { url: "/seo-services",                              priority: 0.9, changefreq: "monthly" },
  { url: "/google-search-console",                     priority: 0.8, changefreq: "monthly" },
  { url: "/seo-ai-search-optimization",                priority: 0.9, changefreq: "monthly" },
  { url: "/ai-software-development",                   priority: 0.9, changefreq: "monthly" },
  { url: "/full-stack-web-development",                priority: 0.9, changefreq: "monthly" },
  { url: "/ai-website-design-development",             priority: 0.9, changefreq: "monthly" },
  { url: "/ai-web-application-development",            priority: 0.9, changefreq: "monthly" },
  { url: "/ecommerce-development-optimization",        priority: 0.8, changefreq: "monthly" },
  { url: "/website-maintenance-performance-security",  priority: 0.8, changefreq: "monthly" },
  { url: "/about",                                     priority: 0.7, changefreq: "monthly" },
  { url: "/case-studies",                              priority: 0.8, changefreq: "monthly" },
  { url: "/contact",                                   priority: 0.7, changefreq: "monthly" },
  { url: "/privacy-policy",                            priority: 0.3, changefreq: "yearly"  },
  { url: "/terms-conditions",                          priority: 0.3, changefreq: "yearly"  },
];

const sitemap = new SitemapStream({ hostname: baseUrl });
const writeStream = createWriteStream("./public/sitemap.xml");

sitemap.pipe(writeStream);

routes.forEach(({ url, priority, changefreq }) => {
  sitemap.write({ url, priority, changefreq });
});

sitemap.end();

streamToPromise(sitemap).then(() => {
  console.log("Sitemap generated with", routes.length, "URLs →", "./public/sitemap.xml");
});
