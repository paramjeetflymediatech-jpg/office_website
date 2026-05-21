require('dotenv').config();
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');

// Complete mappings of Next.js static pages to WordPress post/page IDs in postmeta_india.json
const MAPPINGS = [
  { path: '/', postId: 24 }, // Home
  { path: '/about-us', postId: 11710 }, // About Us
  { path: '/contact-us', postId: 20 }, // Contact Us
  { path: '/apply-for-job', postId: 495 }, // Apply Job
  { path: '/current-job-opening', postId: 694 }, // Job opening
  { path: '/seo-jobs', postId: 1403 }, // SEO Jobs
  { path: '/computer-jobs', postId: 672 }, // Computer Jobs
  { path: '/web-developer-jobs', postId: 1468 }, // Web Developer Jobs
  { path: '/bariatric-gastric-bypass-surgery-marketing-services', postId: 139 }, // Bariatric marketing
  { path: '/gastric-bypass-surgery-digital-marketing', postId: 139 }, // Gastric bypass marketing
  { path: '/cms-for-website', postId: 157 }, // CMS for Website
  { path: '/cosmetic-surgery-digital-marketing', postId: 143 }, // Cosmetic surgery marketing
  { path: '/ent-online-marketing', postId: 151 }, // ENT hospital marketing
  { path: '/facelift-surgeons-digital-marketing', postId: 153 }, // Facelift surgeons marketing
  { path: '/hair-transplant-clinic-digital-marketing', postId: 149 }, // Hair transplant clinic marketing
  { path: '/orthopedic-hospital-digital-marketing', postId: 145 }, // Orthopedic hospital marketing
  { path: '/plastic-surgery-digital-marketing', postId: 141 }, // Plastic surgery marketing
  { path: '/ivf-clinic-digital-marketing-india', postId: 147 }, // IVF clinic marketing
  { path: '/digital-marketing-de-addiction-rehab-center', postId: 137 }, // Rehab marketing
  { path: '/digital-marketing-packages-india', postId: 128 }, // DM packages
  { path: '/ecommerce-website-development-packages-india', postId: 126 }, // Ecommerce packages
  { path: '/google-ads-ppc-packages-india', postId: 130 }, // PPC packages
  { path: '/logo-design-packages-india', postId: 122 }, // Logo design packages
  { path: '/website-designing-packages-india', postId: 124 }, // Website designing packages
  { path: '/seo-packages-india', postId: 128 }, // SEO packages
  { path: '/social-media-branding-packages-india', postId: 133 }, // Social media packages
  { path: '/web-designing-company-in-jalandhar', postId: 628 }, // Jalandhar web design
  { path: '/web-design-company-in-india', postId: 159 }, // India web design
  { path: '/laravel-website-development-in-india', postId: 14053 }, // Laravel web development
  { path: '/full-stack-development-in-india', postId: 14042 }, // Full stack development
  { path: '/content-writing', postId: 99 }, // Content writing
  { path: '/nabh-consultants', postId: 161 }, // NABH consultants
  { path: '/product-photography-in-ludhiana', postId: 13191 }, // Product photography
  { path: '/portfolio', postId: 1384 }, // Portfolio
  { path: '/it-company-in-ludhiana', postId: 117 }, // IT company Ludhiana
  { path: '/digital-marketing', postId: 91 }, // Digital marketing
  { path: '/an-instagram-marketing-company-in-ludhiana', postId: 155 }, // Instagram company Ludhiana
  { path: '/seo-training-internship-program', postId: 163 }, // SEO training
  { path: '/how-we-work', postId: 10 }, // How we work
  { path: '/our-services', postId: 11 }, // Our services
  { path: '/pay-per-click-ppc', postId: 97 }, // Pay per click
  { path: '/social-media-optimization', postId: 3519 }, // SMO
  { path: '/mobile-apps-development', postId: 101 }, // Mobile app dev
  { path: '/request-free-quote', postId: 887 }, // Free quote
  { path: '/top-10-moving-companies-in-calgary', postId: 14257 } // Calgary moving companies
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

async function importPageSeo() {
  let connection;
  try {
    const postmetaPath = path.join(__dirname, '../blog_data/postmeta_india.json');

    if (!fs.existsSync(postmetaPath)) {
      console.error('[Page SEO Import] Missing postmeta_india.json in blog_data/ directory.');
      return;
    }

    console.log('[Page SEO Import] Loading postmeta_india.json (116 MB)...');
    const rawPostmeta = fs.readFileSync(postmetaPath, 'utf8');
    console.log('[Page SEO Import] Parsing JSON...');
    const json = JSON.parse(rawPostmeta);
    const tableObj = json.find(obj => obj.type === 'table' && obj.name === 'Egb5OL_postmeta');

    if (!tableObj || !tableObj.data) {
      console.error('[Page SEO Import] Could not locate Egb5OL_postmeta table data inside JSON.');
      return;
    }

    const postmetaArray = tableObj.data;
    console.log(`[Page SEO Import] Loaded ${postmetaArray.length} postmeta entries. Indexing...`);

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

    console.log(`[Page SEO Import] Found custom SEO metadata for ${Object.keys(seoDataByPostId).length} pages.`);

    // Connect to database
    connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_NAME || 'flymedia_db',
    });

    console.log('[Page SEO Import] Connected to database. Synchronizing pageseos table...');

    let insertedCount = 0;
    let updatedCount = 0;

    for (const mapping of MAPPINGS) {
      const pageUrl = mapping.path;
      const postIdStr = mapping.postId.toString();
      const meta = seoDataByPostId[postIdStr] || {};

      const title = meta['title'] || null;
      if (!title) {
        console.warn(`[Page SEO Import] No title found for ${pageUrl} (post_id: ${postIdStr}), skipping.`);
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
        console.log(`[Page SEO Import] Updated: ${pageUrl}`);
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
        console.log(`[Page SEO Import] Inserted: ${pageUrl}`);
      }
    }

    console.log(`[Page SEO Import] Done! Successfully synced pageseos table: ${insertedCount} inserted, ${updatedCount} updated.`);
  } catch (err) {
    console.error('[Page SEO Import] Fatal error during import:', err.message);
  } finally {
    if (connection) await connection.end();
  }
}

importPageSeo();
