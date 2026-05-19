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
}

const citiesAndCountries = ['canada', 'vancouver', 'edmonton', 'calgary', 'surrey', 'alberta', 'columbia'];

const filteredList = [];
for (const [pid, data] of Object.entries(posts)) {
    const title = String(data.title || data._yoast_wpseo_title || '').toLowerCase();
    const desc = String(data.description || data._yoast_wpseo_metadesc || '').toLowerCase();
    
    const hasKeyword = citiesAndCountries.some(keyword => title.includes(keyword) || desc.includes(keyword));
    const hasContent = data.title || data.description;
    
    if (hasKeyword && hasContent) {
        filteredList.push({
            postId: pid,
            title: data.title || data._yoast_wpseo_title || null,
            description: data.description || data._yoast_wpseo_metadesc || null,
            ogTitle: data.og_title || null,
            ogDescription: data.og_description || null,
            robots: data.robots || null,
            scriptseo: data.scriptseo || null,
        });
    }
}

console.log(`Found ${filteredList.length} candidate Canada/city-related pages with valid title/description:`);
console.log(JSON.stringify(filteredList, null, 2));
