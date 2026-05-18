const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'blog_data', 'postmeta_india.json');
console.log('Reading file...');
const rawData = fs.readFileSync(filePath, 'utf8');
const json = JSON.parse(rawData);
const tableObj = json.find(obj => obj.type === 'table' && obj.name === 'Egb5OL_postmeta');

if (tableObj && tableObj.data) {
    const pageMeta = tableObj.data.filter(item => item.post_id === '20');
    console.log('Metadata for post_id: 20:');
    console.log(JSON.stringify(pageMeta, null, 2));
} else {
    console.log('Could not find table data');
}
