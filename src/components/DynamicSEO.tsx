// import React from 'react';

// // Extremely robust parser to convert raw header script HTML string into valid React elements in <head>
// export function parseHtmlToElements(htmlString: string): React.ReactNode[] {
//   if (!htmlString) return [];

//   const elements: React.ReactNode[] = [];
//   let key = 0;

//   // Matches `<tag attrs>inner</tag>` or `<tag attrs>` or `<tag attrs />`
//   const tagRegex = /<([a-zA-Z0-9:-]+)\b([^>]*)(?:>([\s\S]*?)<\/\1>|\s*\/?>)/gi;

//   const parseAttributes = (attrStr: string) => {
//     const attrs: any = {};
//     const attrRegex = /([a-zA-Z0-9_-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^>\s]+)))?/g;
//     let match;
//     while ((match = attrRegex.exec(attrStr)) !== null) {
//       const name = match[1];
//       let value: any = match[2] ?? match[3] ?? match[4] ?? true;

//       // React attribute mapping
//       if (name === 'class') {
//         attrs.className = value;
//       } else if (name === 'style') {
//         const styleObj: any = {};
//         value.split(';').forEach((styleRule: string) => {
//           const parts = styleRule.split(':');
//           if (parts.length === 2) {
//             const keyStr = parts[0].trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
//             styleObj[keyStr] = parts[1].trim();
//           }
//         });
//         attrs.style = styleObj;
//       } else if (name === 'charset') {
//         attrs.charSet = value;
//       } else if (name === 'http-equiv') {
//         attrs.httpEquiv = value;
//       } else if (name === 'crossorigin') {
//         attrs.crossOrigin = value;
//       } else if (name === 'referrerpolicy') {
//         attrs.referrerPolicy = value;
//       } else {
//         attrs[name] = value;
//       }
//     }
//     return attrs;
//   };

//   let match;
//   while ((match = tagRegex.exec(htmlString)) !== null) {
//     const tagName = match[1].toLowerCase();
//     const attrStr = match[2];
//     const innerContent = match[3];

//     // Restrict only to tags that are valid or expected in <head>
//     const validHeadTags = ['script', 'link', 'meta', 'style', 'title', 'noscript', 'base'];
//     if (!validHeadTags.includes(tagName)) {
//       continue; // Skip invalid head tags (e.g. div, p) to keep the head pristine!
//     }

//     const attrs = parseAttributes(attrStr);
//     attrs.key = `seo-header-${tagName}-${key++}`;

//     if (innerContent !== undefined) {
//       attrs.dangerouslySetInnerHTML = { __html: innerContent };
//       elements.push(React.createElement(tagName, attrs));
//     } else {
//       elements.push(React.createElement(tagName, attrs));
//     }
//   }

//   return elements;
// }

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

//   // Preserve common SEO acronyms
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

// export default function DynamicSEO({ config, pageSeo }: { config: any; pageSeo?: any }) {
//   if (!config) return null;

//   // Generate structured schema if custom JSON is not provided
//   let generatedSchema = null;
//   if (!config.globalSchema && config.businessName) {
//     generatedSchema = {
//       "@context": "https://schema.org",
//       "@type": "Organization",
//       "name": config.businessName,
//       "description": config.businessDescription,
//       "url": "https://flymediatech.com", // Fallback URL
//       "logo": config.logoUrl,
//       "contactPoint": {
//         "@type": "ContactPoint",
//         "telephone": config.phone,
//         "contactType": "customer service",
//         "email": config.email
//       },
//       "address": {
//         "@type": "PostalAddress",
//         "streetAddress": config.streetAddress,
//         "addressLocality": config.city,
//         "addressRegion": config.state,
//         "postalCode": config.postalCode,
//         "addressCountry": config.countryCode
//       },
//       "geo": config.latitude && config.longitude ? {
//         "@type": "GeoCoordinates",
//         "latitude": config.latitude,
//         "longitude": config.longitude
//       } : undefined,
//       "sameAs": config.socialLinks ? config.socialLinks.split('\n').filter(Boolean) : []
//     };
//   }

//   const schemaToRender = config.globalSchema || (generatedSchema ? JSON.stringify(generatedSchema) : null);
//   const pageSchema = pageSeo?.customSchema;

//   return (
//     <>
//       {/* Structured Data (Global) */}
//       {schemaToRender && (
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: schemaToRender }}
//         />
//       )}

//       {/* Structured Data (Page Specific) */}
//       {pageSchema && (
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: pageSchema }}
//         />
//       )}

//       {/* Google Analytics (GA4) */}
//       {config.googleAnalyticsId && (
//         <>
//           <script async src={`https://www.googletagmanager.com/gtag/js?id=${config.googleAnalyticsId}`} />
//           <script
//             dangerouslySetInnerHTML={{
//               __html: `
//                 window.dataLayer = window.dataLayer || [];
//                 function gtag(){dataLayer.push(arguments);}
//                 gtag('js', new Date());
//                 gtag('config', '${config.googleAnalyticsId}');
//               `,
//             }}
//           />
//         </>
//       )}

//       {/* Google Tag Manager (GTM) */}
//       {config.googleTagManagerId && (
//         <script
//           dangerouslySetInnerHTML={{
//             __html: `
//               (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//               new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//               j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//               'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//               })(window,document,'script','dataLayer','${config.googleTagManagerId}');
//             `,
//           }}
//         />
//       )}

//       {config.headerScripts && parseHtmlToElements(config.headerScripts)}
//     </>
//   );
// }

// export function FooterScripts({ config }: { config: any }) {
//   if (!config || !config.footerScripts) return null;
//   return <div dangerouslySetInnerHTML={{ __html: config.footerScripts }} />;
// }

// export function GTMNoScript({ config }: { config: any }) {
//   if (!config || !config.googleTagManagerId) return null;
//   return (
//     <noscript>
//       <iframe
//         src={`https://www.googletagmanager.com/ns.html?id=${config.googleTagManagerId}`}
//         height="0"
//         width="0"
//         style={{ display: 'none', visibility: 'hidden' }}
//       />
//     </noscript>
//   );
// }




import React from "react";

/**
 * SAFE HTML PARSER
 * ONLY ALLOWS:
 * - script
 * - style
 * - noscript
 *
 * BLOCKS:
 * - title
 * - meta
 * - link
 * - base
 *
 * This prevents SEO tags from rendering
 * outside the <head> tag in Next.js App Router.
 */

export function parseHtmlToElements(
  htmlString: string
): React.ReactNode[] {
  if (!htmlString) return [];

  const elements: React.ReactNode[] = [];

  let key = 0;

  const tagRegex =
    /<([a-zA-Z0-9:-]+)\b([^>]*)(?:>([\s\S]*?)<\/\1>|\s*\/?>)/gi;

  const parseAttributes = (attrStr: string) => {
    const attrs: any = {};

    const attrRegex =
      /([a-zA-Z0-9:_-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^>\s]+)))?/g;

    let match;

    while ((match = attrRegex.exec(attrStr)) !== null) {
      const name = match[1];

      let value: any =
        match[2] ?? match[3] ?? match[4] ?? true;

      /**
       * React attribute mappings
       */

      if (name === "class") {
        attrs.className = value;
      } else if (name === "charset") {
        attrs.charSet = value;
      } else if (name === "http-equiv") {
        attrs.httpEquiv = value;
      } else if (name === "crossorigin") {
        attrs.crossOrigin = value;
      } else if (name === "referrerpolicy") {
        attrs.referrerPolicy = value;
      } else {
        attrs[name] = value;
      }
    }

    return attrs;
  };

  let match;

  while ((match = tagRegex.exec(htmlString)) !== null) {
    const tagName = match[1].toLowerCase();

    const attrStr = match[2];

    const innerContent = match[3];

    /**
     * BLOCK SEO TAGS
     */

    const blockedTags = [
      "title",
      
      "base",
    ];

    if (blockedTags.includes(tagName)) {
      continue;
    }

    /**
     * ALLOW ONLY SAFE TAGS
     */

    const allowedTags = [
      "script",
      "style",
      "meta",
      "link",
      "noscript",
    ];

    if (!allowedTags.includes(tagName)) {
      continue;
    }

    const attrs = parseAttributes(attrStr);

    attrs.key = `dynamic-seo-${tagName}-${key++}`;

    /**
     * SCRIPT / STYLE WITH CONTENT
     */

    if (innerContent !== undefined) {
      attrs.dangerouslySetInnerHTML = {
        __html: innerContent,
      };

      elements.push(
        React.createElement(tagName, attrs)
      );
    } else {
      /**
       * SELF CLOSING
       */

      elements.push(
        React.createElement(tagName, attrs)
      );
    }
  }

  return elements;
}

/**
 * DYNAMIC FALLBACK SEO
 */

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

  const cleanPath = path
    .replace(/^\/+|\/+$/g, "")
    .split("?")[0];

  const segments = cleanPath.split("/");

  const lastSegment =
    segments[segments.length - 1];

  let formattedTitle = lastSegment
    .split("-")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        word.slice(1)
    )
    .join(" ");

  /**
   * Preserve SEO Acronyms
   */

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

/**
 * MAIN SEO COMPONENT
 */

export default function DynamicSEO({
  config,
  pageSeo,
}: {
  config: any;
  pageSeo?: any;
}) {
  if (!config) return null;

  /**
   * AUTO GENERATE ORGANIZATION SCHEMA
   */

  let generatedSchema = null;

  if (
    !config.globalSchema &&
    config.businessName
  ) {
    generatedSchema = {
      "@context": "https://schema.org",

      "@type": "Organization",

      name: config.businessName,

      description:
        config.businessDescription,

      url: "https://flymediatech.com",

      logo: config.logoUrl,

      contactPoint: {
        "@type": "ContactPoint",

        telephone: config.phone,

        contactType: "customer service",

        email: config.email,
      },

      address: {
        "@type": "PostalAddress",

        streetAddress:
          config.streetAddress,

        addressLocality: config.city,

        addressRegion: config.state,

        postalCode: config.postalCode,

        addressCountry:
          config.countryCode,
      },

      geo:
        config.latitude &&
        config.longitude
          ? {
              "@type": "GeoCoordinates",

              latitude:
                config.latitude,

              longitude:
                config.longitude,
            }
          : undefined,

      sameAs: config.socialLinks
        ? config.socialLinks
            .split("\n")
            .filter(Boolean)
        : [],
    };
  }

  const schemaToRender =
    config.globalSchema ||
    (generatedSchema
      ? JSON.stringify(generatedSchema)
      : null);

  const pageSchema =
    pageSeo?.customSchema;

  return (
    <>
      {/* GLOBAL SCHEMA */}

      {schemaToRender && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: schemaToRender,
          }}
        />
      )}

      {/* PAGE SCHEMA */}

      {pageSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: pageSchema,
          }}
        />
      )}

      {/* GOOGLE ANALYTICS */}

      {config.googleAnalyticsId && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${config.googleAnalyticsId}`}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];

                function gtag(){
                  dataLayer.push(arguments);
                }

                gtag('js', new Date());

                gtag(
                  'config',
                  '${config.googleAnalyticsId}'
                );
              `,
            }}
          />
        </>
      )}

      {/* GOOGLE TAG MANAGER */}

      {config.googleTagManagerId && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];

                w[l].push({
                  'gtm.start':
                  new Date().getTime(),
                  event:'gtm.js'
                });

                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'
                  ? '&l='+l
                  : '';

                j.async=true;

                j.src=
                  'https://www.googletagmanager.com/gtm.js?id='
                  + i + dl;

                f.parentNode.insertBefore(j,f);

              })(
                window,
                document,
                'script',
                'dataLayer',
                '${config.googleTagManagerId}'
              );
            `,
          }}
        />
      )}

      {/* CUSTOM HEADER SCRIPTS */}

      {config.headerScripts &&
        parseHtmlToElements(
          config.headerScripts
        )}
    </>
  );
}

/**
 * FOOTER SCRIPTS
 */

export function FooterScripts({
  config,
}: {
  config: any;
}) {
  if (
    !config ||
    !config.footerScripts
  ) {
    return null;
  }

  return (
    <>
      {parseHtmlToElements(
        config.footerScripts
      )}
    </>
  );
}

/**
 * GTM NOSCRIPT
 */

export function GTMNoScript({
  config,
}: {
  config: any;
}) {
  if (
    !config ||
    !config.googleTagManagerId
  ) {
    return null;
  }

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${config.googleTagManagerId}`}
        height="0"
        width="0"
        style={{
          display: "none",
          visibility: "hidden",
        }}
      />
    </noscript>
  );
}
