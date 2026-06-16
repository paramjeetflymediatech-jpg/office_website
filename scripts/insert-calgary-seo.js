require('dotenv').config();
const mysql = require('mysql2/promise');

async function run() {
  let connection;
  try {
    console.log('Connecting to database...');
    connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'Root@123',
      database: process.env.DB_NAME || 'flymedia_db',
    });

    const pageUrl = '/canada/best-digital-marketing-agency-in-calgary';
    const title = 'Best Digital Marketing Agency in Calgary | FLYMEDIA TECHNOLOGY';
    const description = 'Grow Your Business With Our Expert Digital Marketing Strategies. FLYMEDIA TECHNOLOGY, the best digital marketing agency in Calgary, provides customized solutions to maximize brand visibility and attract customers.';
    const keywords = 'Best digital marketing agency in Calgary, social media marketing agency in Calgary, best PPC agency in Calgary, best SEO agency in Calgary, FLYMEDIA TECHNOLOGY';
    const canonicalUrl = 'https://flymediatech.com/canada/best-digital-marketing-agency-in-calgary';
    const metaRobots = 'index, follow';
    const ogImage = '/fgodsfgjsdo.webp';

    const [rows] = await connection.execute(
      'SELECT id FROM pageseos WHERE pageUrl = ?',
      [pageUrl]
    );

    if (rows.length > 0) {
      console.log('Record already exists. Updating SEO metadata...');
      await connection.execute(
        `UPDATE pageseos SET 
          title = ?,
          description = ?,
          keywords = ?,
          ogTitle = ?,
          ogDescription = ?,
          ogImage = ?,
          canonicalUrl = ?,
          metaRobots = ?,
          twitterCard = 'summary_large_image',
          updatedAt = NOW()
        WHERE pageUrl = ?`,
        [
          title,
          description,
          keywords,
          title,
          description,
          ogImage,
          canonicalUrl,
          metaRobots,
          pageUrl
        ]
      );
      console.log('SEO metadata updated successfully.');
    } else {
      console.log('Creating new SEO record...');
      await connection.execute(
        `INSERT INTO pageseos 
          (pageUrl, title, description, keywords, ogTitle, ogDescription, ogImage, canonicalUrl, metaRobots, twitterCard, createdAt, updatedAt) 
        VALUES 
          (?, ?, ?, ?, ?, ?, ?, ?, ?, 'summary_large_image', NOW(), NOW())`,
        [
          pageUrl,
          title,
          description,
          keywords,
          title,
          description,
          ogImage,
          canonicalUrl,
          metaRobots
        ]
      );
      console.log('SEO record created successfully.');
    }

  } catch (error) {
    console.error('Error occurred:', error.message);
  } finally {
    if (connection) {
      await connection.end();
      console.log('Database connection closed.');
    }
  }
}

run();
