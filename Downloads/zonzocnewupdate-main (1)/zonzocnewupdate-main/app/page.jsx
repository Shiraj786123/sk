import HomePage from '@/src/views/Home';


export const metadata = {
  title: 'ZonzocTech | AI Web Development, SEO & Digital Growth Agency',
  description:
    'We build high-converting websites, drive targeted traffic, and automate your business with AI to help you grow faster. Serving UK and US clients.',
  alternates: { canonical: 'https://zonzoctech.com/' },
  openGraph: {
    title: 'ZonzocTech | AI Web Development, SEO & Digital Growth Agency',
    description:
      'We build high-converting websites, drive targeted traffic, and automate your business with AI.',
    url: 'https://zonzoctech.com/',
  },
};

export default function RootPage() {
  return <HomePage />;
}
