import WebsiteMaintenance from '@/src/views/WebsiteMaintenance';
import Breadcrumb from '@/src/components/Breadcrumb';

export const metadata = {
  title: 'Website Maintenance Services UK & USA — Speed, Security & Performance | ZonzocTech',
  description:
    'ZonzocTech provides professional website maintenance services for businesses across the UK and USA. We keep your website fast, secure and fully optimised — so you never lose leads to downtime or slow performance.',
  alternates: { canonical: 'https://zonzoctech.com/website-maintenance-performance-security' },
  openGraph: {
    title: 'Website Maintenance Services UK & USA — Speed, Security & Performance | ZonzocTech',
    description:
      'ZonzocTech provides professional website maintenance services for businesses across the UK and USA. We keep your website fast, secure and fully optimised — so you never lose leads to downtime or slow performance.',
    url: 'https://zonzoctech.com/website-maintenance-performance-security',
  },
};

export default function WebsiteMaintenancePage() {
  return <WebsiteMaintenance />;
}
