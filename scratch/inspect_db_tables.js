require('dotenv').config();
const mysql = require('mysql2/promise');

async function checkTables() {
  let connection;
  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_NAME || 'flymedia_db',
    });

    console.log('Connected to database.');
    const [rows] = await connection.execute('SHOW TABLES');
    console.log('Tables in database:');
    console.log(rows.map(r => Object.values(r)[0]));
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    if (connection) await connection.end();
  }
}

checkTables();
