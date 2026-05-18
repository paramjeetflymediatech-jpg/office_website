const fs = require('fs');
const path = require('path');

const australiaBlogPath = path.join(process.cwd(), 'blog_data', 'australia_blog.json');
const postmetaPath = path.join(process.cwd(), 'blog_data', 'postmeta_australia.json');

console.log('Loading Australia blog posts...');
const blogs = JSON.parse(fs.readFileSync(australiaBlogPath, 'utf8'));
const blogIds = new Set(blogs.map(b => b.id.toString()));
console.log(`Found ${blogIds.size} Australia blog post IDs.`);

console.log('Reading postmeta_australia.json (268.9 MB)...');
const rawPostmeta = fs.readFileSync(postmetaPath, 'utf8');
console.log('Parsing JSON...');
const parsed = JSON.parse(rawPostmeta);

// Access the 3rd object in the array where data is stored
const postmetaArray = parsed[2]?.data || [];

console.log(`Loaded ${postmetaArray.length} postmeta entries. Grouping by post_id...`);
const metaByPostId = {};
for (const item of postmetaArray) {
    const pid = item.post_id ? item.post_id.toString() : '';
    if (!pid || blogIds.has(pid)) continue; // Skip if empty or a blog post
    
    if (!metaByPostId[pid]) {
        metaByPostId[pid] = {};
    }
    metaByPostId[pid][item.meta_key] = item.meta_value;
}

console.log(`Found ${Object.keys(metaByPostId).length} non-blog posts in Australia postmeta.`);

// Let's filter those that have ACF SEO fields
const staticPages = [];
for (const [pid, meta] of Object.entries(metaByPostId)) {
    const title = meta['metatitle'] || '';
    const desc = meta['metadescription'] || '';
    if (title || desc) {
        staticPages.push({
            post_id: pid,
            title,
            desc,
            og_title: meta['og_title'] || '',
            og_description: meta['og_description'] || '',
            og_image: meta['og_image'] || '',
            meta_keys: Object.keys(meta)
        });
    }
}

console.log(`Found ${staticPages.length} static pages/services with ACF SEO configured:`);
console.log(staticPages);
