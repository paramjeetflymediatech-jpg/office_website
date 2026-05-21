'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add the position column to the applications table safely
    try {
      await queryInterface.addColumn('applications', 'position', {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Unknown', // Provide a default value for existing rows
      });
    } catch (error) {
      if (error.message.includes('Duplicate column name')) {
        console.log('Column "position" already exists in applications table. Skipping...');
      } else {
        throw error;
      }
    }
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the position column from the applications table
    await queryInterface.removeColumn('applications', 'position');
  }
};
