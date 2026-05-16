require('dotenv').config();
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');

async function insertBlogs() {
  let connection;
  try {
    const dataPath = path.join(__dirname, '../blog_data/blog_with_meta_id.json');
    const blogsData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

    console.log(`[Script] Found ${blogsData.length} blogs to insert.`,blogsData );

    connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_NAME || 'flymedia_db',
    });

    console.log('[Script] Connected to database.');

    let count = 0;
    const date = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

    for (const blog of blogsData) {
      const { slug, content } = blog;
      console.log(blogsData[0])

      const title = slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      const cleanContent = content.replace(/<[^>]*>?/gm, '');
      const excerpt = cleanContent.slice(0, 150) + '...';

      try {
        const [rows] = await connection.execute(
          'INSERT INTO blogs (title, slug, content, excerpt, image, date, category, region, views, metaTitle, metaDescription, keywords, ogTitle, ogDescription, ogImage, canonicalUrl, metaRobots, twitterCard, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())',
          [
            title,
            slug,
            content,
            excerpt,
            blog.image || '/uploads/blog/default.jpg',
            date,
            'SEO & Marketing',
            'global',
            Math.floor(Math.random() * 100),
            blog.seo_title || title,
            blog.seo_description || excerpt,
            blog.seo_keywords || '',
            blog.seo_title || title,
            blog.seo_description || excerpt,
            blog.image || '/uploads/blog/default.jpg',
            `https://flymediatech.com/blog/${slug}`,
            'index, follow',
            'summary_large_image'
          ]
        );
        count++;
        if (count % 100 === 0) console.log(`[Script] Inserted ${count} blogs...`);
      } catch (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          // console.warn(`[Script] Skipping duplicate slug: ${slug}`);
        } else {
          console.error(`[Script] Error inserting ${slug}:`, err.message);
        }
      }
    }

    console.log(`[Script] Successfully inserted ${count} blogs.`);
  } catch (error) {
    console.error('[Script] Fatal Error:', error);
  } finally {
    if (connection) await connection.end();
  }
}

insertBlogs();
