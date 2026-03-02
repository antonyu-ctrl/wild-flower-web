import type { Metadata } from 'next';
import { cormorant, inter } from '@/styles/fonts';
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Wild Flower — Handmade with Intention',
    template: '%s | Wild Flower',
  },
  description:
    'Artisan handmade fashion inspired by nature. Crafted with care for the modern bohemian spirit.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${inter.variable}`}>
        <CartProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
