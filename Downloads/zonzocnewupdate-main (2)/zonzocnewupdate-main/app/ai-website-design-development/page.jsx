import AIWebsiteDesign from '@/src/views/AIWebsiteDesign';
import BreadcrumbJsonLd from '@/src/components/BreadcrumbJsonLd';

export const metadata = {
  title: 'AI Website Design Agency UK & USA — High-Converting Websites | ZonzocTech',
  description:
    'ZonzocTech is an AI website design agency serving small businesses across the UK and USA. We build high-converting, fast and beautiful websites that generate leads and grow your business.',
  alternates: { canonical: 'https://zonzoctech.com/ai-website-design-development' },
  openGraph: {
    title: 'AI Website Design Agency UK & USA — High-Converting Websites | ZonzocTech',
    description:
      'ZonzocTech is an AI website design agency serving small businesses across the UK and USA. We build high-converting, fast and beautiful websites that generate leads and grow your business.',
    url: 'https://zonzoctech.com/ai-website-design-development',
  },
};

export default function AiWebsiteDesignPage() {
  return (
    <>
      <BreadcrumbJsonLd pathname="/ai-website-design-development" />
      <AIWebsiteDesign />
    </>
  );
}
