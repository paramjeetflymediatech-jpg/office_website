const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'blog_data', 'australia_blog.json');
const blogs = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const types = {};
blogs.forEach(b => {
    types[b.type] = (types[b.type] || 0) + 1;
});
console.log('Post types in australia_blog.json:', types);
