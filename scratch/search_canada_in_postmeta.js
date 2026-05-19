const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'blog_data', 'postmeta_india.json');
console.log('Loading postmeta_india.json...');
const rawData = fs.readFileSync(filePath, 'utf8');
console.log('Parsing JSON...');
const json = JSON.parse(rawData);
const tableObj = json.find(obj => obj.type === 'table' && obj.name === 'Egb5OL_postmeta');

if (!tableObj || !tableObj.data) {
    console.log('Could not find postmeta table data');
    process.exit(1);
}

const postmeta = tableObj.data;
console.log(`Found ${postmeta.length} records.`);

// Find all unique post_ids where the meta_value contains 'canada' or '/canada' (case insensitive)
const canadaPostIds = new Set();
const matches = [];

for (const record of postmeta) {
    const value = String(record.meta_value || '');
    const key = String(record.meta_key || '');
    if (value.toLowerCase().includes('canada') || key.toLowerCase().includes('canada')) {
        canadaPostIds.add(record.post_id);
        matches.push(record);
    }
}

console.log(`Found ${canadaPostIds.size} post IDs associated with "canada" keys/values:`, Array.from(canadaPostIds));
console.log('Sample matches (first 10):');
console.log(JSON.stringify(matches.slice(0, 10), null, 2));

// Let's also search for post_ids of well-known Canada pages in case they don't contain the word "canada" directly in meta_value
// For example, "vancouver", "edmonton"
const cities = ['vancouver', 'edmonton', 'calgary'];
const cityPostIds = new Set();
for (const record of postmeta) {
    const value = String(record.meta_value || '');
    if (cities.some(city => value.toLowerCase().includes(city))) {
        cityPostIds.add(record.post_id);
    }
}
console.log(`Found ${cityPostIds.size} post IDs associated with cities:`, Array.from(cityPostIds));
