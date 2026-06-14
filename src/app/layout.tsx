import type { Metadata } from 'next';
import { Cormorant_Garamond, Playfair_Display } from 'next/font/google';

import './globals.css';

import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';

const body = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
});

const heading = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Charmify',
  description: 'Custom Charm Bracelet',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="id" className={`${body.variable} ${heading.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;