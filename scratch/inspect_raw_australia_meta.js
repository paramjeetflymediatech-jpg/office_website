const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'blog_data', 'postmeta_australia.json');
const rawData = fs.readFileSync(filePath, 'utf8');
const parsed = JSON.parse(rawData);

console.log('Is Array?', Array.isArray(parsed));
if (Array.isArray(parsed)) {
    console.log('Length:', parsed.length);
    console.log('Sample 0:', parsed[0]);
    console.log('Sample 1:', parsed[1]);
    console.log('Sample 2:', parsed[2]);
} else {
    console.log('Keys:', Object.keys(parsed));
    if (parsed.type) console.log('Type:', parsed.type);
    if (parsed.name) console.log('Name:', parsed.name);
    if (parsed.data) {
        console.log('Data is array?', Array.isArray(parsed.data));
        console.log('Data length:', parsed.data.length);
        console.log('Data sample:', parsed.data.slice(0, 3));
    }
}
