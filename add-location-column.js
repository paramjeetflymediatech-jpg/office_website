const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME || 'flymedia_db',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || 'Root@123',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    logging: false,
  }
);

async function run() {
  try {
    console.log('Connecting to database and altering table...');
    const queryInterface = sequelize.getQueryInterface();
    
    // Get all tables in the database to solve Linux MySQL case sensitivity
    const tables = await queryInterface.showAllTables();
    let tableName = 'Portfolios';
    
    if (tables.includes('portfolios')) {
      tableName = 'portfolios';
    } else if (tables.includes('Portfolios')) {
      tableName = 'Portfolios';
    } else {
      const match = tables.find(t => t.toLowerCase() === 'portfolios');
      if (match) {
        tableName = match;
      } else {
        throw new Error(`Table "Portfolios" (or "portfolios") does not exist in the database. Available tables: ${tables.join(', ')}`);
      }
    }

    console.log(`Targeting table: "${tableName}"...`);
    const tableInfo = await queryInterface.describeTable(tableName);
    
    if (!tableInfo.location) {
      await queryInterface.addColumn(tableName, 'location', {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: 'australia',
      });
      console.log(`SUCCESS: "location" column has been successfully added to the "${tableName}" table.`);
    } else {
      console.log(`INFO: "location" column already exists in the "${tableName}" table.`);
    }
    process.exit(0);
  } catch (err) {
    console.error('ERROR altering table:');
    console.error(err.message);
    process.exit(1);
  }
}

run();
