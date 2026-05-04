import { NextResponse } from 'next/server';
import { PageSEO, SEOConfig } from '@/models';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get('path') || '/';

  try {
    // 1. Try to find page specific SEO
    const pageSeo = await PageSEO.findOne({ where: { pageUrl: path }, raw: true });
    
    if (pageSeo) {
      return NextResponse.json({ success: true, seo: pageSeo });
    }

    // 2. Fallback to global config
    const config = await SEOConfig.findOne({ where: { id: 1 }, raw: true });
    if (config) {
      return NextResponse.json({ 
        success: true, 
        seo: { 
          title: `${config.businessName} | Digital Marketing`,
          description: config.businessDescription 
        } 
      });
    }

    return NextResponse.json({ success: false });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
