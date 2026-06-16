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

    const pageUrl = '/canada/best-digital-marketing-agency-in-ottawa';
    const title = 'Best Digital Marketing Agency in Ottawa | FLYMEDIA TECHNOLOGY';
    const description = 'FlyMedia Technology - Offering You Result Based Digital Marketing Services. The best digital marketing agency in Ottawa, providing customized SEO, PPC, and content strategies to help your business stand out.';
    const keywords = 'Best Digital Marketing Agency in Ottawa, Heating Company In Ottawa, Best PPC Agency In Ottawa, Best SEO Agency in Ottawa, FLYMEDIA TECHNOLOGY';
    const canonicalUrl = 'https://flymediatech.com/canada/best-digital-marketing-agency-in-ottawa';
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
