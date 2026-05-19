// import type { Metadata } from "next";
// import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
// import "./globals.css";
// import DynamicSEO, { FooterScripts, GTMNoScript } from "@/components/DynamicSEO";
// import ClientLayout from "@/components/ClientLayout";
// import ClientSEO from "@/components/ClientSEO";
// import { getSEOConfig } from "@/app/actions/seo";
// import { PageSEO } from "@/models";
// import { headers } from "next/headers";
// export const dynamic = "force-dynamic";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const playfair = Playfair_Display({
//   variable: "--font-playfair",
//   subsets: ["latin"],
// });

// function formatDynamicMetadata(path: string, businessName = "Fly Media Technology") {
//   if (!path || path === '/' || path === '/index') {
//     return {
//       title: `${businessName} | Result-Oriented Digital Marketing Solutions`,
//       description: "Make your business reach new heights of digital success through our comprehensive range of digital marketing solutions including SEO, SMO, Web Design, and PPC."
//     };
//   }

//   const cleanPath = path.replace(/^\/+|\/+$/g, '').split('?')[0];
//   const segments = cleanPath.split('/');
//   const lastSegment = segments[segments.length - 1];

//   let formattedTitle = lastSegment
//     .split('-')
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(' ');

//   formattedTitle = formattedTitle
//     .replace(/\bSeo\b/g, 'SEO')
//     .replace(/\bSmo\b/g, 'SMO')
//     .replace(/\bPpc\b/g, 'PPC')
//     .replace(/\bAi\b/g, 'AI')
//     .replace(/\bSmm\b/g, 'SMM');

//   return {
//     title: `${formattedTitle} | ${businessName}`,
//     description: `Expert ${formattedTitle} solutions by ${businessName}. Partner with our specialized team to accelerate your digital growth and maximize ROI.`
//   };
// }

// export default async function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const config = await getSEOConfig();
//   const headersList = await headers();
//   let pathname = headersList.get('x-pathname') || '/';
//   if (!pathname || pathname === '' || pathname === 'index') {
//     pathname = '/';
//   }
//   const cleanTargetPath = pathname.replace(/^\/+|\/+$/g, '').split('?')[0];

//   let pageSeo = null;
//   if (config) {
//     const allPageSeos = await PageSEO.findAll({ raw: true });
//     pageSeo = allPageSeos.find((item: any) => {
//       const cleanItemPath = (item.pageUrl || '').replace(/^\/+|\/+$/g, '').split('?')[0];
//       return cleanItemPath === cleanTargetPath;
//     }) || null;
//   }

//   // Try to find blog SEO if applicable
//   let blogSeo = null;
//   if (!pageSeo && (pathname.startsWith('/blog/') || pathname.includes('/blog/'))) {
//     const slug = pathname.split('/').pop();
//     if (slug) {
//       const BlogModel = (await import("@/models")).Blog;
//       blogSeo = await BlogModel.findOne({ where: { slug }, raw: true });
//     }
//   }

//   const businessName = config?.businessName || "Fly Media Technology";
//   const dynamicSeo = formatDynamicMetadata(pathname, businessName);

//   // Prioritize: PageSEO > Blog SEO > Dynamic Fallback
//   const finalTitle = pageSeo?.title || blogSeo?.metaTitle || blogSeo?.title || dynamicSeo.title;
//   const finalDesc = pageSeo?.description || blogSeo?.metaDescription || blogSeo?.excerpt || dynamicSeo.description;
//   const finalKeywords = pageSeo?.keywords || blogSeo?.keywords || "digital marketing, SEO, SMO, website design, PPC, web development";
//   const finalCanonical = pageSeo?.canonicalUrl || blogSeo?.canonicalUrl || `https://flymediatech.com${pathname}`;
//   const robotsValue = pageSeo?.metaRobots || blogSeo?.metaRobots || 'index, follow';

//   const ogImage = pageSeo?.ogImage || blogSeo?.ogImage || blogSeo?.image || "http://localhost:3000/uploads/2024/03/logo_fly_media_technology1-1.png";

//   return (
//     <html
//       lang="en"
//       className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
//       suppressHydrationWarning
//     >
//       <head>
//         <title>{finalTitle}</title>
//         <meta name="description" content={finalDesc} />
//         <meta name="keywords" content={finalKeywords} />
//         <meta name="robots" content={robotsValue} />
//         <meta name="googlebot" content={`${robotsValue}, max-video-preview:-1, max-image-preview:large, max-snippet:-1`} />
//         <link rel="canonical" href={finalCanonical} />
//         <meta name="google-site-verification" content="A6y8CvpEQ9Tkn0I6JPDykgUl9e2vRCmBYZiHON-QEcw" />
        
//         {/* OpenGraph */}
//         <meta property="og:title" content={pageSeo?.ogTitle || finalTitle} />
//         <meta property="og:description" content={pageSeo?.ogDescription || finalDesc} />
//         <meta property="og:url" content={finalCanonical} />
//         <meta property="og:site_name" content={businessName} />
//         {ogImage && <meta property="og:image" content={ogImage} />}
//         <meta property="og:type" content={pathname.includes('/blog/') ? 'article' : 'website'} />
        
//         {/* Twitter */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={pageSeo?.ogTitle || finalTitle} />
//         <meta name="twitter:description" content={pageSeo?.ogDescription || finalDesc} />
//         {ogImage && <meta name="twitter:image" content={ogImage} />}
        
//         {/* Favicons */}
//         <link rel="icon" href="/favicon.ico?favicon.0hx38e5i90xai.ico" sizes="1000x1000" type="image/x-icon" />
//         <link rel="icon" href="https://flymediatech.com/wp-content/uploads/2024/04/flyfav.png" sizes="32x32" />
//         <link rel="icon" href="https://flymediatech.com/wp-content/uploads/2024/04/flyfav.png" sizes="192x192" />
//         <link rel="apple-touch-icon" href="https://flymediatech.com/wp-content/uploads/2024/04/flyfav.png" />
        
//         <DynamicSEO config={config} pageSeo={pageSeo} />
//       </head>
//       <body className="min-h-full flex flex-col" suppressHydrationWarning>
//         <GTMNoScript config={config} />
//         <ClientSEO />
//         <ClientLayout>{children}</ClientLayout>
//         <FooterScripts config={config} />
//       </body>
//     </html>
//   );
// }



import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

import DynamicSEO, {
  FooterScripts,
  GTMNoScript,
} from "@/components/DynamicSEO";

import ClientLayout from "@/components/ClientLayout";
import ClientSEO from "@/components/ClientSEO";
import FloatingButtons from "@/components/FloatingButtons";

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

function formatDynamicMetadata(
  path: string,
  businessName = "Fly Media Technology"
) {
  if (!path || path === "/" || path === "/index") {
    return {
      title: `${businessName} | Result-Oriented Digital Marketing Solutions`,
      description:
        "Make your business reach new heights of digital success through our comprehensive range of digital marketing solutions including SEO, SMO, Web Design, and PPC.",
    };
  }

  const cleanPath = path.replace(/^\/+|\/+$/g, "").split("?")[0];

  const segments = cleanPath.split("/");

  const lastSegment = segments[segments.length - 1];

  let formattedTitle = lastSegment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  formattedTitle = formattedTitle
    .replace(/\bSeo\b/g, "SEO")
    .replace(/\bSmo\b/g, "SMO")
    .replace(/\bPpc\b/g, "PPC")
    .replace(/\bAi\b/g, "AI")
    .replace(/\bSmm\b/g, "SMM");

  return {
    title: `${formattedTitle} | ${businessName}`,
    description: `Expert ${formattedTitle} solutions by ${businessName}. Partner with our specialized team to accelerate your digital growth and maximize ROI.`,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const config = await getSEOConfig();

  const headersList = await headers();

  let pathname = headersList.get("x-pathname") || "/";

  if (!pathname || pathname === "" || pathname === "index") {
    pathname = "/";
  }

  const cleanTargetPath = pathname
    .replace(/^\/+|\/+$/g, "")
    .split("?")[0];

  let pageSeo = null;

  if (config) {
    const allPageSeos = await PageSEO.findAll({
      raw: true,
    });

    pageSeo =
      allPageSeos.find((item: any) => {
        const cleanItemPath = (item.pageUrl || "")
          .replace(/^\/+|\/+$/g, "")
          .split("?")[0];

        return cleanItemPath === cleanTargetPath;
      }) || null;
  }

  // Blog SEO
  let blogSeo = null;

  if (
    !pageSeo &&
    (pathname.startsWith("/blog/") ||
      pathname.includes("/blog/"))
  ) {
    const slug = pathname.split("/").pop();

    if (slug) {
      const BlogModel = (await import("@/models")).Blog;

      blogSeo = await BlogModel.findOne({
        where: { slug },
        raw: true,
      });
    }
  }

  const businessName =
    config?.businessName || "Fly Media Technology";

  const dynamicSeo = formatDynamicMetadata(
    pathname,
    businessName
  );

  // Priority
  const finalTitle =
    pageSeo?.title ||
    blogSeo?.metaTitle ||
    blogSeo?.title ||
    dynamicSeo.title;

  const finalDesc =
    pageSeo?.description ||
    blogSeo?.metaDescription ||
    blogSeo?.excerpt ||
    dynamicSeo.description;

  const finalKeywords =
    pageSeo?.keywords ||
    blogSeo?.keywords ||
    "digital marketing, SEO, SMO, website design, PPC, web development";

  const finalCanonical =
    pageSeo?.canonicalUrl ||
    blogSeo?.canonicalUrl ||
    `https://flymediatech.com${pathname}`;

  const robotsValue =
    pageSeo?.metaRobots ||
    blogSeo?.metaRobots ||
    "index, follow";

  // FIX LOCALHOST ISSUE
  let ogImage =
    pageSeo?.ogImage ||
    blogSeo?.ogImage ||
    blogSeo?.image ||
    "https://flymediatech.com/uploads/2024/03/logo_fly_media_technology1-1.png";

  // Convert localhost to live domain automatically
  if (ogImage?.includes("localhost")) {
    ogImage = ogImage.replace(
      "http://localhost:3000",
      "https://flymediatech.com"
    );
  }

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        {/* BASIC SEO */}
        <title>{finalTitle}</title>

        <meta
          name="description"
          content={finalDesc}
        />

        <meta
          name="keywords"
          content={finalKeywords}
        />

        <meta
          name="robots"
          content={robotsValue}
        />

        <meta
          name="googlebot"
          content={`${robotsValue}, max-video-preview:-1, max-image-preview:large, max-snippet:-1`}
        />

        <link
          rel="canonical"
          href={finalCanonical}
        />

        <meta
          name="google-site-verification"
          content="A6y8CvpEQ9Tkn0I6JPDykgUl9e2vRCmBYZiHON-QEcw"
        />

        {/* OPEN GRAPH */}
        <meta
          property="og:title"
          content={pageSeo?.ogTitle || finalTitle}
        />

        <meta
          property="og:description"
          content={
            pageSeo?.ogDescription || finalDesc
          }
        />

        <meta
          property="og:url"
          content={finalCanonical}
        />

        <meta
          property="og:site_name"
          content={businessName}
        />

        <meta
          property="og:type"
          content={
            pathname.includes("/blog/")
              ? "article"
              : "website"
          }
        />

        {ogImage && (
          <meta
            property="og:image"
            content={ogImage}
          />
        )}

        {/* TWITTER */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content={pageSeo?.ogTitle || finalTitle}
        />

        <meta
          name="twitter:description"
          content={
            pageSeo?.ogDescription || finalDesc
          }
        />

        {ogImage && (
          <meta
            name="twitter:image"
            content={ogImage}
          />
        )}

        {/* FAVICON */}
        <link
          rel="icon"
          href="/favicon.ico"
        />

        <link
          rel="icon"
          href="https://flymediatech.com/wp-content/uploads/2024/04/flyfav.png"
          sizes="32x32"
        />

        <link
          rel="apple-touch-icon"
          href="https://flymediatech.com/wp-content/uploads/2024/04/flyfav.png"
        />

        {/* IMPORTANT */}
        {/* KEEP ONLY HEAD CONTENT HERE */}
        <DynamicSEO
          config={config}
          pageSeo={pageSeo}
        />
      </head>

      <body
        className="min-h-full flex flex-col"
        suppressHydrationWarning
      >
        <GTMNoScript config={config} />

        <ClientSEO />

        <ClientLayout>
          {children}
        </ClientLayout>

        <FloatingButtons />

        {/* FOOTER SCRIPTS ONLY */}
        <FooterScripts config={config} />
      </body>
    </html>
  );
}
