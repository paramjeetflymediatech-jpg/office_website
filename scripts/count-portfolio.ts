import Portfolio from '../src/models/Portfolio';
import sequelize from '../src/lib/db';

async function countItems() {
  await sequelize.sync(); // Syncs the database
  try {
    const count = await Portfolio.count();
    console.log('--- DATABASE STATUS ---');
    console.log(`TOTAL PORTFOLIO ITEMS: ${count}`);
    console.log('-----------------------');
    process.exit(0);
  } catch (error) {
    console.error('Error counting items:', error);
    process.exit(1);
  }
}

countItems();
