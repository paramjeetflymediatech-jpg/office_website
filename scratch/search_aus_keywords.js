const fs = require('fs');
const path = require('path');

const postmetaPath = path.join(process.cwd(), 'blog_data', 'postmeta_australia.json');
const rawPostmeta = fs.readFileSync(postmetaPath, 'utf8');
const parsed = JSON.parse(rawPostmeta);
const postmetaArray = parsed[2]?.data || [];

const keywords = ['brisbane', 'melbourne', 'blacktown', 'seven hills', 'quakers hill', 'sydney', 'seo-packages', 'web-design', 'about-us'];

const matches = [];
for (const item of postmetaArray) {
    const val = item.meta_value || '';
    const key = item.meta_key || '';
    
    // Check if value contains any of our keywords (case-insensitive)
    for (const kw of keywords) {
        if (val.toLowerCase().includes(kw)) {
            matches.push({
                post_id: item.post_id,
                meta_key: key,
                matched_keyword: kw,
                value_snippet: val.slice(0, 100)
            });
            break;
        }
    }
}

console.log(`Found ${matches.length} matches in postmeta.`);
console.log('Sample matches:');
console.log(matches.slice(0, 30));

// Group by post_id and find the ones with ACF title/description
const grouped = {};
for (const m of matches) {
    grouped[m.post_id] = (grouped[m.post_id] || 0) + 1;
}
console.log(`Unique post_ids matching keywords: ${Object.keys(grouped).length}`);
