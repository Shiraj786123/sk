import TermsConditions from '@/src/views/TermsConditions';
import BreadcrumbJsonLd from '@/src/components/BreadcrumbJsonLd';

export const metadata = {
  title: "Terms & Conditions | Zonzoctech Services Agreement",
  description:
    "Review Zonzoctech's service terms, project policies, intellectual property rights, and legal agreements.",
  alternates: { canonical: 'https://zonzoctech.com/terms-conditions' },
  openGraph: {
    title: "Terms & Conditions | Zonzoctech Services Agreement",
    description:
      "Review Zonzoctech's service terms, project policies, intellectual property rights, and legal agreements.",
    url: 'https://zonzoctech.com/terms-conditions',
  },
};

export default function TermsConditionsPage() {
  return (
    <>
      <BreadcrumbJsonLd pathname="/terms-conditions" />
      <TermsConditions />
    </>
  );
}
