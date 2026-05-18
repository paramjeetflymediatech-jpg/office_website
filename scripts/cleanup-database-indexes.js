require('dotenv').config();
const { Sequelize } = require('sequelize');

async function cleanupIndexes() {
  const sequelize = new Sequelize(
    process.env.DB_NAME || 'flymedia_db',
    process.env.DB_USER || 'root',
    process.env.DB_PASSWORD || 'root',
    {
      host: process.env.DB_HOST || 'localhost',
      dialect: 'mysql',
      logging: console.log,
    }
  );

  try {
    console.log('[Cleanup] Starting database index optimization...');
    await sequelize.authenticate();

    // 1. Clean blogs table
    const [blogIndexes] = await sequelize.query('SHOW INDEX FROM blogs');
    const blogsToDrop = blogIndexes
      .map(i => i.Key_name)
      .filter(name => name.startsWith('slug_') || name.startsWith('pagePath_')); // Catch any legacy pagePath index variations too
    
    // Remove duplicates from list
    const uniqueBlogsToDrop = [...new Set(blogsToDrop)];
    console.log(`[Cleanup] Found ${uniqueBlogsToDrop.length} duplicate indexes to drop on "blogs" table:`, uniqueBlogsToDrop);

    for (const indexName of uniqueBlogsToDrop) {
      try {
        console.log(`[Cleanup] Dropping index ${indexName} from blogs table...`);
        await sequelize.query(`ALTER TABLE blogs DROP INDEX \`${indexName}\``);
      } catch (err) {
        console.error(`[Cleanup] Failed to drop index ${indexName} from blogs:`, err.message);
      }
    }

    // 2. Clean PageSEOs table
    const [pageSeoIndexes] = await sequelize.query('SHOW INDEX FROM PageSEOs');
    const seoToDrop = pageSeoIndexes
      .map(i => i.Key_name)
      .filter(name => name.startsWith('pageUrl_') || name.startsWith('pagePath_'));

    const uniqueSeoToDrop = [...new Set(seoToDrop)];
    console.log(`[Cleanup] Found ${uniqueSeoToDrop.length} duplicate indexes to drop on "PageSEOs" table:`, uniqueSeoToDrop);

    for (const indexName of uniqueSeoToDrop) {
      try {
        console.log(`[Cleanup] Dropping index ${indexName} from PageSEOs table...`);
        await sequelize.query(`ALTER TABLE PageSEOs DROP INDEX \`${indexName}\``);
      } catch (err) {
        console.error(`[Cleanup] Failed to drop index ${indexName} from PageSEOs:`, err.message);
      }
    }

    console.log('[Cleanup] Database index optimization completed successfully!');
  } catch (error) {
    console.error('[Cleanup] Fatal Error during cleanup:', error.message);
  } finally {
    await sequelize.close();
  }
}

cleanupIndexes();
