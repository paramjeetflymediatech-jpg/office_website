require('dotenv').config();
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');

// Complete mappings of Next.js Canada static pages to WordPress post/page IDs in postmeta_india.json
const MAPPINGS = [
  { path: '/canada', postId: 10946 }, // Surrey Digital Marketing (Surrey, BC)
  { path: '/canada/about-us', postId: 11624 }, // About Surrey/Canada
  { path: '/canada/web-designing', postId: 10948 }, // Surrey Web Designing
  { path: '/canada/website-designing-company-in-edmonton', postId: 11694 }, // Edmonton Web Designing
  { path: '/canada/digital-marketing-agency-in-edmonton', postId: 11809 }, // Edmonton Digital Marketing
  { path: '/canada/seo-agency-seo-experts-in-vancouver', postId: 14229 }, // Vancouver SEO Agency
  { path: '/canada/best-digital-marketing-agency-in-vancouver', postId: 14226 }, // Vancouver Best Digital Marketing
  { path: '/canada/smo-agency-smo-experts-in-vancouver', postId: 14235 }, // Vancouver SMO Agency
  { path: '/canada/website-designing-company-in-vancouver', postId: 14265 }, // Vancouver Web Designing / Development
  { path: '/canada/mobile-app-development-in-vancouver', postId: 14241 }, // Vancouver Mobile App Dev
  { path: '/canada/google-adwords-company-in-vancouver', postId: 14244 }, // Vancouver Google AdWords
  { path: '/canada/ai-seo-agency-in-vancouver', postId: 14247 }, // Vancouver AI SEO Agency
  { path: '/canada/e-commerce-seo-agency-in-vancouver', postId: 14259 } // Vancouver E-Commerce SEO
];

const TARGET_META_KEYS = [
  'title',
  'description',
  'og_title',
  'og_image',
  'og_description',
  'scriptseo',
  'robots'
];

async function importCanadaPageSeo() {
  let connection;
  try {
    const postmetaPath = path.join(__dirname, '../blog_data/postmeta_india.json');

    if (!fs.existsSync(postmetaPath)) {
      console.error('[Canada SEO Import] Missing postmeta_india.json in blog_data/ directory.');
      return;
    }

    console.log('[Canada SEO Import] Loading postmeta_india.json (116 MB)...');
    const rawPostmeta = fs.readFileSync(postmetaPath, 'utf8');
    console.log('[Canada SEO Import] Parsing JSON...');
    const json = JSON.parse(rawPostmeta);
    const tableObj = json.find(obj => obj.type === 'table' && obj.name === 'Egb5OL_postmeta');

    if (!tableObj || !tableObj.data) {
      console.error('[Canada SEO Import] Could not locate Egb5OL_postmeta table data inside JSON.');
      return;
    }

    const postmetaArray = tableObj.data;
    console.log(`[Canada SEO Import] Loaded ${postmetaArray.length} postmeta entries. Indexing...`);

    const seoDataByPostId = {};
    const mappedPostIds = MAPPINGS.map(m => m.postId.toString());

    for (const item of postmetaArray) {
      const postIdStr = item.post_id ? item.post_id.toString() : '';
      if (!postIdStr || !mappedPostIds.includes(postIdStr)) continue; // Only process our mapped pages

      const metaKey = item.meta_key;
      if (!TARGET_META_KEYS.includes(metaKey)) continue; // Only care about our target SEO keys

      if (!seoDataByPostId[postIdStr]) {
        seoDataByPostId[postIdStr] = {};
      }

      seoDataByPostId[postIdStr][metaKey] = item.meta_value;
    }

    console.log(`[Canada SEO Import] Found custom SEO metadata for ${Object.keys(seoDataByPostId).length} pages.`);

    // Connect to database
    connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_NAME || 'flymedia_db',
    });

    console.log('[Canada SEO Import] Connected to database. Synchronizing pageseos table...');

    let insertedCount = 0;
    let updatedCount = 0;

    for (const mapping of MAPPINGS) {
      const pageUrl = mapping.path;
      const postIdStr = mapping.postId.toString();
      const meta = seoDataByPostId[postIdStr] || {};

      const title = meta['title'] || null;
      if (!title) {
        console.warn(`[Canada SEO Import] No title found for ${pageUrl} (post_id: ${postIdStr}), skipping.`);
        continue;
      }

      const description = meta['description'] || null;
      const ogTitle = meta['og_title'] || title;
      const ogDescription = meta['og_description'] || description;
      let ogImage = meta['og_image'] || null;
      if (ogImage) {
        ogImage = ogImage.replace(/^https?:\/\/[^\/]+\/wp-content\/uploads\//i, '/uploads/');
      }
      const canonicalUrl = `https://flymediatech.com${pageUrl}`;
      const noindex = meta['robots'];
      const metaRobots = noindex === '1' || noindex === 'noindex' ? 'noindex, nofollow' : 'index, follow';
      const customSchema = meta['scriptseo'] || null;
      const keywords = pageUrl.replace(/^\/+|\/+$/g, '').split('-').join(', ') || 'digital marketing, SEO, website design';

      // Check if entry already exists in pageseos
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
            twitterCard = 'summary_large_image',
            updatedAt = NOW()
          WHERE pageUrl = ?`,
          [
            title,
            description,
            keywords,
            customSchema,
            ogTitle,
            ogDescription,
            ogImage,
            canonicalUrl,
            metaRobots,
            pageUrl
          ]
        );
        updatedCount++;
        console.log(`[Canada SEO Import] Updated: ${pageUrl}`);
      } else {
        // Insert new record
        await connection.execute(
          `INSERT INTO pageseos 
            (pageUrl, title, description, keywords, customSchema, ogTitle, ogDescription, ogImage, canonicalUrl, metaRobots, twitterCard, createdAt, updatedAt) 
          VALUES 
            (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'summary_large_image', NOW(), NOW())`,
          [
            pageUrl,
            title,
            description,
            keywords,
            customSchema,
            ogTitle,
            ogDescription,
            ogImage,
            canonicalUrl,
            metaRobots
          ]
        );
        insertedCount++;
        console.log(`[Canada SEO Import] Inserted: ${pageUrl}`);
      }
    }

    console.log(`[Canada SEO Import] Done! Successfully synced pageseos table: ${insertedCount} inserted, ${updatedCount} updated.`);
  } catch (err) {
    console.error('[Canada SEO Import] Fatal error during import:', err.message);
  } finally {
    if (connection) await connection.end();
  }
}

importCanadaPageSeo();
