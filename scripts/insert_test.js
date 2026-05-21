require('dotenv').config();
const sequelize = require('./src/lib/db').default;
const ContactQuery = require('./src/models/ContactQuery').default;
(async () => {
  try {
    await sequelize.authenticate();
    await ContactQuery.create({
      name: 'Demo User',
      email: 'demo@example.com',
      phone: '5551234567',
      subject: 'Demo Subject',
      message: 'This is a test message.',
      status: 'NEW',
    });
    console.log('Test contact inserted');
    process.exit(0);
  } catch (err) {
    console.error('Error inserting test contact:', err);
    process.exit(1);
  }
})();
