import { MetadataRoute } from 'next';
import { PageSEO, Blog } from '@/models';

export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://flymediatech.com';

  // Fallback static core paths to ensure they are always present
  const corePaths = [
    '',
    '/about-us',
    '/how-we-work',
    '/portfolio',
    '/blog',
    '/contact-us',
    '/pricing',
    '/refund-policy',
    '/privacy-policy',
    '/terms-conditions',
    '/canada',
    '/canada/about-us',
    '/canada/portfolio',
    '/canada/contact-us',
    '/australia/about-us',
    '/australia/blog',
    '/australia/contact-us'
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // 1. Add core static pages
  for (const path of corePaths) {
    sitemapEntries.push({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: path === '' ? 1.0 : 0.8,
    });
  }

  // 2. Fetch all PageSEO records
  try {
    const dbPages = await PageSEO.findAll({ raw: true });
    for (const page of dbPages) {
      if (!page.pageUrl) continue;

      let cleanPath = page.pageUrl.trim();
      // Ensure path starts with / and clean leading/trailing whitespaces/slashes
      if (!cleanPath.startsWith('/')) {
        cleanPath = '/' + cleanPath;
      }

      // Respect metaRobots index settings
      if (page.metaRobots && page.metaRobots.toLowerCase().includes('noindex')) {
        continue;
      }

      const fullUrl = `${baseUrl}${cleanPath}`;

      // Check if entry already exists (ignoring trailing slash differences)
      const exists = sitemapEntries.some(
        (entry) => entry.url.replace(/\/$/, '') === fullUrl.replace(/\/$/, '')
      );

      if (!exists) {
        sitemapEntries.push({
          url: fullUrl,
          lastModified: page.updatedAt ? new Date(page.updatedAt) : new Date(),
          changeFrequency: 'monthly',
          priority: 0.7,
        });
      }
    }
  } catch (error) {
    console.error('Error fetching PageSEO for sitemap:', error);
  }

  // 3. Fetch all Blog records directly (in case they aren't fully synced in PageSEO)
  try {
    const blogs = await Blog.findAll({ raw: true });
    for (const blog of blogs) {
      if (!blog.slug) continue;

      const blogPath = blog.region === 'australia'
        ? `/australia/blog/${blog.slug}`
        : `/blog/${blog.slug}`;

      if (blog.metaRobots && blog.metaRobots.toLowerCase().includes('noindex')) {
        continue;
      }

      const fullUrl = `${baseUrl}${blogPath}`;
      
      const exists = sitemapEntries.some(
        (entry) => entry.url.replace(/\/$/, '') === fullUrl.replace(/\/$/, '')
      );

      if (!exists) {
        sitemapEntries.push({
          url: fullUrl,
          lastModified: blog.date ? new Date(blog.date) : new Date(),
          changeFrequency: 'monthly',
          priority: 0.6,
        });
      }
    }
  } catch (error) {
    console.error('Error fetching Blogs for sitemap:', error);
  }

  return sitemapEntries;
}
