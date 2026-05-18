const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'blog_data', 'postmeta_india.json');
console.log('Reading file...');
const rawData = fs.readFileSync(filePath, 'utf8');
const json = JSON.parse(rawData);
const tableObj = json.find(obj => obj.type === 'table' && obj.name === 'Egb5OL_postmeta');

if (tableObj && tableObj.data) {
    const keyCounts = {};
    for (const item of tableObj.data) {
        const k = item.meta_key;
        keyCounts[k] = (keyCounts[k] || 0) + 1;
    }
    const sortedKeys = Object.entries(keyCounts).sort((a, b) => b[1] - a[1]);
    console.log('Unique meta keys (top 50):');
    console.log(sortedKeys.slice(0, 50));
} else {
    console.log('Could not find table data');
}
