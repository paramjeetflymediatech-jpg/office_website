const { Sequelize } = require('sequelize');
const seq = new Sequelize('flymedia_db', 'root', 'root', { host: 'localhost', dialect: 'mysql', logging: false });

const slugs = [
    'take-your-business-to-new-heights-with-flymedia-technology',
    'what-is-the-need-of-web-design-and-a-forum-or-blog-for-your-company',
    'advantages-of-digital-marketing-for-small-business'
];

async function check() {
    for (const slug of slugs) {
        const [res] = await seq.query(`SELECT slug, image FROM Blogs WHERE slug = '${slug}'`);
        console.log(res);
    }
    process.exit(0);
}

check();
