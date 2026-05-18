require('dotenv').config();
const mysql = require('mysql2/promise');

async function syncAllBlogs() {
  let connection;
  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_NAME || 'flymedia_db',
    });

    console.log('[Blog SEO Sync] Connected to database.');

    // Fetch all blogs from `blogs` table
    const [blogs] = await connection.execute('SELECT * FROM blogs');
    console.log(`[Blog SEO Sync] Found ${blogs.length} total blog posts in database.`);

    let insertedCount = 0;
    let updatedCount = 0;

    for (const blog of blogs) {
      if (!blog.slug) continue;

      const pageUrl = blog.region === 'australia'
        ? `/australia/blog/${blog.slug}`
        : `/blog/${blog.slug}`;

      const title = blog.metaTitle || blog.title || '';
      const description = blog.metaDescription || blog.excerpt || '';
      const keywords = blog.keywords || '';
      const ogTitle = blog.ogTitle || blog.metaTitle || blog.title || '';
      const ogDescription = blog.ogDescription || blog.metaDescription || '';
      const ogImage = blog.ogImage || blog.image || '';
      const canonicalUrl = blog.canonicalUrl || `https://flymediatech.com${pageUrl}`;
      const metaRobots = blog.metaRobots || 'index, follow';

      // Check if entry exists in pageseos
      const [rows] = await connection.execute(
        'SELECT id FROM pageseos WHERE pageUrl = ?',
        [pageUrl]
      );

      if (rows.length > 0) {
        // Update existing record
        await connection.execute(
          `UPDATE pageseos SET 
            title = ?,
            description = ?,
            keywords = ?,
            ogTitle = ?,
            ogDescription = ?,
            ogImage = ?,
            canonicalUrl = ?,
            metaRobots = ?,
            updatedAt = NOW()
          WHERE pageUrl = ?`,
          [
            title,
            description,
            keywords,
            ogTitle,
            ogDescription,
            ogImage,
            canonicalUrl,
            metaRobots,
            pageUrl
          ]
        );
        updatedCount++;
      } else {
        // Insert new record
        await connection.execute(
          `INSERT INTO pageseos 
            (pageUrl, title, description, keywords, ogTitle, ogDescription, ogImage, canonicalUrl, metaRobots, twitterCard, createdAt, updatedAt) 
          VALUES 
            (?, ?, ?, ?, ?, ?, ?, ?, ?, 'summary_large_image', NOW(), NOW())`,
          [
            pageUrl,
            title,
            description,
            keywords,
            ogTitle,
            ogDescription,
            ogImage,
            canonicalUrl,
            metaRobots
          ]
        );
        insertedCount++;
      }
    }

    console.log(`[Blog SEO Sync] Sync completed! Successfully synced ${blogs.length} blogs: ${insertedCount} inserted, ${updatedCount} updated.`);
  } catch (err) {
    console.error('[Blog SEO Sync] Fatal error during sync:', err.message);
  } finally {
    if (connection) await connection.end();
  }
}

syncAllBlogs();
