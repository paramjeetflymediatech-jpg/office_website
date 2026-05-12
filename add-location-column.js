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
    console.log('Connecting to database and altering "Portfolios" table...');
    const queryInterface = sequelize.getQueryInterface();
    const tableInfo = await queryInterface.describeTable('Portfolios');
    
    if (!tableInfo.location) {
      await queryInterface.addColumn('Portfolios', 'location', {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: 'australia',
      });
      console.log('SUCCESS: "location" column has been successfully added to the "Portfolios" table.');
    } else {
      console.log('INFO: "location" column already exists in the "Portfolios" table.');
    }
    process.exit(0);
  } catch (err) {
    console.error('ERROR altering table:');
    console.error(err.message);
    process.exit(1);
  }
}

run();
