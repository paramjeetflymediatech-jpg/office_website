const fs = require('fs');
const path = require('path');

const titlesPath = path.join(process.cwd(), 'scratch', 'extracted_titles.json');
const pages = JSON.parse(fs.readFileSync(titlesPath, 'utf8'));

const matches = pages.filter(item => {
    return item.title.toLowerCase().includes('about') || 
           item.description.toLowerCase().includes('about') ||
           item.title.toLowerCase().includes('who we are');
});

console.log('Matches for about or who we are:', matches.slice(0, 10));
