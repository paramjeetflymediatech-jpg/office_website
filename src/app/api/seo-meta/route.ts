import { NextResponse } from 'next/server';
import { PageSEO, SEOConfig } from '@/models';

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

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  let path = searchParams.get('path') || '/';

  try {
    // Robust normalization: remove leading/trailing slashes and query strings
    const cleanTargetPath = path.replace(/^\/+|\/+$/g, '').split('?')[0];

    // 1. Fetch all Page SEO records to perform exact bulletproof matching
    const allPageSeos = await PageSEO.findAll({ raw: true });
    
    const pageSeo = allPageSeos.find(item => {
      const cleanItemPath = (item.pageUrl || '').replace(/^\/+|\/+$/g, '').split('?')[0];
      return cleanItemPath === cleanTargetPath;
    });

    if (pageSeo) {
      return NextResponse.json({ success: true, seo: pageSeo });
    }

    // 2. Fetch business config for fallback names
    const config = await SEOConfig.findOne({ where: { id: 1 }, raw: true });
    const businessName = config?.businessName || "Fly Media Technology";

    // 3. Dynamically generate gorgeous SEO metadata from the route path
    const dynamicSeo = formatDynamicMetadata(path, businessName);

    return NextResponse.json({ 
      success: true, 
      seo: dynamicSeo 
    });
  } catch (error) {
    return NextResponse.json({ 
      success: true, 
      seo: {
        title: "Fly Media Technology | Digital Marketing Solutions",
        description: "Comprehensive digital marketing agency offering web design, SEO, SMO, and PPC solutions."
      }
    });
  }
}
