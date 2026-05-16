const { Sequelize } = require('sequelize');
const seq = new Sequelize('flymedia_db', 'root', 'root', { host: 'localhost', dialect: 'mysql', logging: false });

async function check() {
    const [res] = await seq.query(`SELECT title, slug, image, ogImage FROM Blogs WHERE title LIKE '%Poisoning%'`);
    console.log(res);
    process.exit(0);
}

check();
