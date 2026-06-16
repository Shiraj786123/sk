import AboutUs from '@/src/views/AboutUs';

export const metadata = {
  title: 'About ZonzocTech | AI Web Development Agency Serving UK & USA',
  description:
    'ZonzocTech is an AI-powered web development agency based in Sri Lanka, serving businesses across the UK and USA. We build websites, drive traffic and automate growth.',
  alternates: { canonical: 'https://zonzoctech.com/about' },
  openGraph: {
    title: 'About ZonzocTech | AI Web Development Agency Serving UK & USA',
    description:
      'ZonzocTech is an AI-powered web development agency based in Sri Lanka, serving businesses across the UK and USA. We build websites, drive traffic and automate growth.',
    url: 'https://zonzoctech.com/about',
  },
};

export default function AboutPage() {
  return <AboutUs />;
}
