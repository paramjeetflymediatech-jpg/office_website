require('dotenv').config();
const mysql = require('mysql2/promise');

async function run() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'flymedia_db',
  });

  const [total] = await connection.execute('SELECT COUNT(*) as count FROM pageseos');
  console.log('Total entries in pageseos:', total[0].count);

  const [australia] = await connection.execute('SELECT COUNT(*) as count FROM pageseos WHERE pageUrl LIKE "/australia%"');
  console.log('Australia entries in pageseos:', australia[0].count);

  const [sample] = await connection.execute('SELECT pageUrl, title FROM pageseos WHERE pageUrl LIKE "/australia%" LIMIT 10');
  console.log('Sample Australia entries:');
  console.log(sample);

  const [blogs] = await connection.execute('SELECT COUNT(*) as count FROM blogs WHERE region = "australia"');
  console.log('Total Australia blogs in blogs table:', blogs[0].count);

  const [seoBlogs] = await connection.execute('SELECT COUNT(*) as count FROM pageseos WHERE pageUrl LIKE "/australia/blog/%"');
  console.log('Total Australia blog SEO entries in pageseos:', seoBlogs[0].count);

  await connection.end();
}

run();
