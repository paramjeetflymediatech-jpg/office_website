'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add the position column to the applications table
    await queryInterface.addColumn('applications', 'position', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'Unknown', // Provide a default value for existing rows
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the position column from the applications table
    await queryInterface.removeColumn('applications', 'position');
  }
};
