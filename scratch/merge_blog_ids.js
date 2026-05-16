const fs = require('fs');
const path = require('path');

const testdataFile = path.join(process.cwd(), 'blog_data', 'db_blog_ids.json');
const blogWithImagesFile = path.join(process.cwd(), 'blog_data', 'blog_with_images.json');
const outputFile = path.join(process.cwd(), 'blog_data', 'blog_with_ids.json');

console.log('Reading files...');
const testdata = JSON.parse(fs.readFileSync(testdataFile, 'utf8'));
const blogWithImages = JSON.parse(fs.readFileSync(blogWithImagesFile, 'utf8'));

// Create a map of slug to id
const slugToId = {};
testdata.forEach(item => {
    if (item.slug && item.id) {
        slugToId[item.slug] = item.id;
    }
});

console.log(`Mapping ${Object.keys(slugToId).length} slugs to IDs...`);

// Update blogWithImages with IDs
let updatedCount = 0;
const updatedBlogs = blogWithImages.map(blog => {
    if (slugToId[blog.slug]) {
        updatedCount++;
        return {
            id: slugToId[blog.slug],
            ...blog
        };
    }
    return blog;
});

console.log(`Updated ${updatedCount} out of ${blogWithImages.length} blogs.`);

fs.writeFileSync(outputFile, JSON.stringify(updatedBlogs, null, 2));
console.log(`Success! Saved to ${outputFile}`);
