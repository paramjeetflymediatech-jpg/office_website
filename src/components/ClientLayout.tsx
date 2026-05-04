'use client';

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
