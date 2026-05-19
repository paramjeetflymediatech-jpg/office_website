const fs = require('fs');
const path = require('path');

const MAPPINGS = [
  { path: '/canada', postId: 10946 }, // Surrey Digital Marketing
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

function testCanadaImport() {
  const postmetaPath = path.join(__dirname, '../blog_data/postmeta_india.json');

  if (!fs.existsSync(postmetaPath)) {
    console.error('Missing postmeta_india.json');
    return;
  }

  console.log('Loading postmeta_india.json...');
  const rawPostmeta = fs.readFileSync(postmetaPath, 'utf8');
  console.log('Parsing JSON...');
  const json = JSON.parse(rawPostmeta);
  const tableObj = json.find(obj => obj.type === 'table' && obj.name === 'Egb5OL_postmeta');

  if (!tableObj || !tableObj.data) {
    console.error('Could not locate Egb5OL_postmeta table data');
    return;
  }

  const postmetaArray = tableObj.data;
  console.log(`Loaded ${postmetaArray.length} postmeta entries.`);

  const seoDataByPostId = {};
  const mappedPostIds = MAPPINGS.map(m => m.postId.toString());

  for (const item of postmetaArray) {
    const postIdStr = item.post_id ? item.post_id.toString() : '';
    if (!postIdStr || !mappedPostIds.includes(postIdStr)) continue;

    const metaKey = item.meta_key;
    if (!TARGET_META_KEYS.includes(metaKey)) continue;

    if (!seoDataByPostId[postIdStr]) {
      seoDataByPostId[postIdStr] = {};
    }

    seoDataByPostId[postIdStr][metaKey] = item.meta_value;
  }

  console.log(`Found SEO data for ${Object.keys(seoDataByPostId).length} mapped IDs.`);

  for (const mapping of MAPPINGS) {
    const pageUrl = mapping.path;
    const postIdStr = mapping.postId.toString();
    const meta = seoDataByPostId[postIdStr] || {};

    const title = meta['title'] || null;
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

    console.log(`\n==================================================`);
    console.log(`Path: ${pageUrl} (Post ID: ${postIdStr})`);
    console.log(`Title: ${title}`);
    console.log(`Description: ${description}`);
    console.log(`Keywords: ${keywords}`);
    console.log(`Canonical: ${canonicalUrl}`);
    console.log(`Robots: ${metaRobots}`);
    console.log(`OG Image: ${ogImage}`);
    console.log(`Custom Schema: ${customSchema ? 'Yes (length: ' + customSchema.length + ')' : 'No'}`);
  }
}

testCanadaImport();
