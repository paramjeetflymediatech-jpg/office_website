import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { Blog } from '../../../models';

export async function GET() {
  try {
    // Read the testdata.json file
    const dataPath = path.join(process.cwd(), 'blog_data', 'testdata.json');
    const fileContent = await fs.readFile(dataPath, 'utf-8');
    const posts = JSON.parse(fileContent);

    const updatedBlogs = [];
    const errors = [];

    for (const post of posts) {
      if (!post.featured_media || post.featured_media === 0) continue;

      try {
        // Fetch the media details from the WordPress API
        const mediaRes = await fetch(`https://flymediatech.com/wp-json/wp/v2/media/${post.featured_media}`);
        if (!mediaRes.ok) {
          throw new Error(`Failed to fetch media for ID ${post.featured_media}`);
        }
        const mediaData = await mediaRes.json();
        const sourceUrl = mediaData?.media_details?.sizes?.full?.source_url || mediaData?.source_url;

        if (sourceUrl) {
          // Transform https://flymediatech.com/wp-content/uploads/2026/05/new-web-14.jpg to /uploads/2026/05/new-web-14.jpg
          const localUrl = sourceUrl.replace('https://flymediatech.com/wp-content/uploads/', '/uploads/');
          
          // Find the blog in our database
          const slug = post.slug;
          const blog = await Blog.findOne({ where: { slug } });
          if (blog) {
            await blog.update({ image: localUrl });
            updatedBlogs.push({ slug, localUrl });
          }
        }
      } catch (err: any) {
        console.error(`Error processing post ${post.id}:`, err.message);
        errors.push({ id: post.id, error: err.message });
      }
    }

    return NextResponse.json({ success: true, updatedCount: updatedBlogs.length, updated: updatedBlogs, errors });
  } catch (error: any) {
    console.error('Sync images error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
