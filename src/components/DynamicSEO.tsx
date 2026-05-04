import { getSEOConfig } from '@/app/actions/seo';
import { PageSEO } from '@/models';
import { headers } from 'next/headers';

export default async function DynamicSEO() {
  const config = await getSEOConfig();
  if (!config) return null;

  // Get current path for page-wise SEO
  const headersList = await headers();
  let pathname = headersList.get('x-pathname') || '/';
  
  // Robust normalization
  if (!pathname || pathname === '' || pathname === 'index') {
    pathname = '/';
  }
  
  if (pathname !== '/' && pathname.endsWith('/')) {
    pathname = pathname.slice(0, -1);
  }

  // Try to find page-specific SEO
  const pageSeoRaw = await PageSEO.findOne({ where: { pageUrl: pathname } });
  const pageSeo = pageSeoRaw ? pageSeoRaw.get({ plain: true }) : null;

  console.log(`[SEO Debug] Path: "${pathname}" | Found SEO: ${pageSeo ? 'YES (' + pageSeo.title + ')' : 'NO'}`);
  // Generate structured schema if custom JSON is not provided
  let generatedSchema = null;
  if (!config.globalSchema && config.businessName) {
    generatedSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": config.businessName,
      "description": config.businessDescription,
      "url": "https://flymediatech.com", // Fallback URL
      "logo": config.logoUrl,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": config.phone,
        "contactType": "customer service",
        "email": config.email
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": config.streetAddress,
        "addressLocality": config.city,
        "addressRegion": config.state,
        "postalCode": config.postalCode,
        "addressCountry": config.countryCode
      },
      "geo": config.latitude && config.longitude ? {
        "@type": "GeoCoordinates",
        "latitude": config.latitude,
        "longitude": config.longitude
      } : undefined,
      "sameAs": config.socialLinks ? config.socialLinks.split('\n').filter(Boolean) : []
    };
  }

  const schemaToRender = config.globalSchema || (generatedSchema ? JSON.stringify(generatedSchema) : null);
  const pageSchema = pageSeo?.customSchema;

  // Final Title & Description (Priority: Page SEO > Business Config > Default)
  const finalTitle = pageSeo?.title || (config.businessName ? `${config.businessName} | Digital Marketing` : "Fly Media Technology");
  const finalDesc = pageSeo?.description || config.businessDescription || "Best Digital Marketing Company";

  return (
    <>
      {/* Dynamic Metadata */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDesc} />
      {pageSeo?.keywords && <meta name="keywords" content={pageSeo.keywords} />}
      {!pageSeo && <meta name="keywords" content="digital marketing, seo, website design" />}

      {/* Structured Data (Global) */}
      {schemaToRender && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaToRender }}
        />
      )}

      {/* Structured Data (Page Specific) */}
      {pageSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: pageSchema }}
        />
      )}

      {/* Google Analytics (GA4) */}
      {config.googleAnalyticsId && (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${config.googleAnalyticsId}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${config.googleAnalyticsId}');
              `,
            }}
          />
        </>
      )}

      {/* Google Tag Manager (GTM) */}
      {config.googleTagManagerId && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${config.googleTagManagerId}');
            `,
          }}
        />
      )}

      {config.headerScripts && (
        <div dangerouslySetInnerHTML={{ __html: config.headerScripts }} />
      )}
    </>
  );
}

export async function FooterScripts() {
  const config = await getSEOConfig();
  if (!config || !config.footerScripts) return null;
  return <div dangerouslySetInnerHTML={{ __html: config.footerScripts }} />;
}
