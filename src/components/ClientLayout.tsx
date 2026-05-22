'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NotificationProvider } from './NotificationContext';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Disable the browser's default scroll restoration on refresh
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      // Force scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  if (isAdmin) {
    return (
      <NotificationProvider>
        <main className="flex-grow">{children}</main>
      </NotificationProvider>
    );
  }

  return (
    <NotificationProvider>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </NotificationProvider>
  );
}
