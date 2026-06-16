// app/services/page.jsx
import ServicesPage from '@/src/components/Servicespage'; // Points to your Servicespage.jsx component

export const metadata = {
  title: 'Web Development & Digital Marketing Services Powered by AI | ZonzocTech',
  description:
    'ZonzocTech delivers complete digital growth stacks for UK & USA businesses. From AI-powered websites and custom software to premium SEO and high-performance ecommerce platforms.',
  alternates: { canonical: 'https://zonzoctech.com/services' },
  openGraph: {
    title: 'Web Development & Digital Marketing Services Powered by AI | ZonzocTech',
    description:
      'ZonzocTech delivers complete digital growth stacks for UK & USA businesses. From AI-powered websites and custom software to premium SEO and high-performance ecommerce platforms.',
    url: 'https://zonzoctech.com/services',
  },
};

export default function ServicesHubPage() {
  return <ServicesPage />;
}