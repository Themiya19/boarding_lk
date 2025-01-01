import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { RootContent } from './root-content';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BoardingBuddy - Find Your Perfect Stay',
  description: 'Discover and book the best boarding places near you',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <RootContent className={`${inter.className} flex flex-col min-h-screen`}>
        {children}
      </RootContent>
    </html>
  );
}