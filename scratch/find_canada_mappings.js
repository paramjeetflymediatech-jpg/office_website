const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'blog_data', 'postmeta_india.json');
console.log('Loading postmeta_india.json...');
const rawData = fs.readFileSync(filePath, 'utf8');
console.log('Parsing JSON...');
const json = JSON.parse(rawData);
const tableObj = json.find(obj => obj.type === 'table' && obj.name === 'Egb5OL_postmeta');

if (!tableObj || !tableObj.data) {
    console.log('Could not find postmeta table data');
    process.exit(1);
}

const postmeta = tableObj.data;
console.log(`Loaded ${postmeta.length} records. Grouping by post_id...`);

const posts = {};
for (const item of postmeta) {
    const pid = item.post_id;
    if (!posts[pid]) {
        posts[pid] = {};
    }
    const key = item.meta_key;
    const val = item.meta_value;
    if (['title', 'description', 'og_title', 'og_description', '_wp_old_slug', 'robots', '_yoast_wpseo_title', '_yoast_wpseo_metadesc', 'canonicalUrl', 'scriptseo'].includes(key)) {
        posts[pid][key] = val;
    }
    // Also capture any values that might have Canada/Vancouver/Edmonton
    if (val && (
        val.toLowerCase().includes('canada') || 
        val.toLowerCase().includes('vancouver') || 
        val.toLowerCase().includes('edmonton') ||
        val.toLowerCase().includes('calgary')
    )) {
        posts[pid][`has_match_${key}`] = val;
        posts[pid].matched = true;
    }
}

console.log('Finding matched posts...');
const matchedPosts = [];
for (const [pid, data] of Object.entries(posts)) {
    if (data.matched) {
        matchedPosts.push({ postId: pid, ...data });
    }
}

console.log(`Found ${matchedPosts.length} posts with Canada-related content/meta.`);
console.log('Listing details for mapping:');
matchedPosts.forEach(p => {
    console.log(`--------------------------------------------------`);
    console.log(`Post ID: ${p.postId}`);
    console.log(`Title: ${p.title || p._yoast_wpseo_title || '(none)'}`);
    console.log(`Description: ${p.description || p._yoast_wpseo_metadesc || '(none)'}`);
    console.log(`Old Slug: ${p._wp_old_slug || '(none)'}`);
    
    // Print any specific matches
    Object.keys(p).forEach(k => {
        if (k.startsWith('has_match_')) {
            console.log(`Matched key [${k.replace('has_match_', '')}]: ${p[k].substring(0, 120)}...`);
        }
    });
});
