const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'blog_data', 'postmeta_india.json');
const rawData = fs.readFileSync(filePath, 'utf8');
const json = JSON.parse(rawData);
const tableObj = json.find(obj => obj.type === 'table' && obj.name === 'Egb5OL_postmeta');

if (tableObj && tableObj.data) {
    const postIds = new Set();
    const matches = tableObj.data.filter(item => {
        const val = item.meta_value ? item.meta_value.toLowerCase() : '';
        return val.includes('about-us') || val.includes('about us');
    });
    
    matches.forEach(m => postIds.add(m.post_id));
    console.log('Unique post_ids containing about-us or about us:', Array.from(postIds));
    
    // For each unique post ID, let's see if we have titles or elements
    for (const pid of postIds) {
        const titleMeta = tableObj.data.find(item => item.post_id === pid && item.meta_key === 'title');
        const yoastTitleMeta = tableObj.data.find(item => item.post_id === pid && item.meta_key === '_yoast_wpseo_title');
        console.log(`post_id: ${pid} | title key: ${titleMeta ? titleMeta.meta_value : 'N/A'} | yoast title: ${yoastTitleMeta ? yoastTitleMeta.meta_value : 'N/A'}`);
    }
}
