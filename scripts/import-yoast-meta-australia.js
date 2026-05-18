require('dotenv').config();
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');

const IDS = [
  5709, 5715, 6313, 6306, 6303, 6298, 6344, 6340, 6335, 6330,
  5726, 6321, 6316, 6326, 5710, 5367, 5364, 6294, 6290, 5356,
  6285, 6225, 6217, 5403, 5711, 6095, 5818, 5713, 5815, 5765,
  5763, 5760, 5725, 5724, 5723, 5722, 5706, 5721, 5720, 5719,
  5718, 5717, 5716, 5714, 5712, 5396, 5389, 5383, 5371, 5362,
  5360, 5353, 5347, 5344, 5338, 5341, 5335, 5331, 5327, 5323,
  5318, 5313, 5316, 5310, 5307, 5304, 5299, 5284, 5280, 5276,
  5272, 5269, 5265, 5260, 5257, 5253, 5245, 5242, 5239, 5235,
  5230, 5227, 5222, 5219, 5215, 5210, 5200, 5197, 5193, 5188,
  5184, 5179, 5174, 5165, 5161, 5158, 5154, 5151, 5148, 5144
];

const TARGET_META_KEYS = [
  '_yoast_wpseo_title',
  '_yoast_wpseo_metadesc',
  '_yoast_wpseo_focuskw',
  '_yoast_wpseo_canonical',
  '_yoast_wpseo_opengraph-title',
  '_yoast_wpseo_opengraph-description',
  '_yoast_wpseo_opengraph-image',
  '_yoast_wpseo_meta-robots-noindex'
];

async function importYoastMeta() {
  let connection;
  try {
    const australiaBlogPath = path.join(__dirname, '../blog_data/australia_blog.json');
    const postmetaPath = path.join(__dirname, '../blog_data/postmeta_australia.json');

    if (!fs.existsSync(australiaBlogPath) || !fs.existsSync(postmetaPath)) {
      console.error('[SEO Import] Missing required JSON files in blog_data/ directory.');
      return;
    }

    // 1. Create Post ID -> Slug Map from australia_blog.json
    console.log('[SEO Import] Loading Australia blog data...');
    const blogs = JSON.parse(fs.readFileSync(australiaBlogPath, 'utf8'));
    const idToSlugMap = {};
    for (const blog of blogs) {
      if (blog.id && blog.slug) {
        idToSlugMap[blog.id.toString()] = blog.slug;
      }
    }
    console.log(`[SEO Import] Mapped ${Object.keys(idToSlugMap).length} Post IDs to slugs.`);

    // 2. Read postmeta_australia.json and extract SEO parameters
    console.log('[SEO Import] Reading postmeta_australia.json (268.9 MB)...');

    const rawPostmeta = fs.readFileSync(postmetaPath, 'utf8');
    console.log('[SEO Import] Parsing JSON...');
    const json = JSON.parse(rawPostmeta);
    
    const tableObj = json.find(obj => obj.type === 'table' && obj.name === 'Egb5OL_postmeta') || json[2];
    if (!tableObj || !tableObj.data) {
      console.error('[SEO Import] Could not locate Egb5OL_postmeta table data inside JSON.');
      return;
    }
    
    const postmetaArray = tableObj.data;
    console.log(`[SEO Import] Loaded ${postmetaArray.length} postmeta entries. Filtering for our blogs...`);

    const seoDataByPostId = {};

    for (const item of postmetaArray) {
      const postIdStr = item.post_id ? item.post_id.toString() : '';
      if (!postIdStr || !idToSlugMap[postIdStr]) continue; // Only care about our Australia posts

      const metaKey = item.meta_key;
      if (!TARGET_META_KEYS.includes(metaKey)) continue; // Only care about Yoast SEO keys

      if (!seoDataByPostId[postIdStr]) {
        seoDataByPostId[postIdStr] = {};
      }

      seoDataByPostId[postIdStr][metaKey] = item.meta_value;
    }

    console.log(`[SEO Import] Found custom Yoast SEO metadata for ${Object.keys(seoDataByPostId).length} Australia posts.`);

    // 3. Connect to database and update blogs table
    connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_NAME || 'flymedia_db',
    });

    console.log('[SEO Import] Connected to database. Updating posts...');

    let updatedCount = 0;

    for (const [postId, meta] of Object.entries(seoDataByPostId)) {
      const slug = idToSlugMap[postId];
      if (!slug) continue;

      const metaTitle = meta['_yoast_wpseo_title'] || null;
      const metaDescription = meta['_yoast_wpseo_metadesc'] || null;
      const focusKeyword = meta['_yoast_wpseo_focuskw'] || null;
      const keywords = focusKeyword;
      const ogTitle = meta['_yoast_wpseo_opengraph-title'] || metaTitle || null;
      const ogDescription = meta['_yoast_wpseo_opengraph-description'] || metaDescription || null;
      let ogImage = meta['_yoast_wpseo_opengraph-image'] || null;
      if (ogImage) {
        ogImage = ogImage.replace(/^https?:\/\/[^\/]+\/(?:australia\/)?wp-content\/uploads\//i, '/uploads/');
      }
      const canonicalUrl = meta['_yoast_wpseo_canonical'] || `https://flymediatech.com/australia/blog/${slug}`;

      const noindex = meta['_yoast_wpseo_meta-robots-noindex'];
      const metaRobots = noindex === '1' || noindex === 'noindex' ? 'noindex, nofollow' : 'index, follow';

      try {
        const [result] = await connection.execute(
          `UPDATE blogs SET 
            metaTitle = COALESCE(?, metaTitle),
            metaDescription = COALESCE(?, metaDescription),
            focusKeyword = COALESCE(?, focusKeyword),
            keywords = COALESCE(?, keywords),
            ogTitle = COALESCE(?, ogTitle),
            ogDescription = COALESCE(?, ogDescription),
            ogImage = COALESCE(?, ogImage),
            canonicalUrl = COALESCE(?, canonicalUrl),
            metaRobots = ?
          WHERE slug = ? AND region = 'australia'`,
          [
            metaTitle,
            metaDescription,
            focusKeyword,
            keywords,
            ogTitle,
            ogDescription,
            ogImage,
            canonicalUrl,
            metaRobots,
            slug
          ]
        );

        if (result.affectedRows > 0) {
          updatedCount++;
          console.log(`[SEO Import] [${updatedCount}] Updated SEO for: /australia/blog/${slug}`);
        }
      } catch (err) {
        console.error(`[SEO Import] Failed to update SEO for slug ${slug}:`, err.message);
      }
    }

    console.log(`[SEO Import] Completed! Successfully updated custom Yoast SEO meta for ${updatedCount} blogs.`);
  } catch (err) {
    console.error('[SEO Import] Fatal Error:', err.message);
  } finally {
    if (connection) await connection.end();
  }
}

importYoastMeta();
