const fs = require('fs');
const path = require('path');

const catalog = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'scratch', 'aus_seo_catalog.json'), 'utf8'));

const pages = [
  { path: '/australia', keywords: ['marketing agency australia', 'stanhope gardens'] },
  { path: '/australia/about-us', keywords: ['about us'] },
  { path: '/australia/content-marketing-strategy', keywords: ['content marketing strategy', 'content marketing'] },
  { path: '/australia/digital-consultancy', keywords: ['digital consultancy'] },
  { path: '/australia/digital-marketing', keywords: ['digital marketing agency', 'digital marketing services'] },
  { path: '/australia/digital-marketing-agency-in-blacktown', keywords: ['blacktown'] },
  { path: '/australia/digital-marketing-agency-in-brisbane', keywords: ['brisbane'] },
  { path: '/australia/digital-marketing-agency-in-melbourne', keywords: ['melbourne'] },
  { path: '/australia/digital-marketing-agency-in-quakers-hill', keywords: ['quakers hill'] },
  { path: '/australia/digital-marketing-agency-in-seven-hills', keywords: ['seven hills'] },
  { path: '/australia/ecommerce-seo-agency-sydney', keywords: ['ecommerce seo'] },
  { path: '/australia/ecommerce-website-development', keywords: ['ecommerce website development', 'ecommerce development'] },
  { path: '/australia/enterprise-seo-agency-sydney', keywords: ['enterprise seo'] },
  { path: '/australia/facebook-marketing-sydney', keywords: ['facebook marketing'] },
  { path: '/australia/google-display-advertising-agency', keywords: ['google display'] },
  { path: '/australia/google-shopping-ads-agency-sydney', keywords: ['google shopping'] },
  { path: '/australia/link-building-agency-sydney', keywords: ['link building'] },
  { path: '/australia/local-seo', keywords: ['local seo'] },
  { path: '/australia/logo-design-sydney', keywords: ['logo design'] },
  { path: '/australia/mobile-marketing', keywords: ['mobile marketing'] },
  { path: '/australia/off-page-seo-services-sydney', keywords: ['off page', 'off-page'] },
  { path: '/australia/on-page-seo-optimization-services-sydney', keywords: ['on page', 'on-page'] },
  { path: '/australia/paid-search-agency-sydney', keywords: ['paid search'] },
  { path: '/australia/pay-per-click', keywords: ['pay per click', 'pay-per-click'] },
  { path: '/australia/ppc', keywords: ['ppc'] },
  { path: '/australia/reputation-management', keywords: ['reputation management'] },
  { path: '/australia/search-engine-optimization', keywords: ['search engine optimization', 'seo agency'] },
  { path: '/australia/seo-packages', keywords: ['seo packages'] },
  { path: '/australia/seo-website-migration-services-sydney', keywords: ['website migration'] },
  { path: '/australia/social-media-branding', keywords: ['social media branding'] },
  { path: '/australia/social-media-marketing', keywords: ['social media marketing'] },
  { path: '/australia/technical-seo-services-sydney', keywords: ['technical seo'] },
  { path: '/australia/web-design', keywords: ['web design agency', 'website design'] },
  { path: '/australia/web-designing-packages', keywords: ['web designing packages', 'web design packages'] },
  { path: '/australia/web-development', keywords: ['web development'] },
  { path: '/australia/website-design-company-in-melbourne', keywords: ['website design company in melbourne', 'web design melbourne'] },
  { path: '/australia/website-design-in-brisbane', keywords: ['website design in brisbane', 'web design brisbane'] },
  { path: '/australia/youtube-advertising-agency-sydney', keywords: ['youtube advertising'] }
];

console.log('Searching for matches:');
const matched = [];

for (const p of pages) {
    const hits = [];
    for (const c of catalog) {
        const titleLower = c.title.toLowerCase();
        const descLower = c.desc.toLowerCase();
        const ogTitleLower = c.og_title.toLowerCase();
        
        let match = false;
        for (const kw of p.keywords) {
            if (titleLower.includes(kw) || descLower.includes(kw) || ogTitleLower.includes(kw)) {
                match = true;
                break;
            }
        }
        if (match) {
            hits.push(c);
        }
    }
    console.log(`Route: ${p.path} -> Found ${hits.length} potential matches.`);
    if (hits.length > 0) {
        matched.push({
            path: p.path,
            hits: hits.map(h => ({ post_id: h.post_id, title: h.title, desc: h.desc }))
        });
    }
}

fs.writeFileSync(path.join(process.cwd(), 'scratch', 'aus_seo_matches.json'), JSON.stringify(matched, null, 2));
