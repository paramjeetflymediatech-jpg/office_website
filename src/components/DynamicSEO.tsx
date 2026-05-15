import { getSEOConfig } from '@/app/actions/seo';
import { PageSEO } from '@/models';
import { headers } from 'next/headers';

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

  // Preserve common SEO acronyms
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
  
  const cleanTargetPath = pathname.replace(/^\/+|\/+$/g, '').split('?')[0];

  // Try to find page-specific SEO using robust in-memory matching across all records
  const allPageSeos = await PageSEO.findAll({ raw: true });
  const pageSeo = allPageSeos.find(item => {
    const cleanItemPath = (item.pageUrl || '').replace(/^\/+|\/+$/g, '').split('?')[0];
    return cleanItemPath === cleanTargetPath;
  });

  console.log(`[SEO Debug] Target: "${cleanTargetPath}" | Found SEO: ${pageSeo ? 'YES (' + pageSeo.title + ')' : 'NO (Using Dynamic Route SEO)'}`);

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

  return (
    <>
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
