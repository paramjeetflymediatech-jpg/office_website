const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'blog_data', 'postmeta_india.json');
const rawData = fs.readFileSync(filePath, 'utf8');
const json = JSON.parse(rawData);
const tableObj = json.find(obj => obj.type === 'table' && obj.name === 'Egb5OL_postmeta');

if (tableObj && tableObj.data) {
    const metaByPostId = {};
    for (const item of tableObj.data) {
        const pid = item.post_id;
        if (!metaByPostId[pid]) {
            metaByPostId[pid] = {};
        }
        metaByPostId[pid][item.meta_key] = item.meta_value;
    }

    const matches = [];
    for (const [pid, meta] of Object.entries(metaByPostId)) {
        const title = meta.title || '';
        const desc = meta.description || '';
        if (title.toLowerCase().includes('about') || desc.toLowerCase().includes('about')) {
            matches.push({ post_id: pid, title, desc });
        }
    }
    console.log(`Found ${matches.length} matching posts.`);
    console.log(matches);
}
