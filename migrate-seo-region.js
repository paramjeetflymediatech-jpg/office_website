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
    console.log('Connecting to database to alter seoconfigs table...');
    await sequelize.authenticate();
    
    const queryInterface = sequelize.getQueryInterface();
    const tables = await queryInterface.showAllTables();
    
    // Find table name with case-insensitivity
    let tableName = 'seoconfigs';
    const match = tables.find(t => t.toLowerCase() === 'seoconfigs');
    if (match) {
      tableName = match;
    }

    console.log(`Targeting table: "${tableName}"`);
    const tableInfo = await queryInterface.describeTable(tableName);
    
    if (!tableInfo.region) {
      console.log('Column "region" is missing. Running ALTER TABLE raw query...');
      await sequelize.query(`ALTER TABLE \`${tableName}\` ADD COLUMN \`region\` VARCHAR(255) DEFAULT 'global';`);
      console.log('SUCCESS: "region" column has been successfully added to the seoconfigs table!');
    } else {
      console.log('INFO: "region" column already exists in the seoconfigs table.');
    }
    
    process.exit(0);
  } catch (err) {
    console.error('ERROR during migration:');
    console.error(err.message);
    process.exit(1);
  }
}

run();
