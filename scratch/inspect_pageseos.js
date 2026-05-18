require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME || 'flymedia_db',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || 'root',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    logging: false
  }
);

async function run() {
  try {
    const [records] = await sequelize.query("SELECT id, pageUrl, title FROM pageseos WHERE pageUrl NOT LIKE '%/blog%'");
    console.log("Current page SEO records in pageseos table (non-blogs):");
    console.log(records);
  } catch (err) {
    console.error("Error fetching pageseos:", err);
  } finally {
    await sequelize.close();
  }
}

run();
