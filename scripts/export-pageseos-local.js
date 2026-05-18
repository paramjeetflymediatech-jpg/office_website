require('dotenv').config();
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');

async function exportPageSeos() {
  let connection;
  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_NAME || 'flymedia_db',
    });

    console.log('[Export] Connected to local database.');

    const [rows] = await connection.execute('SELECT * FROM pageseos');
    console.log(`[Export] Retrieved ${rows.length} total entries from pageseos table.`);

    const destPath = path.join(__dirname, '../blog_data/pageseos_dump.json');
    fs.writeFileSync(destPath, JSON.stringify(rows, null, 2), 'utf8');
    console.log(`[Export] Saved pageseos dump to: ${destPath}`);

  } catch (err) {
    console.error('[Export] Fatal error during export:', err.message);
  } finally {
    if (connection) await connection.end();
  }
}

exportPageSeos();
