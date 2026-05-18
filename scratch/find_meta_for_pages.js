const fs = require('fs');
const path = require('path');

const titlesPath = path.join(process.cwd(), 'scratch', 'extracted_titles.json');
const pages = JSON.parse(fs.readFileSync(titlesPath, 'utf8'));

const appPages = [
  'about-us',
  'an-instagram-marketing-company-in-ludhiana',
  'apply-for-job',
  'bariatric-gastric-bypass-surgery-marketing-services',
  'cms-for-website',
  'computer-jobs',
  'contact-us',
  'content-writing',
  'cosmetic-surgery-digital-marketing',
  'current-job-opening',
  'digital-marketing',
  'digital-marketing-de-addiction-rehab-center',
  'digital-marketing-packages-india',
  'ecommerce-website-development-packages-india',
  'ent-hospital-digital-marketing',
  'facelift-surgeons-digital-marketing',
  'full-stack-development-in-india',
  'gastric-bypass-surgery-digital-marketing',
  'google-ads-ppc-packages-india',
  'hair-transplant-clinic-digital-marketing',
  'how-we-work',
  'it-company-in-ludhiana',
  'ivf-clinic-digital-marketing-india',
  'laravel-website-development-in-india',
  'logo-design',
  'logo-design-packages-india',
  'mobile-apps-development',
  'nabh-consultants',
  'orthopedic-hospital-digital-marketing',
  'our-services',
  'pay-per-click-ppc',
  'plastic-surgery-digital-marketing',
  'portfolio',
  'product-photography-in-ludhiana',
  'request-free-quote',
  'seo-jobs',
  'seo-packages-india',
  'seo-training-internship-program',
  'social-media-branding-packages-india',
  'social-media-optimization',
  'web-design-company-in-india',
  'web-designing-company-in-jalandhar',
  'web-developer-jobs',
  'website-designing-packages-india'
];

console.log('Searching for page matches:');
for (const p of appPages) {
    const searchTerms = p.split('-');
    const matches = pages.filter(item => {
        const titleLower = item.title.toLowerCase();
        // Check if all search terms (or most of them) match the title
        return searchTerms.every(term => {
            if (term.length <= 2) return true; // skip small words like 'in', 'us', 'an'
            return titleLower.includes(term);
        });
    });
    
    if (matches.length > 0) {
        console.log(`\nMatch for page [/${p}]:`);
        matches.forEach(m => {
            console.log(`  - post_id: ${m.post_id} | Title: "${m.title}"`);
        });
    } else {
        // Fuzzy search with fewer terms
        const partialMatches = pages.filter(item => {
            const titleLower = item.title.toLowerCase();
            const matchingTerms = searchTerms.filter(term => term.length > 3 && titleLower.includes(term));
            return matchingTerms.length >= 2;
        });
        if (partialMatches.length > 0) {
            console.log(`\nFuzzy Match for page [/${p}]:`);
            partialMatches.slice(0, 3).forEach(m => {
                console.log(`  - post_id: ${m.post_id} | Title: "${m.title}"`);
            });
        } else {
            console.log(`\nNo match for page [/${p}]`);
        }
    }
}
