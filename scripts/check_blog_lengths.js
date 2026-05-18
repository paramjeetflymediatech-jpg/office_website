const fs = require('fs');
const path = require('path');

const blogFilePath = path.join(__dirname, '../blog_data/blog.json');
if (!fs.existsSync(blogFilePath)) {
  console.log('blog.json not found!');
  process.exit(0);
}

const blogs = JSON.parse(fs.readFileSync(blogFilePath, 'utf8'));
console.log(`Checking ${blogs.length} blogs...`);

let maxTitle = 0, maxSlug = 0, maxDesc = 0, maxKeywords = 0, maxOgTitle = 0, maxOgDesc = 0;
let longTitleBlog = null;
let longDescBlog = null;

for (const blog of blogs) {
  const title = blog.seo_title || blog.title || '';
  const desc = blog.seo_description || '';
  const slug = blog.slug || '';
  const keywords = blog.seo_keywords || '';

  if (title.length > maxTitle) {
    maxTitle = title.length;
    longTitleBlog = blog;
  }
  if (slug.length > maxSlug) maxSlug = slug.length;
  if (desc.length > maxDesc) {
    maxDesc = desc.length;
    longDescBlog = blog;
  }
  if (keywords.length > maxKeywords) maxKeywords = keywords.length;
}

console.log(`Max Title Length: ${maxTitle}`);
console.log(`Max Slug Length: ${maxSlug}`);
console.log(`Max Description Length: ${maxDesc}`);
console.log(`Max Keywords Length: ${maxKeywords}`);

if (longTitleBlog) {
  console.log('\nBlog with longest title:', {
    slug: longTitleBlog.slug,
    title: longTitleBlog.seo_title || longTitleBlog.title,
    length: maxTitle
  });
}

if (longDescBlog) {
  console.log('\nBlog with longest description:', {
    slug: longDescBlog.slug,
    length: maxDesc,
    desc: longDescBlog.seo_description.slice(0, 100) + '...'
  });
}
