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
    console.log('Connecting to database...');
    await sequelize.authenticate();
    console.log('Successfully connected!');
    
    const queryInterface = sequelize.getQueryInterface();
    const tables = await queryInterface.showAllTables();
    console.log('Available tables:', tables);
    
    // Find all variations of 'Careers'
    const matchingTables = tables.filter(t => t.toLowerCase() === 'careers');
    
    if (matchingTables.length === 0) {
      console.log('No tables matching "careers" found. Let\'s sync the Career model...');
      process.exit(1);
    }
    
    for (const tableName of matchingTables) {
      console.log(`Checking table: "${tableName}"`);
      const tableInfo = await queryInterface.describeTable(tableName);
      
      if (!tableInfo.post) {
        console.log(`Column "post" is missing in "${tableName}". Altering table...`);
        // Adding the VARCHAR column 'post'
        await sequelize.query(`ALTER TABLE \`${tableName}\` ADD COLUMN \`post\` VARCHAR(255) NULL AFTER \`title\`;`);
        console.log(`SUCCESS: Added column "post" to table "${tableName}"!`);
      } else {
        console.log(`Column "post" already exists in "${tableName}".`);
      }
    }
    
    console.log('Migration completed successfully!');
    process.exit(0);
  } catch (err) {
    console.error('ERROR during migration:', err);
    process.exit(1);
  }
}

run();
