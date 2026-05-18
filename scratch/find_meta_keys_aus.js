const fs = require('fs');
const path = require('path');

const postmetaPath = path.join(process.cwd(), 'blog_data', 'postmeta_australia.json');
const rawPostmeta = fs.readFileSync(postmetaPath, 'utf8');
const parsed = JSON.parse(rawPostmeta);
const postmetaArray = parsed[2]?.data || [];

const keys = new Set();
for (const item of postmetaArray) {
    if (item.meta_key) {
        keys.add(item.meta_key);
    }
}

console.log('Unique meta keys found:', keys.size);
console.log('Sample meta keys:', Array.from(keys).slice(0, 100));

// Check specifically if any key contains seo, yoast, description, or title
const matches = Array.from(keys).filter(k => 
    k.toLowerCase().includes('seo') || 
    k.toLowerCase().includes('yoast') || 
    k.toLowerCase().includes('desc') || 
    k.toLowerCase().includes('title')
);
console.log('Matching meta keys for SEO/Title/Desc:', matches);
