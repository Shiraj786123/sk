import FullStackWebDev from '@/src/views/FullStackWebDev';

export const metadata = {
  title: 'Full Stack Web Development Agency UK & USA | ZonzocTech',
  description:
    'ZonzocTech is a full stack web development agency serving businesses in the UK and USA. We build custom web applications, MVPs and SaaS platforms using React, Next.js, Node.js and Spring Boot. Get a free consultation today.',
  alternates: { canonical: 'https://zonzoctech.com/full-stack-web-development' },
  openGraph: {
    title: 'Full Stack Web Development Agency UK & USA | ZonzocTech',
    description:
      'ZonzocTech is a full stack web development agency serving businesses in the UK and USA. We build custom web applications, MVPs and SaaS platforms using React, Next.js, Node.js and Spring Boot. Get a free consultation today.',
    url: 'https://zonzoctech.com/full-stack-web-development',
  },
};

export default function FullStackPage() {
  return <FullStackWebDev />;
}
