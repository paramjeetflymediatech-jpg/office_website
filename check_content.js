const { Sequelize } = require('sequelize');
const seq = new Sequelize('flymedia_db', 'root', 'root', { host: 'localhost', dialect: 'mysql', logging: false });

async function check() {
    const [res] = await seq.query(`SELECT content FROM Blogs WHERE slug = 'some-important-directories'`);
    console.log(res[0].content);
    process.exit(0);
}

check();
