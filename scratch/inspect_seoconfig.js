require('dotenv').config();
const mysql = require('mysql2/promise');

async function inspectSeoConfig() {
  let connection;
  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_NAME || 'flymedia_db',
    });

    const [rows] = await connection.execute('SELECT * FROM seoconfigs LIMIT 1');
    if (rows.length > 0) {
      console.log('SEO Config:', JSON.stringify(rows[0], null, 2));
    } else {
      console.log('No SEO config found.');
    }
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    if (connection) await connection.end();
  }
}

inspectSeoConfig();
