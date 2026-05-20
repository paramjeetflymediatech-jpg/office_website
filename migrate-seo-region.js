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
    console.log('Connecting to database to alter all seoconfigs tables...');
    await sequelize.authenticate();
    
    const queryInterface = sequelize.getQueryInterface();
    const tables = await queryInterface.showAllTables();
    
    console.log('Found tables in database:', tables);
    
    // Find all variations of 'seoconfigs' (case-insensitive)
    const matchingTables = tables.filter(t => t.toLowerCase() === 'seoconfigs');
    
    if (matchingTables.length === 0) {
      console.log('No tables matching "seoconfigs" were found.');
      process.exit(1);
    }
    
    for (const tableName of matchingTables) {
      console.log(`Checking table: "${tableName}"`);
      const tableInfo = await queryInterface.describeTable(tableName);
      
      if (!tableInfo.region) {
        console.log(`Column "region" is missing in "${tableName}". Altering table...`);
        await sequelize.query(`ALTER TABLE \`${tableName}\` ADD COLUMN \`region\` VARCHAR(255) DEFAULT 'global';`);
        console.log(`SUCCESS: Added "region" to "${tableName}"`);
      } else {
        console.log(`Column "region" already exists in "${tableName}".`);
      }
    }
    
    console.log('Migration completed successfully!');
    process.exit(0);
  } catch (err) {
    console.error('ERROR during migration:');
    console.error(err.message);
    process.exit(1);
  }
}

run();
