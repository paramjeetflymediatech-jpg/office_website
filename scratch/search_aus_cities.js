const fs = require('fs');
const path = require('path');

const catalog = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'scratch', 'aus_seo_catalog.json'), 'utf8'));

const melbourneMatches = catalog.filter(c => c.title.toLowerCase().includes('melbourne') || c.desc.toLowerCase().includes('melbourne'));
const brisbaneMatches = catalog.filter(c => c.title.toLowerCase().includes('brisbane') || c.desc.toLowerCase().includes('brisbane'));

console.log('Melbourne Matches:');
console.log(melbourneMatches);

console.log('\nBrisbane Matches:');
console.log(brisbaneMatches);
