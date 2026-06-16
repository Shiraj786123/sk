import PrivacyPolicy from '@/src/views/PrivacyPolicy';

export const metadata = {
  title: 'Privacy Policy | Zonzoctech Data Protection Standards',
  description:
    'Learn how Zonzoctech collects, protects, and manages user data in compliance with global privacy standards and secure web practices.',
  alternates: { canonical: 'https://zonzoctech.com/privacy-policy' },
  openGraph: {
    title: 'Privacy Policy | Zonzoctech Data Protection Standards',
    description:
      'Learn how Zonzoctech collects, protects, and manages user data in compliance with global privacy standards.',
    url: 'https://zonzoctech.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
