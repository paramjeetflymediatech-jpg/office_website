import { NextResponse } from 'next/server';
import { Blog } from '../../../models';

export async function GET() {
  try {
    const results = [];
    const errors = [];
    let page = 1;
    let hasMore = true;
    let totalUpdated = 0;

    // We'll fetch posts from WP API in batches
    while (hasMore && page <= 10) { // Limit to 10 pages (1000 posts) to be safe
      const response = await fetch(`https://flymediatech.com/wp-json/wp/v2/posts?per_page=100&page=${page}`);

      if (!response.ok) {
        hasMore = false;
        break;
      }

      const wpPosts = await response.json();
      if (wpPosts.length === 0) {
        hasMore = false;
        break;
      }

      for (const wpPost of wpPosts) {
        if (!wpPost.featured_media || wpPost.featured_media === 0) continue;

        try {
          // Find if this post exists in our DB by slug
          const blog = await Blog.findOne({ where: { slug: wpPost.slug } });

          if (blog && (!blog.image || blog.image === '' || blog.image === '/uploads/blog/default.jpg')) {
            // Fetch media details
            const mediaRes = await fetch(`https://flymediatech.com/wp-json/wp/v2/media/${wpPost.featured_media}`);
            if (mediaRes.ok) {
              const mediaData = await mediaRes.json();
              const sourceUrl = mediaData?.media_details?.sizes?.full?.source_url || mediaData?.source_url;

              if (sourceUrl) {
                const localUrl = sourceUrl.replace('/uploads/', '/uploads/');
                await blog.update({ image: localUrl });
                totalUpdated++;
                results.push({ slug: wpPost.slug, image: localUrl });
              }
            }
          }
        } catch (err: any) {
          errors.push({ slug: wpPost.slug, error: err.message });
        }
      }

      page++;
    }

    return NextResponse.json({
      success: true,
      message: `Sync completed. Updated ${totalUpdated} blogs.`,
      updatedCount: totalUpdated,
      details: results,
      errors: errors
    });

  } catch (error: any) {
    console.error('Global sync error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
