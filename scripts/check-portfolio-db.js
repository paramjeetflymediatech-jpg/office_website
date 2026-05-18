require('dotenv').config();
const mysql = require('mysql2/promise');

async function checkPortfolio() {
  let connection;
  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_NAME || 'flymedia_db',
    });

    const [rows] = await connection.execute(
      "SELECT id, title, imageUrl, category, location, createdAt FROM Portfolios ORDER BY id DESC LIMIT 10"
    );

    console.log(`Found ${rows.length} portfolio items in database:`);
    rows.forEach(row => {
      console.log(`ID: ${row.id}`);
      console.log(`Title: ${row.title}`);
      console.log(`ImageUrl: ${row.imageUrl}`);
      console.log(`Category: ${row.category}`);
      console.log(`Location: ${row.location}`);
      console.log(`Created At: ${row.createdAt}`);
      console.log('---');
    });

  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    if (connection) await connection.end();
  }
}

checkPortfolio();
