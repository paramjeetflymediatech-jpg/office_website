const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'blog_data', 'postmeta_india.json');
const rawData = fs.readFileSync(filePath, 'utf8');
const json = JSON.parse(rawData);
const tableObj = json.find(obj => obj.type === 'table' && obj.name === 'Egb5OL_postmeta');

if (tableObj && tableObj.data) {
    console.log('Total records:', tableObj.data.length);
    console.log('First 5 records:');
    console.log(JSON.stringify(tableObj.data.slice(0, 5), null, 2));
} else {
    console.log('Could not find table data');
}
