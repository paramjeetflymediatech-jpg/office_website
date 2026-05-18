const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'blog_data', 'postmeta_india.json');
console.log('Reading file...');
const rawData = fs.readFileSync(filePath, 'utf8');
const json = JSON.parse(rawData);
const tableObj = json.find(obj => obj.type === 'table' && obj.name === 'Egb5OL_postmeta');

if (tableObj && tableObj.data) {
    // Group meta by post_id
    const metaByPostId = {};
    for (const item of tableObj.data) {
        const pid = item.post_id;
        if (!metaByPostId[pid]) {
            metaByPostId[pid] = {};
        }
        metaByPostId[pid][item.meta_key] = item.meta_value;
    }

    const pagesInfo = [];
    for (const [pid, meta] of Object.entries(metaByPostId)) {
        if (meta.title) {
            pagesInfo.push({
                post_id: pid,
                title: meta.title,
                description: meta.description || '',
                robots: meta.robots || '',
                og_title: meta.og_title || '',
                og_image: meta.og_image || '',
                og_description: meta.og_description || '',
                scriptseo: meta.scriptseo || ''
            });
        }
    }

    console.log(`Found ${pagesInfo.length} entries with 'title'.`);
    // Print first 100 entries to check
    fs.writeFileSync(
        path.join(process.cwd(), 'scratch', 'extracted_titles.json'),
        JSON.stringify(pagesInfo, null, 2)
    );
    console.log('Saved to scratch/extracted_titles.json. Showing first 30 entries:');
    console.log(pagesInfo.slice(0, 30));
} else {
    console.log('Could not find table data');
}
