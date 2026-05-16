const { Sequelize } = require('sequelize');
const seq = new Sequelize('flymedia_db', 'root', 'root', { host: 'localhost', dialect: 'mysql', logging: false });

const slugs = [
    'search-engine-poisoning-definition-and-how-to-safeguard-your-website',
    'benefits-a-payment-gateway-gives-to-a-business',
    'why-a-website-is-needed-for-every-startup',
    'a-list-of-design-freebies-to-help-you-in-website-designing',
    'fonts-that-are-dominating-website-designing-this-year-2016',
    'role-of-social-media-in-todays-seo',
    'featuresof-freedom-251-one-of-the-cheapest-mobile-till-now',
    'why-we-have-to-develop-website-for-our-business-and-what-are-its-benefits',
    'questions-on-wordpress-plugin-development-day-1',
    'how-much-time-require-to-gain-authority-after-redirecting-domain',
    'new-high-pr-dofollow-blog-commenting',
    'what-can-happen-if-you-stop-doing-seo-for-your-business-website',
    'what-things-need-to-be-determined-to-choose-an-e-commerce-website-develo',
    'features-of-a-good-web-hosting-for-seo',
    'tips-to-maintain-wordpress-website-security'
];

async function check() {
    for (const slug of slugs) {
        const [res] = await seq.query(`SELECT slug, image FROM Blogs WHERE slug = '${slug}'`);
        if (res.length > 0) {
            console.log(`${res[0].slug}: ${res[0].image}`);
        } else {
            console.log(`${slug}: NOT IN DB`);
        }
    }
    process.exit(0);
}

check();
