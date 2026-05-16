const fs = require('fs');
const path = require('path');

const blogFile = path.join(process.cwd(), 'blog_data', 'blog_with_images.json');
const postmetaFile = path.join(process.cwd(), 'blog_data', 'postmeta_clean.json');
const outputFile = path.join(process.cwd(), 'blog_data', 'blog_with_meta_id.json');

console.log('Reading files...');
const blogs = JSON.parse(fs.readFileSync(blogFile, 'utf8'));
const postmeta = JSON.parse(fs.readFileSync(postmetaFile, 'utf8'));

// Helper to clean strings for matching
function cleanString(str) {
    if (!str) return '';
    return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

// Helper to get image basename (no extension, no size suffix)
function getBasename(filename) {
    if (!filename) return '';
    // Remove extension
    let name = filename.split('.').slice(0, -1).join('.');
    // Remove WP size suffixes like -150x150, -1024x768, -scaled
    name = name.replace(/-\d+x\d+$/, '').replace(/-scaled$/, '');
    return name.toLowerCase();
}

// Group postmeta by post_id
console.log('Indexing postmeta...');
const metaByPostId = {};
postmeta.forEach(m => {
    if (!metaByPostId[m.post_id]) {
        metaByPostId[m.post_id] = {};
    }
    metaByPostId[m.post_id][m.meta_key] = m.meta_value;
});

// Create maps for matching
const imageToPostId = {};
const titleToPostId = {};
const slugToPostId = {};

Object.entries(metaByPostId).forEach(([postId, meta]) => {
    // Match by Image
    if (meta.og_image) {
        const filename = meta.og_image.split('/').pop();
        const base = getBasename(filename);
        if (base && base !== 'default') {
            if (!imageToPostId[base]) imageToPostId[base] = [];
            imageToPostId[base].push(postId);
        }
    }
    
    // Match by Title
    const seoTitle = meta.title || meta._yoast_wpseo_title || meta.metatitle || meta.og_title;
    if (seoTitle) {
        const key = cleanString(seoTitle);
        if (key) {
            if (!titleToPostId[key]) titleToPostId[key] = [];
            titleToPostId[key].push(postId);
        }
    }

    // Match by Old Slug
    if (meta._wp_old_slug) {
        slugToPostId[meta._wp_old_slug] = postId;
    }
});

console.log('Matching...');
let matchedByImage = 0;
let matchedByTitle = 0;
let matchedBySlug = 0;
let unmatched = 0;

const updatedBlogs = blogs.map(blog => {
    let postId = null;

    // 1. Match by Slug
    if (slugToPostId[blog.slug]) {
        postId = slugToPostId[blog.slug];
        matchedBySlug++;
    }

    // 2. Match by Image (Basename)
    if (!postId && blog.image && !blog.image.includes('default.jpg')) {
        const filename = blog.image.split('/').pop();
        const base = getBasename(filename);
        if (imageToPostId[base]) {
            postId = imageToPostId[base][0];
            matchedByImage++;
        }
    }

    // 3. Match by Title (Robust)
    if (!postId && blog.title) {
        const key = cleanString(blog.title);
        if (titleToPostId[key]) {
            postId = titleToPostId[key][0];
            matchedByTitle++;
        } else {
            // Fuzzy match
            for (const [tKey, ids] of Object.entries(titleToPostId)) {
                if (tKey.includes(key) || key.includes(tKey)) {
                    postId = ids[0];
                    matchedByTitle++;
                    break;
                }
            }
        }
    }

    if (postId) {
        const meta = metaByPostId[postId] || {};
        return {
            meta_id: parseInt(postId),
            ...blog,
            seo_title: meta.title || meta._yoast_wpseo_title || meta.metatitle || meta.og_title || blog.title || "",
            seo_description: meta.description || meta._yoast_wpseo_metadesc || meta.metadescription || meta.og_description || "",
            seo_keywords: meta.post_keyword || meta.metakeywords || ""
        };
    } else {
        unmatched++;
        return {
            meta_id: null,
            ...blog
        };
    }
});

console.log(`Matched by slug: ${matchedBySlug}`);
console.log(`Matched by image: ${matchedByImage}`);
console.log(`Matched by title: ${matchedByTitle}`);
console.log(`Unmatched: ${unmatched}`);

fs.writeFileSync(outputFile, JSON.stringify(updatedBlogs, null, 2));
console.log(`Success! Saved to ${outputFile}`);
