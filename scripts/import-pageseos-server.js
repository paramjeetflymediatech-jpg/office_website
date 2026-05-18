require('dotenv').config();
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');

async function importPageSeos() {
  let connection;
  try {
    const srcPath = path.join(__dirname, '../blog_data/pageseos_dump.json');
    if (!fs.existsSync(srcPath)) {
      console.error('[Import Server] Missing pageseos_dump.json inside blog_data/ directory.');
      return;
    }

    const data = JSON.parse(fs.readFileSync(srcPath, 'utf8'));
    console.log(`[Import Server] Found ${data.length} page SEO entries to sync.`);

    connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_NAME || 'flymedia_db',
    });

    console.log('[Import Server] Connected to server database. Synchronizing pageseos table...');

    let insertedCount = 0;
    let updatedCount = 0;

    for (const item of data) {
      const pageUrl = item.pageUrl;
      if (!pageUrl) continue;

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
            customSchema = ?,
            ogTitle = ?,
            ogDescription = ?,
            ogImage = ?,
            canonicalUrl = ?,
            metaRobots = ?,
            twitterCard = ?,
            updatedAt = NOW()
          WHERE pageUrl = ?`,
          [
            item.title || null,
            item.description || null,
            item.keywords || null,
            item.customSchema || null,
            item.ogTitle || null,
            item.ogDescription || null,
            item.ogImage || null,
            item.canonicalUrl || null,
            item.metaRobots || 'index, follow',
            item.twitterCard || 'summary_large_image',
            pageUrl
          ]
        );
        updatedCount++;
      } else {
        // Insert new record
        await connection.execute(
          `INSERT INTO pageseos 
            (pageUrl, title, description, keywords, customSchema, ogTitle, ogDescription, ogImage, canonicalUrl, metaRobots, twitterCard, createdAt, updatedAt) 
          VALUES 
            (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())`,
          [
            pageUrl,
            item.title || null,
            item.description || null,
            item.keywords || null,
            item.customSchema || null,
            item.ogTitle || null,
            item.ogDescription || null,
            item.ogImage || null,
            item.canonicalUrl || null,
            item.metaRobots || 'index, follow',
            item.twitterCard || 'summary_large_image'
          ]
        );
        insertedCount++;
      }
    }

    console.log(`[Import Server] Finished! Synced ${data.length} records: ${insertedCount} inserted, ${updatedCount} updated.`);
  } catch (err) {
    console.error('[Import Server] Fatal error:', err.message);
  } finally {
    if (connection) await connection.end();
  }
}

importPageSeos();
