import sequelize from '../lib/db';
import SEOConfig from './SEOConfig';
import FAQ from './FAQ';
import ContactQuery from './ContactQuery';
import Portfolio from './Portfolio';
import Career from './Career';
import User from './User';
import PageSEO from './PageSEO';
import Blog from './Blog';
import Application from './Application';

const initModels = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection established successfully.');

    // Sync all models
    // In production, you might want to use migrations instead of sync()
    await sequelize.sync();
    console.log('All models synchronized.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

export {
  sequelize,
  SEOConfig,
  FAQ,
  ContactQuery,
  Portfolio,
  Career,
  User,
  PageSEO,
  Blog,
  Application,
  initModels
};
