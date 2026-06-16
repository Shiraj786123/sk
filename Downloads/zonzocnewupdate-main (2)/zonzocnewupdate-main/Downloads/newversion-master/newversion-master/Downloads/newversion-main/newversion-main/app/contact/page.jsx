import ContactPage from '@/src/views/ContactPage';

export const metadata = {
  title: 'Contact ZonzocTech — Get Your Free Growth Plan | UK & USA',
  description:
    'Contact ZonzocTech for a free website growth plan, SEO audit or development consultation. We serve businesses across the UK and USA. Response within 24 hours guaranteed.',
  alternates: { canonical: 'https://zonzoctech.com/contact' },
  openGraph: {
    title: 'Contact ZonzocTech — Get Your Free Growth Plan | UK & USA',
    description:
      'Contact ZonzocTech for a free website growth plan, SEO audit or development consultation. We serve businesses across the UK and USA. Response within 24 hours guaranteed.',
    url: 'https://zonzoctech.com/contact',
  },
};

export default function ContactPageRoute() {
  return <ContactPage />;
}
