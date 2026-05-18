const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'blog_data', 'australia_blog.json');
const rawData = fs.readFileSync(filePath, 'utf8');
const blogs = JSON.parse(rawData);

console.log('Total entries:', blogs.length);
console.log('Sample entry keys:', Object.keys(blogs[0] || {}));
console.log('Sample entry excerpt:', blogs[0]?.excerpt);
console.log('Sample entry titles & types:');
blogs.slice(0, 15).forEach((b, i) => {
    console.log(`[${i}] ID: ${b.id} | Slug: ${b.slug} | Type: ${b.type || 'N/A'} | Title: ${b.title?.rendered || b.title}`);
});
