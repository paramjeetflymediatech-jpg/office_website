'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add the message column to the applications table
    await queryInterface.addColumn('applications', 'message', {
      type: Sequelize.TEXT,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the message column from the applications table
    await queryInterface.removeColumn('applications', 'message');
  }
};
