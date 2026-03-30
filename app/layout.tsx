import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import JsonLd from '@/components/sections/JsonLd';
import { content } from '@/lib/content';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });

export const metadata: Metadata = {
  title: {
    default: `${content.business.name} — Cafe & Bakery in Caulfield`,
    template: `%s | ${content.business.name}`,
  },
  description: content.business.description,
  keywords: content.seo?.keywords || [],
  authors: [{ name: content.business.name }],
  creator: content.business.name,
  metadataBase: new URL(content.seo?.siteUrl || 'https://communalmarket.com.au'),
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: content.seo?.siteUrl || '/',
    siteName: content.business.name,
    title: `${content.business.name} — Cafe & Bakery in Caulfield`,
    description: content.business.description,
    images: [{ url: '/assets/images/photo-00.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: content.business.name,
    description: content.business.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: { canonical: content.seo?.siteUrl || '/' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans" style={{ fontFamily: 'var(--font-inter, system-ui)' }}>
        <JsonLd />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
