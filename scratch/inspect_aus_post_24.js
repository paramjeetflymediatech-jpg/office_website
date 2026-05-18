const fs = require('fs');
const path = require('path');

const postmetaPath = path.join(process.cwd(), 'blog_data', 'postmeta_australia.json');
const rawPostmeta = fs.readFileSync(postmetaPath, 'utf8');
const parsed = JSON.parse(rawPostmeta);
const postmetaArray = parsed[2]?.data || [];

const meta = {};
for (const item of postmetaArray) {
    if (item.post_id === '24') {
        meta[item.meta_key] = item.meta_value;
    }
}

console.log('Meta for post_id 24:');
for (const [k, v] of Object.entries(meta)) {
    if (k === '_elementor_data') {
        console.log(`- ${k}: [Elementor Data omitted, length ${v.length}]`);
    } else {
        console.log(`- ${k}: ${v}`);
    }
}
