const fs = require('fs');
const path = require('path');

const titlesPath = path.join(process.cwd(), 'scratch', 'extracted_titles.json');
const pages = JSON.parse(fs.readFileSync(titlesPath, 'utf8'));

const matches = pages.filter(item => {
    return item.title.toLowerCase().includes('digital marketing packages') || 
           item.description.toLowerCase().includes('digital marketing packages');
});

console.log('Matches for digital marketing packages:', matches);
