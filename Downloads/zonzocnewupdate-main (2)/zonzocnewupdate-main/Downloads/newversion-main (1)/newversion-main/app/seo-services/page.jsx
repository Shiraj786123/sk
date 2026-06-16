import SEOServices from '@/src/views/SEOServices';

export const metadata = {
  title: 'SEO Agency for Small Business UK & USA | ZonzocTech',
  description:
    'ZonzocTech is an AI SEO agency serving small businesses across the UK and USA. We deliver leads and revenue — not just rankings. Get your free SEO audit today.',
  alternates: { canonical: 'https://zonzoctech.com/seo-services' },
  openGraph: {
    title: 'SEO Agency for Small Business UK & USA | ZonzocTech',
    description:
      'ZonzocTech is an AI SEO agency serving small businesses across the UK and USA. We deliver leads and revenue — not just rankings. Get your free SEO audit today.',
    url: 'https://zonzoctech.com/seo-services',
  },
};

export default function SeoServicesPage() {
  return <SEOServices />;
}
