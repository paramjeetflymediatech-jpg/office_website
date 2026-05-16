const { Sequelize } = require('sequelize');
const seq = new Sequelize('flymedia_db', 'root', 'root', { host: 'localhost', dialect: 'mysql', logging: false });

async function check() {
    const [res] = await seq.query(`SELECT title, slug, image FROM Blogs WHERE region = 'global' ORDER BY id DESC LIMIT 50`);
    console.log(res);
    process.exit(0);
}

check();
