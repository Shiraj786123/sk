import AISoftwareServices from '@/src/views/AISoftwareServices';
import BreadcrumbJsonLd from '@/src/components/BreadcrumbJsonLd';

export const metadata = {
  title: 'AI Software Development Company UK & USA — Automation, Chatbots & GPT Integration | ZonzocTech',
  description:
    'ZonzocTech is a custom AI software development company serving businesses across the UK and USA. We build business automation tools, AI chatbots, GPT integrations and intelligent workflow systems that save time and scale operations.',
  alternates: { canonical: 'https://zonzoctech.com/ai-software-development' },
  openGraph: {
    title: 'AI Software Development Company UK & USA — Automation, Chatbots & GPT Integration | ZonzocTech',
    description:
      'ZonzocTech is a custom AI software development company serving businesses across the UK and USA. We build business automation tools, AI chatbots, GPT integrations and intelligent workflow systems that save time and scale operations.',
    url: 'https://zonzoctech.com/ai-software-development',
  },
};

export default function AiSoftwarePage() {
  return (
    <>
      <BreadcrumbJsonLd pathname="/ai-software-development" />
      <AISoftwareServices />
    </>
  );
}
