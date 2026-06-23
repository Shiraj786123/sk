import AIWebAppPage from '@/src/views/AIWebAppPage';
import BreadcrumbJsonLd from '@/src/components/BreadcrumbJsonLd';

export const metadata = {
  title: 'AI Web Application Development Company UK & USA | ZonzocTech',
  description:
    'ZonzocTech is a custom AI web application development company serving businesses in the UK and USA. We build intelligent web apps, SaaS platforms and GPT-powered tools that automate and scale your business.',
  alternates: { canonical: 'https://zonzoctech.com/ai-web-application-development' },
  openGraph: {
    title: 'AI Web Application Development Company UK & USA | ZonzocTech',
    description:
      'ZonzocTech is a custom AI web application development company serving businesses in the UK and USA. We build intelligent web apps, SaaS platforms and GPT-powered tools that automate and scale your business.',
    url: 'https://zonzoctech.com/ai-web-application-development',
  },
};

export default function AiWebAppPage() {
  return (
    <>
      <BreadcrumbJsonLd pathname="/ai-web-application-development" />
      <AIWebAppPage />
    </>
  );
}
