'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add the message column to the applications table safely
    try {
      await queryInterface.addColumn('applications', 'message', {
        type: Sequelize.TEXT,
        allowNull: true,
      });
    } catch (error) {
      if (error.message.includes('Duplicate column name')) {
        console.log('Column "message" already exists in applications table. Skipping...');
      } else {
        throw error;
      }
    }
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the message column from the applications table
    await queryInterface.removeColumn('applications', 'message');
  }
};
