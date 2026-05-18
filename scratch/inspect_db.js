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
    const [tables] = await sequelize.query("SHOW TABLES");
    console.log("Tables in database:", tables);
    for (const tableObj of tables) {
      const tableName = Object.values(tableObj)[0];
      const [columns] = await sequelize.query(`DESCRIBE \`${tableName}\``);
      console.log(`\nTable: ${tableName}`);
      console.log(columns.map(c => `${c.Field} (${c.Type})`));
    }
  } catch (err) {
    console.error("Error inspecting database:", err);
  } finally {
    await sequelize.close();
  }
}

run();
