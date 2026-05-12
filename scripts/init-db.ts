import mysql from 'mysql2/promise';
import * as dotenv from 'dotenv';
import { initModels } from '../src/models/index';

dotenv.config();

async function setup() {
  const dbName = process.env.DB_NAME || 'flymedia_db';
  const dbUser = process.env.DB_USER || 'root';
  const dbPassword = process.env.DB_PASSWORD || 'root';
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

    // 2. Sync models using our robust export
    console.log('Synchronizing database models...');
    await initModels();
    
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
