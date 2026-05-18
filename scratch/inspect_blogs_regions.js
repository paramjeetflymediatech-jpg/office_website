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
    const [regions] = await sequelize.query("SELECT region, COUNT(*) as count FROM blogs GROUP BY region");
    console.log("Blogs by region:", regions);
    const [sample] = await sequelize.query("SELECT id, title, slug, region FROM blogs LIMIT 5");
    console.log("Sample blogs:", sample);
  } catch (err) {
    console.error("Error inspecting blogs:", err);
  } finally {
    await sequelize.close();
  }
}

run();
