import './globals.css';
import type { Metadata } from 'next';
import { Josefin_Sans } from 'next/font/google';

const josefinSans = Josefin_Sans({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Omnihale App',
  description: 'Welcome to the Omnihale web application',
  icons: '/logo.svg',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={josefinSans.className}>
        <div id='modal'></div>
        {children}
      </body>
    </html>
  );
}
