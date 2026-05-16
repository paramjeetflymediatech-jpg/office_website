const fs = require('fs');
const path = require('path');

const targetFile = path.join(process.cwd(), 'blog_data', 'blog.json');
const sourceFile = path.join(process.cwd(), 'blog_data', 'blog_with_meta_id.json');

console.log('Reading files...');
const targetBlogs = JSON.parse(fs.readFileSync(targetFile, 'utf8'));
const sourceBlogs = JSON.parse(fs.readFileSync(sourceFile, 'utf8'));

// Map source blogs by slug for easy lookup
const sourceMap = {};
sourceBlogs.forEach(b => {
    sourceMap[b.slug] = b;
});

let updatedCount = 0;
const updatedTarget = targetBlogs.map(blog => {
    const source = sourceMap[blog.slug];
    if (source) {
        updatedCount++;
        return {
            meta_id: source.meta_id,
            ...blog,
            seo_title: source.seo_title,
            seo_description: source.seo_description,
            seo_keywords: source.seo_keywords
        };
    }
    return blog;
});

console.log(`Updated ${updatedCount} blogs in blog.json`);
fs.writeFileSync(targetFile, JSON.stringify(updatedTarget, null, 2));
console.log('Success!');
