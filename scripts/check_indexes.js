require('dotenv').config();
const { Sequelize } = require('sequelize');

async function checkIndexes() {
  const sequelize = new Sequelize('flymedia_db', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
  });

  try {
    const [pageSeoIndexes] = await sequelize.query('SHOW INDEX FROM PageSEOs');
    console.log('--- PageSEOs Indexes ---');
    console.log(pageSeoIndexes.map(i => ({ Key_name: i.Key_name, Column_name: i.Column_name, Non_unique: i.Non_unique })));

    const [blogIndexes] = await sequelize.query('SHOW INDEX FROM blogs');
    console.log('\n--- blogs Indexes ---');
    console.log(blogIndexes.map(i => ({ Key_name: i.Key_name, Column_name: i.Column_name, Non_unique: i.Non_unique })));

  } catch (error) {
    console.error('Error querying indexes:', error.message);
  } finally {
    await sequelize.close();
  }
}

checkIndexes();
