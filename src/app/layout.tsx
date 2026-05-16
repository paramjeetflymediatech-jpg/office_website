import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import DynamicSEO, { FooterScripts } from "@/components/DynamicSEO";
import ClientLayout from "@/components/ClientLayout";
import ClientSEO from "@/components/ClientSEO";
import { getSEOConfig } from "@/app/actions/seo";
import { PageSEO } from "@/models";
import { headers } from "next/headers";
export const dynamic = "force-dynamic";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

function formatDynamicMetadata(path: string, businessName = "Fly Media Technology") {
  if (!path || path === '/' || path === '/index') {
    return {
      title: `${businessName} | Result-Oriented Digital Marketing Solutions`,
      description: "Make your business reach new heights of digital success through our comprehensive range of digital marketing solutions including SEO, SMO, Web Design, and PPC."
    };
  }

  const cleanPath = path.replace(/^\/+|\/+$/g, '').split('?')[0];
  const segments = cleanPath.split('/');
  const lastSegment = segments[segments.length - 1];

  let formattedTitle = lastSegment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  formattedTitle = formattedTitle
    .replace(/\bSeo\b/g, 'SEO')
    .replace(/\bSmo\b/g, 'SMO')
    .replace(/\bPpc\b/g, 'PPC')
    .replace(/\bAi\b/g, 'AI')
    .replace(/\bSmm\b/g, 'SMM');

  return {
    title: `${formattedTitle} | ${businessName}`,
    description: `Expert ${formattedTitle} solutions by ${businessName}. Partner with our specialized team to accelerate your digital growth and maximize ROI.`
  };
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const config = await getSEOConfig();
    const headersList = await headers();
    let pathname = headersList.get('x-pathname') || '/';
    if (!pathname || pathname === '' || pathname === 'index') {
      pathname = '/';
    }
    const cleanTargetPath = pathname.replace(/^\/+|\/+$/g, '').split('?')[0];

    // 1. Try to find page-specific SEO from PageSEO table
    const allPageSeos = await PageSEO.findAll({ raw: true });
    const pageSeo = allPageSeos.find((item: any) => {
      const cleanItemPath = (item.pageUrl || '').replace(/^\/+|\/+$/g, '').split('?')[0];
      return cleanItemPath === cleanTargetPath;
    });

    // 2. If it's a blog post and no custom PageSEO, try to get SEO from the Blog model
    let blogSeo = null;
    if (!pageSeo && (pathname.startsWith('/blog/') || pathname.includes('/blog/'))) {
      const slug = pathname.split('/').pop();
      if (slug) {
        const BlogModel = (await import("@/models")).Blog;
        blogSeo = await BlogModel.findOne({ where: { slug }, raw: true });
      }
    }

    const businessName = config?.businessName || "Fly Media Technology";
    const dynamicSeo = formatDynamicMetadata(pathname, businessName);

    // Prioritize: PageSEO > Blog SEO > Dynamic Fallback
    const finalTitle = pageSeo?.title || blogSeo?.metaTitle || blogSeo?.title || dynamicSeo.title;
    const finalDesc = pageSeo?.description || blogSeo?.metaDescription || blogSeo?.excerpt || dynamicSeo.description;
    const finalKeywords = pageSeo?.keywords || blogSeo?.keywords || "digital marketing, SEO, SMO, website design, PPC, web development";
    const finalCanonical = pageSeo?.canonicalUrl || blogSeo?.canonicalUrl || `https://flymediatech.com${pathname}`;
    const robotsValue = pageSeo?.metaRobots || blogSeo?.metaRobots || 'index, follow';
    const isNoIndex = robotsValue.includes('noindex');
    const isNoFollow = robotsValue.includes('nofollow');

    return {
      title: finalTitle,
      description: finalDesc,
      keywords: finalKeywords,
      alternates: {
        canonical: finalCanonical,
      },
      robots: {
        index: !isNoIndex,
        follow: !isNoFollow,
        googleBot: {
          index: !isNoIndex,
          follow: !isNoFollow,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
      openGraph: {
        title: pageSeo?.ogTitle || blogSeo?.ogTitle || finalTitle,
        description: pageSeo?.ogDescription || blogSeo?.ogDescription || finalDesc,
        images: (pageSeo?.ogImage || blogSeo?.ogImage || blogSeo?.image) 
          ? [{ url: (pageSeo?.ogImage || blogSeo?.ogImage || blogSeo?.image) as string }] 
          : [],
        url: finalCanonical,
        siteName: businessName,
        type: pathname.includes('/blog/') ? 'article' : 'website',
      },
      twitter: {
        card: (pageSeo?.twitterCard || blogSeo?.twitterCard || 'summary_large_image') as any,
        title: pageSeo?.ogTitle || blogSeo?.ogTitle || finalTitle,
        description: pageSeo?.ogDescription || blogSeo?.ogDescription || finalDesc,
        images: (pageSeo?.ogImage || blogSeo?.ogImage || blogSeo?.image) 
          ? [ (pageSeo?.ogImage || blogSeo?.ogImage || blogSeo?.image) as string ] 
          : [],
      },
    };
  } catch (e) {
    console.error("[Metadata Error]", e);
    return {
      title: "Fly Media Technology | Digital Marketing Solutions",
      description: "Comprehensive digital marketing agency offering web design, SEO, SMO, and PPC solutions."
    };
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <DynamicSEO />
        <ClientSEO />
        <ClientLayout>{children}</ClientLayout>
        <FooterScripts />
      </body>
    </html>
  );
}
