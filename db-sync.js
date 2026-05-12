const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME || 'flymedia_db',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || 'Root@123',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    logging: false,
  }
);

// Define models in vanilla JS to synchronize schema directly with the DB
const SEOConfig = sequelize.define('SEOConfig', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  businessName: Sequelize.STRING,
  logoUrl: Sequelize.STRING,
  phone: Sequelize.STRING,
  email: Sequelize.STRING,
  address: Sequelize.TEXT,
  socialLinks: Sequelize.TEXT,
  globalSchema: Sequelize.TEXT,
  headerScripts: Sequelize.TEXT,
  footerScripts: Sequelize.TEXT,
});

const FAQ = sequelize.define('FAQ', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  question: { type: Sequelize.STRING, allowNull: false },
  answer: { type: Sequelize.TEXT, allowNull: false },
  order: { type: Sequelize.INTEGER, defaultValue: 0 },
});

const ContactQuery = sequelize.define('ContactQuery', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false },
  phone: Sequelize.STRING,
  message: { type: Sequelize.TEXT, allowNull: false },
  status: { type: Sequelize.STRING, defaultValue: 'NEW' },
});

const Portfolio = sequelize.define('Portfolio', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: Sequelize.STRING, allowNull: false },
  imageUrl: { type: Sequelize.STRING, allowNull: false },
  category: Sequelize.STRING,
  location: { type: Sequelize.STRING, defaultValue: 'australia' },
});

const Career = sequelize.define('Career', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: Sequelize.STRING, allowNull: false },
  description: { type: Sequelize.TEXT, allowNull: false },
  requirements: { type: Sequelize.TEXT, allowNull: false },
  status: { type: Sequelize.STRING, defaultValue: 'OPEN' },
});

const User = sequelize.define('User', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  email: { type: Sequelize.STRING, allowNull: false, unique: true },
  password: { type: Sequelize.STRING, allowNull: false },
  role: { type: Sequelize.STRING, defaultValue: 'admin' },
});

const PageSEO = sequelize.define('PageSEO', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  pagePath: { type: Sequelize.STRING, allowNull: false, unique: true },
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
  keywords: Sequelize.TEXT,
  metaTags: Sequelize.TEXT,
});

const Blog = sequelize.define('Blog', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: Sequelize.STRING, allowNull: false },
  slug: { type: Sequelize.STRING, allowNull: false, unique: true },
  content: { type: Sequelize.TEXT, allowNull: false },
  excerpt: Sequelize.TEXT,
  featuredImage: Sequelize.STRING,
  category: Sequelize.STRING,
  tags: Sequelize.STRING,
  views: { type: Sequelize.INTEGER, defaultValue: 0 },
});

const Application = sequelize.define('Application', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  careerId: { type: Sequelize.INTEGER, allowNull: false },
  name: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false },
  phone: Sequelize.STRING,
  resumeUrl: { type: Sequelize.STRING, allowNull: false },
  coverLetter: Sequelize.TEXT,
  status: { type: Sequelize.STRING, defaultValue: 'PENDING' },
});

async function run() {
  try {
    console.log('Connecting to database and synchronizing tables...');
    await sequelize.authenticate();
    console.log('Database connection established successfully.');
    
    await sequelize.sync({ alter: true });
    console.log('SUCCESS: All tables (Portfolios, FAQs, Careers, ContactQueries, etc.) have been successfully created and synchronized!');
    process.exit(0);
  } catch (error) {
    console.error('ERROR during database synchronization:');
    console.error(error.message);
    process.exit(1);
  }
}

run();
