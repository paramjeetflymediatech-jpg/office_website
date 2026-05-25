import { NextResponse } from 'next/server';
import { PageSEO, Blog } from '@/models';

export const dynamic = 'force-dynamic';

export async function GET() {
  const baseUrl = 'https://flymediatech.com';

  let markdown = `# Flymedia Technology

> Flymedia Technology is a premier, result-oriented website development, search engine optimization (SEO), and digital marketing agency based in Ludhiana, Punjab, India, serving clients globally including Australia and Canada.

## Core Navigation
- [Home Link](${baseUrl}/): Our primary gateway showing client testimonials, core services, and global office locations.
- [About Us](${baseUrl}/about-us): Learn about our agency history, values, and expert team.
- [How We Work](${baseUrl}/how-we-work): Insights into our agile design, development, and marketing methodologies.
- [Portfolio](${baseUrl}/portfolio): Showcase of successfully launched websites, marketing plans, and mobile applications.
- [Blog Archive](${baseUrl}/blog): Collection of resources, guides, SEO tips, and IT news.
- [Contact Us](${baseUrl}/contact-us): Contact information and request form for custom digital project quotes.
- [Pricing Policy](${baseUrl}/pricing/): Service pricing overview and package costs starting from ₹10,000.
- [Refund Policy](${baseUrl}/refund-policy/): Terms outlining our strict non-refundable policy on digital deliverables.
- [Privacy Policy](${baseUrl}/privacy-policy/): Comprehensive rules on how we handle personal and client information.
- [Terms & Conditions](${baseUrl}/terms-conditions/): Detailed service agreements, milestones, and copyright ownership.

## International Offices
- [Canada Hub](${baseUrl}/canada): Surrey, BC office serving the Canadian market with web design, Google AdWords, and local SEO services.
- [Australia Hub](${baseUrl}/australia/about-us): Stanhope Gardens, NSW office providing tailored digital consultancy, Facebook advertising, and local SEO across Australia.

## Services & Specializations
`;

  // Fetch all custom PageSEO configurations to lists active landing pages
  try {
    const pages = await PageSEO.findAll({ raw: true });
    
    // Filter out blog posts, admin portals, and api routes from main service list
    const services = pages.filter(
      (p) =>
        p.pageUrl &&
        !p.pageUrl.includes('/blog/') &&
        !p.pageUrl.includes('/admin') &&
        !p.pageUrl.includes('/api') &&
        !p.pageUrl.includes('/uploads')
    );

    if (services.length > 0) {
      for (const page of services) {
        let cleanPath = page.pageUrl.trim();
        if (!cleanPath.startsWith('/')) {
          cleanPath = '/' + cleanPath;
        }
        
        // Skip home and core pages that are already linked in Navigation
        const isCore = [
          '/', '/about-us', '/how-we-work', '/portfolio', '/blog', 
          '/contact-us', '/pricing', '/refund-policy', '/privacy-policy', 
          '/terms-conditions', '/canada', '/australia/about-us'
        ].includes(cleanPath.replace(/\/$/, ''));

        if (isCore) continue;

        markdown += `- [${page.title}](${baseUrl}${cleanPath}): ${page.description || 'Custom service package or specialized landing page.'}\n`;
      }
    } else {
      markdown += `*(Additional service pages available on query)*\n`;
    }
  } catch (error) {
    markdown += `*(Unable to dynamically fetch services. Refer to main navigation.)*\n`;
  }

  markdown += `
## Latest Blog Posts & Articles
`;

  // Fetch recent blogs
  try {
    const blogs = await Blog.findAll({
      limit: 15,
      order: [['id', 'DESC']],
      raw: true
    });

    if (blogs.length > 0) {
      for (const blog of blogs) {
        if (!blog.slug) continue;
        const blogPath = blog.region === 'australia'
          ? `/australia/blog/${blog.slug}`
          : `/blog/${blog.slug}`;
        
        const cleanDesc = blog.excerpt 
          ? blog.excerpt.replace(/<[^>]*>?/gm, '').trim().slice(0, 120) + '...'
          : 'Latest update and insights from our team.';

        markdown += `- [${blog.title}](${baseUrl}${blogPath}): ${cleanDesc}\n`;
      }
    } else {
      markdown += `*(Check our blog archive for articles)*\n`;
    }
  } catch (error) {
    markdown += `*(Unable to dynamically fetch blog posts. Refer to blog archive.)*\n`;
  }

  return new NextResponse(markdown, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=59'
    }
  });
}
