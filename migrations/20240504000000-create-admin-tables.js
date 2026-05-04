'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // 1. SEOConfigs
    await queryInterface.createTable('SEOConfigs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      businessName: { type: Sequelize.STRING },
      logoUrl: { type: Sequelize.STRING },
      phone: { type: Sequelize.STRING },
      email: { type: Sequelize.STRING },
      address: { type: Sequelize.TEXT },
      socialLinks: { type: Sequelize.TEXT },
      globalSchema: { type: Sequelize.TEXT },
      headerScripts: { type: Sequelize.TEXT },
      footerScripts: { type: Sequelize.TEXT },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });

    // 2. FAQs
    await queryInterface.createTable('FAQs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      question: { allowNull: false, type: Sequelize.STRING },
      answer: { allowNull: false, type: Sequelize.TEXT },
      order: { defaultValue: 0, type: Sequelize.INTEGER },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });

    // 3. ContactQueries
    await queryInterface.createTable('ContactQueries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: { allowNull: false, type: Sequelize.STRING },
      email: { allowNull: false, type: Sequelize.STRING },
      phone: { type: Sequelize.STRING },
      message: { allowNull: false, type: Sequelize.TEXT },
      status: { defaultValue: 'NEW', type: Sequelize.STRING },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });

    // 4. Portfolios
    await queryInterface.createTable('Portfolios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: { allowNull: false, type: Sequelize.STRING },
      imageUrl: { allowNull: false, type: Sequelize.STRING },
      category: { type: Sequelize.STRING },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });

    // 5. Careers
    await queryInterface.createTable('Careers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: { allowNull: false, type: Sequelize.STRING },
      description: { allowNull: false, type: Sequelize.TEXT },
      requirements: { allowNull: false, type: Sequelize.TEXT },
      status: { defaultValue: 'OPEN', type: Sequelize.STRING },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Careers');
    await queryInterface.dropTable('Portfolios');
    await queryInterface.dropTable('ContactQueries');
    await queryInterface.dropTable('FAQs');
    await queryInterface.dropTable('SEOConfigs');
  }
};
