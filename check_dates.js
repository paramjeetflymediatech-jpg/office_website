const { Sequelize } = require('sequelize');
const seq = new Sequelize('flymedia_db', 'root', 'root', { host: 'localhost', dialect: 'mysql', logging: false });

const slugs = [
    'some-important-directories',
    'new-high-pr-dofollow-blog-commenting'
];

async function check() {
    for (const slug of slugs) {
        const [res] = await seq.query(`SELECT slug, createdAt FROM Blogs WHERE slug = '${slug}'`);
        console.log(res);
    }
    process.exit(0);
}

check();
