const { Sequelize } = require('sequelize');
const seq = new Sequelize('flymedia_db', 'root', 'root', { host: 'localhost', dialect: 'mysql', logging: false });

const slugs = [
    'some-important-directories',
    'new-high-pr-dofollow-blog-commenting',
    'how-much-time-require-to-gain-authority-after-redirecting-domain',
    'questions-on-wordpress-plugin-development-day-1',
    'how-we-can-increase-the-speed-of-our-wordpress-website'
];

async function check() {
    for (const slug of slugs) {
        const [res] = await seq.query(`SELECT slug, image FROM Blogs WHERE slug = '${slug}'`);
        console.log(res);
    }
    process.exit(0);
}

check();
