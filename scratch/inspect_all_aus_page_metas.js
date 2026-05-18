const fs = require('fs');
const path = require('path');

const postmetaPath = path.join(process.cwd(), 'blog_data', 'postmeta_australia.json');
const rawPostmeta = fs.readFileSync(postmetaPath, 'utf8');
const parsed = JSON.parse(rawPostmeta);
const postmetaArray = parsed[2]?.data || [];

const metaByPostId = {};
for (const item of postmetaArray) {
    const pid = item.post_id ? item.post_id.toString() : '';
    if (!pid) continue;
    
    if (!metaByPostId[pid]) {
        metaByPostId[pid] = {};
    }
    metaByPostId[pid][item.meta_key] = item.meta_value;
}

const catalog = [];
for (const [pid, meta] of Object.entries(metaByPostId)) {
    const title = meta['metatitle'] || meta['title'] || '';
    const desc = meta['metadescription'] || meta['description'] || '';
    const og_title = meta['og_title'] || '';
    
    if (title || desc) {
        catalog.push({
            post_id: pid,
            title: title.trim(),
            desc: desc.trim(),
            og_title: og_title.trim(),
            has_elementor: !!meta['_elementor_data']
        });
    }
}

console.log('Total entries cataloged:', catalog.length);
// Write to a temporary file in scratch so we can see all of them
const outPath = path.join(process.cwd(), 'scratch', 'aus_seo_catalog.json');
fs.writeFileSync(outPath, JSON.stringify(catalog, null, 2));
console.log(`Saved catalog of ${catalog.length} entries to ${outPath}`);
