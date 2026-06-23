import AIOptimizationPage from '@/src/views/AIOptimizationPage';
import BreadcrumbJsonLd from '@/src/components/BreadcrumbJsonLd';

export const metadata = {
  title: 'AI SEO & Search Optimization Agency UK — GEO, AEO & AI Search | ZonzocTech',
  description:
    'ZonzocTech is an AI SEO agency helping UK and USA businesses get found on Google, ChatGPT, Perplexity and AI-powered search engines. We specialize in GEO, AEO and AI search optimization.',
  alternates: { canonical: 'https://zonzoctech.com/seo-ai-search-optimization' },
  openGraph: {
    title: 'AI SEO & Search Optimization Agency UK — GEO, AEO & AI Search | ZonzocTech',
    description:
      'ZonzocTech is an AI SEO agency helping UK and USA businesses get found on Google, ChatGPT, Perplexity and AI-powered search engines. We specialize in GEO, AEO and AI search optimization.',
    url: 'https://zonzoctech.com/seo-ai-search-optimization',
  },
};

export default function AiSearchOptimizationPage() {
  return (
    <>
      <BreadcrumbJsonLd pathname="/seo-ai-search-optimization" />
      <AIOptimizationPage />
    </>
  );
}
