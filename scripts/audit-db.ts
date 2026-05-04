import { Portfolio } from '../src/models';

async function countItems() {
  try {
    const count = await Portfolio.count();
    console.log('--- DATABASE AUDIT ---');
    console.log(`TOTAL IMAGES IN DATABASE: ${count}`);
    console.log('----------------------');
    process.exit(0);
  } catch (error) {
    console.error('Audit Error:', error);
    process.exit(1);
  }
}

countItems();
