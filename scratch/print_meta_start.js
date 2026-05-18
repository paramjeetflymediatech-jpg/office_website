const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'blog_data', 'postmeta_australia.json');
const rawData = fs.readFileSync(filePath, 'utf8');

console.log(rawData.slice(0, 1000));
