import { Cormorant_Garamond, Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

export const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

export const nanumKimYuYi = localFont({
  src: '../fonts/NanumKimYuYi.ttf',
  variable: '--font-korean',
  display: 'swap',
  declarations: [
    { prop: 'size-adjust', value: '150%' },
  ],
});
