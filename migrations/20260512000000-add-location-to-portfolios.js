'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      const tableInfo = await queryInterface.describeTable('Portfolios');
      if (!tableInfo.location) {
        await queryInterface.addColumn('Portfolios', 'location', {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: 'australia',
        });
        console.log('Successfully added "location" column to "Portfolios" table.');
      } else {
        console.log('"location" column already exists in "Portfolios" table.');
      }
    } catch (error) {
      console.error('Error during migration UP:', error);
      throw error;
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      const tableInfo = await queryInterface.describeTable('Portfolios');
      if (tableInfo.location) {
        await queryInterface.removeColumn('Portfolios', 'location');
        console.log('Successfully removed "location" column from "Portfolios" table.');
      }
    } catch (error) {
      console.error('Error during migration DOWN:', error);
      throw error;
    }
  }
};
