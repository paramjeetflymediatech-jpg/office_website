const { Sequelize } = require('sequelize');
require('dotenv').config();

// Connect to the database
const sequelize = new Sequelize(
  process.env.DB_NAME || 'flymedia_db',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || 'Root@123',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    logging: console.log,
  }
);

async function runMigration() {
  try {
    console.log('Connecting to database...');
    await sequelize.authenticate();
    console.log('Connection established successfully.');

    const queryInterface = sequelize.getQueryInterface();

    // 1. Add "subject" to ContactQueries
    try {
      await queryInterface.addColumn('ContactQueries', 'subject', {
        type: Sequelize.STRING,
        allowNull: true,
      });
      console.log('✅ Added "subject" column to ContactQueries');
    } catch (e) {
      if (e.message.includes('Duplicate column name')) {
        console.log('⏭️ Column "subject" already exists in ContactQueries. Skipping.');
      } else {
        throw e;
      }
    }

    // 2. Add "position" to applications
    try {
      await queryInterface.addColumn('applications', 'position', {
        type: Sequelize.STRING,
        allowNull: true,
      });
      console.log('✅ Added "position" column to applications');
    } catch (e) {
      if (e.message.includes('Duplicate column name')) {
        console.log('⏭️ Column "position" already exists in applications. Skipping.');
      } else {
        throw e;
      }
    }

    // 3. Add "message" to applications
    try {
      await queryInterface.addColumn('applications', 'message', {
        type: Sequelize.TEXT,
        allowNull: true,
      });
      console.log('✅ Added "message" column to applications');
    } catch (e) {
      if (e.message.includes('Duplicate column name')) {
        console.log('⏭️ Column "message" already exists in applications. Skipping.');
      } else {
        throw e;
      }
    }

    console.log('🎉 Server Migration Completed Successfully!');
    process.exit(0);

  } catch (error) {
    console.error('❌ ERROR during database migration:', error.message);
    process.exit(1);
  }
}

runMigration();
