"use client";

import { usePathname } from 'next/navigation';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { Providers } from "./providers";

export function RootContent({ 
  children,
  className,
}: { 
  children: React.ReactNode;
  className: string;
}) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';

  return (
    <body className={className} suppressHydrationWarning>
      <Providers>
        <Navigation />
        <main className="flex-grow">{children}</main>
        {!isLoginPage && <Footer />}
        <Toaster />
      </Providers>
    </body>
  );
} 