import ScrollToTop from "@/src/components/ScrollToTop";

// FONT IMPORTS
import { Poppins, Syne, DM_Sans } from 'next/font/google';

import { AuthProvider } from '@/src/context/AuthContext';
import WhatsappFloat from '@/src/components/WhatsappFloat';

import '@/src/index.css';
import '@/src/App.css';
import '@/src/styles/service-shared.css';
import "@/src/styles/navbar.css";

// POPPINS (MAIN BODY FONT)
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-b',
  display: 'swap',
});

// HEADING FONT
const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-h',
  display: 'swap',
});

// OPTIONAL FONT (if you still use it somewhere)
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'ZonzocTech | AI Web Development, SEO & Digital Growth Agency',
    template: '%s | ZonzocTech',
  },
  description:
    'ZonzocTech builds high-converting websites, drives targeted traffic, and automates businesses with AI. Serving UK and US clients.',
  metadataBase: new URL('https://zonzoctech.com'),
  icons: {
    icon: '/zonzotech-favicon5.png?v=2',
    shortcut: '/zonzotech-favicon5.png?v=2',
    apple: '/zonzotech-favicon5.png?v=2',
  },
  openGraph: {
    siteName: 'ZonzocTech',
    images: [{ url: '/zonzotech-favicon5.png?v=2' }],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${syne.variable} ${dmSans.variable}`}
    >
      <head>
        <link rel="icon" href="/zonzotech-favicon5.png?v=2" type="image/png" />
      </head>

      <body className={poppins.className}>
        <AuthProvider>
          {children}
          <WhatsappFloat />
          <ScrollToTop />
        </AuthProvider>
      </body>
    </html>
  );
}