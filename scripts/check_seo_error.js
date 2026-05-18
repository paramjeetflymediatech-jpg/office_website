require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

async function debugSEO() {
  const sequelize = new Sequelize('flymedia_db', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    logging: console.log
  });

  const PageSEO = sequelize.define('PageSEO', {
    pageUrl: { type: DataTypes.STRING, allowNull: false, unique: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: true },
    keywords: { type: DataTypes.TEXT, allowNull: true },
    customSchema: { type: DataTypes.TEXT, allowNull: true },
    ogTitle: { type: DataTypes.STRING, allowNull: true },
    ogDescription: { type: DataTypes.TEXT, allowNull: true },
    ogImage: { type: DataTypes.STRING, allowNull: true },
    canonicalUrl: { type: DataTypes.STRING, allowNull: true },
    metaRobots: { type: DataTypes.STRING, allowNull: true, defaultValue: 'index, follow' },
    twitterCard: { type: DataTypes.STRING, allowNull: true, defaultValue: 'summary_large_image' },
  }, {
    tableName: 'PageSEOs'
  });

  try {
    console.log('Syncing PageSEO table structure...');
    await PageSEO.sync();
    
    console.log('Describing PageSEOs table:');
    const [columns] = await sequelize.query('DESCRIBE PageSEOs');
    console.log(columns);

    console.log('Attempting to upsert/create the failing entry:');
    const data = {
      pageUrl: '/blog/some-important-directories',
      title: 'Rebrand Without Regret: Protect Your SEO Crown Jewels During a Website Makeover',
      description: 'These techniques mentioned above have helped many of our clientele improve their business prospects without hampering their credibility. Hence, it is essential to have your SEO authority maintained while rebuilding your website.',
      keywords: '',
      ogTitle: 'Rebrand Without Regret: Protect Your SEO Crown Jewels During a Website Makeover',
      ogDescription: 'These techniques mentioned above have helped many of our clientele improve their business prospects without hampering their credibility. Hence, it is essential to have your SEO authority maintained while rebuilding your website.',
      ogImage: '',
      canonicalUrl: 'https://flymediatech.com/blog/some-important-directories',
      metaRobots: 'index, follow',
      twitterCard: 'summary_large_image'
    };

    const res = await PageSEO.upsert(data);
    console.log('Upsert success!', res);

  } catch (error) {
    console.error('DATABASE ERROR DETECTED:', error);
  } finally {
    await sequelize.close();
  }
}

debugSEO();
