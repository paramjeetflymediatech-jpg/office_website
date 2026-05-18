require('dotenv').config();
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');

// Mappings of Next.js Australia static pages to WordPress post/page IDs in postmeta_australia.json
const MAPPINGS = [
  { path: '/australia', postId: 24 }, // Home
  { path: '/australia/about-us', postId: 9 }, // About Us
  { path: '/australia/content-marketing-strategy', postId: 99 }, // Content Marketing Strategy
  { path: '/australia/digital-consultancy', postId: 91 }, // Digital Consultancy
  { path: '/australia/digital-marketing', postId: 9923 }, // Digital Marketing
  { path: '/australia/digital-marketing-agency-in-blacktown', postId: 12043 }, // Blacktown
  { path: '/australia/digital-marketing-agency-in-brisbane', postId: 11887 }, // Brisbane
  { path: '/australia/digital-marketing-agency-in-melbourne', postId: 11856 }, // Melbourne
  { path: '/australia/digital-marketing-agency-in-quakers-hill', postId: 12050 }, // Quakers Hill
  { path: '/australia/digital-marketing-agency-in-seven-hills', postId: 12061 }, // Seven Hills
  { path: '/australia/ecommerce-seo-agency-sydney', postId: 70 }, // Ecommerce SEO
  { path: '/australia/ecommerce-website-development', postId: 126 }, // Ecommerce website dev
  { path: '/australia/enterprise-seo-agency-sydney', postId: 1403 }, // Enterprise SEO
  { path: '/australia/facebook-marketing-sydney', postId: 155 }, // Facebook marketing
  { path: '/australia/google-display-advertising-agency', postId: 97 }, // Google Display Ads
  { path: '/australia/google-shopping-ads-agency-sydney', postId: 974 }, // Google Shopping Ads
  { path: '/australia/link-building-agency-sydney', postId: 9930 }, // Link building
  { path: '/australia/local-seo', postId: 9932 }, // Local SEO
  { path: '/australia/logo-design-sydney', postId: 122 }, // Logo design
  { path: '/australia/mobile-marketing', postId: 101 }, // Mobile marketing
  { path: '/australia/off-page-seo-services-sydney', postId: 9936 }, // Off-Page SEO
  { path: '/australia/on-page-seo-optimization-services-sydney', postId: 9938 }, // On-Page SEO
  { path: '/australia/paid-search-agency-sydney', postId: 130 }, // Paid search
  { path: '/australia/pay-per-click', postId: 9942 }, // Pay per click
  { path: '/australia/ppc', postId: 9953 }, // PPC Agency
  { path: '/australia/reputation-management', postId: 11 }, // Reputation Management
  { path: '/australia/search-engine-optimization', postId: 9945 }, // Search Engine Optimization
  { path: '/australia/seo-packages', postId: 128 }, // SEO packages
  { path: '/australia/seo-website-migration-services-sydney', postId: 159 }, // SEO website migration
  { path: '/australia/social-media-branding', postId: 133 }, // Social media branding
  { path: '/australia/social-media-marketing', postId: 628 }, // Social media marketing
  { path: '/australia/technical-seo-services-sydney', postId: 9955 }, // Technical SEO
  { path: '/australia/web-design', postId: 59 }, // Web Design
  { path: '/australia/web-designing-packages', postId: 9958 }, // Web design packages
  { path: '/australia/web-development', postId: 9961 }, // Web development
  { path: '/australia/website-design-in-brisbane', postId: 11772 }, // Website design Brisbane
  { path: '/australia/website-design-company-in-melbourne', postId: 11856 }, // Website design Melbourne
  { path: '/australia/youtube-advertising-agency-sydney', postId: 9962 } // Youtube Advertising Agency
];

const TARGET_META_KEYS = [
  'metatitle',
  'metadescription',
  'title',
  'description',
  'og_title',
  'og_image',
  'og_description',
  'robots'
];

async function importAustraliaPageSeo() {
  let connection;
  try {
    const postmetaPath = path.join(__dirname, '../blog_data/postmeta_australia.json');

    if (!fs.existsSync(postmetaPath)) {
      console.error('[Australia SEO Import] Missing postmeta_australia.json in blog_data/ directory.');
      return;
    }

    console.log('[Australia SEO Import] Loading postmeta_australia.json (268.9 MB)...');
    const rawPostmeta = fs.readFileSync(postmetaPath, 'utf8');
    console.log('[Australia SEO Import] Parsing JSON...');
    const json = JSON.parse(rawPostmeta);

    // Egb5OL_postmeta table data resides in the 3rd object in phpMyAdmin export array
    const tableObj = json[2];
    if (!tableObj || !tableObj.data) {
      console.error('[Australia SEO Import] Could not locate Egb5OL_postmeta table data inside JSON.');
      return;
    }

    const postmetaArray = tableObj.data;
    console.log(`[Australia SEO Import] Loaded ${postmetaArray.length} postmeta entries. Indexing...`);

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

    console.log(`[Australia SEO Import] Found custom SEO metadata for ${Object.keys(seoDataByPostId).length} pages.`);

    // Connect to database
    connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_NAME || 'flymedia_db',
    });

    console.log('[Australia SEO Import] Connected to database. Synchronizing pageseos table...');

    let insertedCount = 0;
    let updatedCount = 0;

    for (const mapping of MAPPINGS) {
      const pageUrl = mapping.path;
      const postIdStr = mapping.postId.toString();
      const meta = seoDataByPostId[postIdStr] || {};

      // Match ACF custom fields first, then default keys
      const title = meta['metatitle'] || meta['title'] || null;
      if (!title) {
        console.warn(`[Australia SEO Import] No title found for ${pageUrl} (post_id: ${postIdStr}), skipping.`);
        continue;
      }

      const description = meta['metadescription'] || meta['description'] || null;
      const ogTitle = meta['og_title'] || title;
      const ogDescription = meta['og_description'] || description;
      let ogImage = meta['og_image'] || null;
      if (ogImage) {
        ogImage = ogImage.replace(/^https?:\/\/[^\/]+\/wp-content\/uploads\//i, '/uploads/');
      }
      const canonicalUrl = `https://flymediatech.com${pageUrl}`;
      const noindex = meta['robots'];
      const metaRobots = noindex === '1' || noindex === 'noindex' ? 'noindex, nofollow' : 'index, follow';
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
            ogTitle,
            ogDescription,
            ogImage,
            canonicalUrl,
            metaRobots,
            pageUrl
          ]
        );
        updatedCount++;
        console.log(`[Australia SEO Import] Updated: ${pageUrl}`);
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
        console.log(`[Australia SEO Import] Inserted: ${pageUrl}`);
      }
    }

    console.log(`[Australia SEO Import] Done! Successfully synced pageseos table: ${insertedCount} inserted, ${updatedCount} updated.`);
  } catch (err) {
    console.error('[Australia SEO Import] Fatal error during import:', err.message);
  } finally {
    if (connection) await connection.end();
  }
}

importAustraliaPageSeo();
