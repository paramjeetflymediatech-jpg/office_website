const fs = require('fs');
const path = require('path');

const inputFile = path.join(process.cwd(), 'blog_data', 'Egb5OL_postmeta (1).json');
const outputFile = path.join(process.cwd(), 'blog_data', 'postmeta_clean.json');

console.log('Reading file...');
const rawData = fs.readFileSync(inputFile, 'utf8');

console.log('Parsing JSON...');
try {
    const json = JSON.parse(rawData);
    // phpMyAdmin JSON export is an array where the table data is in one of the objects
    const tableObj = json.find(obj => obj.type === 'table' && obj.name === 'Egb5OL_postmeta');
    
    if (tableObj && tableObj.data) {
        console.log(`Found ${tableObj.data.length} records. Writing to ${outputFile}...`);
        fs.writeFileSync(outputFile, JSON.stringify(tableObj.data, null, 2));
        console.log('Success!');
    } else {
        console.error('Could not find table data in the JSON file.');
    }
} catch (err) {
    console.error('Error parsing JSON:', err.message);
    console.log('Attempting stream-based extraction for large file...');
    
    // Fallback: If JSON.parse fails due to size, use a simpler regex or manual search
    // (Though 116MB should fit in memory for Node.js if memory limit is default)
}
