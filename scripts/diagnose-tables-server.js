require('dotenv').config();
const mysql = require('mysql2/promise');

async function check() {
  let connection;
  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_NAME || 'flymedia_db',
    });

    const [tables] = await connection.execute('SHOW TABLES');
    console.log('Tables in database:');
    console.log(tables);

    for (const row of tables) {
      const tableName = Object.values(row)[0];
      if (tableName.toLowerCase().includes('seo')) {
        const [countRow] = await connection.execute(`SELECT COUNT(*) AS count FROM \`${tableName}\``);
        console.log(`Table: "${tableName}" has ${countRow[0].count} rows.`);
      }
    }
  } catch (err) {
    console.error('Error:', err);
  } finally {
    if (connection) await connection.end();
  }
}

check();
