import mysql from 'mysql2/promise';
import * as dotenv from 'dotenv';
import sequelize from '../src/lib/db.js';
import SEOConfig from '../src/models/SEOConfig.js';
import FAQ from '../src/models/FAQ.js';
import ContactQuery from '../src/models/ContactQuery.js';
import Portfolio from '../src/models/Portfolio.js';
import Career from '../src/models/Career.js';
import User from '../src/models/User.js';
import PageSEO from '../src/models/PageSEO.js';

dotenv.config();

async function setup() {
  const dbName = process.env.DB_NAME || 'flymedia_db';
  const dbUser = process.env.DB_USER || 'root';
  const dbPassword = process.env.DB_PASSWORD || 'Root@123';
  const dbHost = process.env.DB_HOST || 'localhost';

  console.log(`Connecting to MySQL at ${dbHost}...`);

  try {
    // 1. Create database if not exists
    const connection = await mysql.createConnection({
      host: dbHost,
      user: dbUser,
      password: dbPassword,
    });

    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\`;`);
    console.log(`Database "${dbName}" checked/created successfully.`);
    await connection.end();

    // 2. Sync models
    console.log('Synchronizing models...');
    // This will create/update tables for all registered models
    await sequelize.sync({ alter: true });
    
    console.log('-----------------------------------------');
    console.log('SUCCESS: Database and tables are ready!');
    console.log('-----------------------------------------');
    process.exit(0);
  } catch (error: any) {
    console.error('ERROR during database setup:');
    console.error(error.message);
    process.exit(1);
  }
}

setup();
