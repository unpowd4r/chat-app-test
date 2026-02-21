import type { Metadata } from 'next';
import { Geist } from 'next/font/google';

import './globals.css';

const geistSans = Geist({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'chat test app',
  description: 'chat test app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>
        <div className="flex min-h-screen items-center justify-center p-10 font-sans">
          {children}
        </div>
      </body>
    </html>
  );
}
