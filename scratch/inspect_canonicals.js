const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'blog_data', 'postmeta_india.json');
console.log('Reading file...');
const rawData = fs.readFileSync(filePath, 'utf8');
const json = JSON.parse(rawData);
const tableObj = json.find(obj => obj.type === 'table' && obj.name === 'Egb5OL_postmeta');

if (tableObj && tableObj.data) {
    console.log('Total records:', tableObj.data.length);
    const canonicals = tableObj.data.filter(item => item.meta_key === '_yoast_wpseo_canonical');
    console.log('Found', canonicals.length, 'canonicals.');
    console.log('Sample canonicals:');
    console.log(canonicals.slice(0, 30));
} else {
    console.log('Could not find table data');
}
