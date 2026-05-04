import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DynamicSEO, { FooterScripts } from "@/components/DynamicSEO";
import ClientLayout from "@/components/ClientLayout";
import ClientSEO from "@/components/ClientSEO";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata is now handled dynamically via DynamicSEO component

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <DynamicSEO />
        <ClientSEO />
        <ClientLayout>{children}</ClientLayout>
        <FooterScripts />
      </body>
    </html>
  );
}
