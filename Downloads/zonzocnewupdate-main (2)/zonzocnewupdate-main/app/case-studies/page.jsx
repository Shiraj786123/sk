import CaseStudies from '@/src/views/CaseStudies';
import BreadcrumbJsonLd from '@/src/components/BreadcrumbJsonLd';

export const metadata = {
  title: 'Case Studies | Proven SEO & AI Results',
  description:
    'Explore real-world success stories showcasing measurable growth through AI-driven SEO and advanced web strategies.',
  alternates: { canonical: 'https://zonzoctech.com/case-studies' },
  openGraph: {
    title: 'Case Studies | Proven SEO & AI Results',
    description:
      'Explore real-world success stories showcasing measurable growth through AI-driven SEO and advanced web strategies.',
    url: 'https://zonzoctech.com/case-studies',
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <BreadcrumbJsonLd pathname="/case-studies" />
      <CaseStudies />
    </>
  );
}
