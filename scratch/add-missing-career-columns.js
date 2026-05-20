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
    console.log('Connected successfully!');
    
    const queryInterface = sequelize.getQueryInterface();
    const tables = await queryInterface.showAllTables();
    console.log('Available tables:', tables);

    // Find the correct case-sensitive table name for Careers/careers
    const matchedTable = tables.find(t => t.toLowerCase() === 'careers');
    if (!matchedTable) {
      console.log('Table matching "careers" was not found.');
      process.exit(1);
    }
    
    console.log(`Checking table: "${matchedTable}"`);
    const tableInfo = await queryInterface.describeTable(matchedTable);
    
    if (!tableInfo.vacancies) {
      console.log(`Column "vacancies" is missing in "${matchedTable}". Altering table...`);
      await sequelize.query(`ALTER TABLE \`${matchedTable}\` ADD COLUMN \`vacancies\` VARCHAR(255) NULL AFTER \`post\`;`);
      console.log('SUCCESS: Column "vacancies" added!');
    } else {
      console.log('Column "vacancies" already exists.');
    }
    
    if (!tableInfo.experience) {
      console.log(`Column "experience" is missing in "${matchedTable}". Altering table...`);
      await sequelize.query(`ALTER TABLE \`${matchedTable}\` ADD COLUMN \`experience\` VARCHAR(255) NULL AFTER \`vacancies\`;`);
      console.log('SUCCESS: Column "experience" added!');
    } else {
      console.log('Column "experience" already exists.');
    }
    
    console.log('Migration completed successfully!');
    process.exit(0);
  } catch (err) {
    console.error('ERROR during column migration:', err);
    process.exit(1);
  }
}

run();
