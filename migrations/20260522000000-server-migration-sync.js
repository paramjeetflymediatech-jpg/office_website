'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // 1. Add "subject" to ContactQueries
    try {
      await queryInterface.addColumn('ContactQueries', 'subject', {
        type: Sequelize.STRING,
        allowNull: true,
      });
      console.log('✅ Added "subject" column to ContactQueries');
    } catch (e) {
      if (e.message.includes('Duplicate column name')) {
        console.log('⏭️ Column "subject" already exists in ContactQueries. Skipping.');
      } else {
        throw e;
      }
    }

    // 2. Add "position" to applications
    try {
      await queryInterface.addColumn('applications', 'position', {
        type: Sequelize.STRING,
        allowNull: true,
      });
      console.log('✅ Added "position" column to applications');
    } catch (e) {
      if (e.message.includes('Duplicate column name')) {
        console.log('⏭️ Column "position" already exists in applications. Skipping.');
      } else {
        throw e;
      }
    }

    // 3. Add "message" to applications
    try {
      await queryInterface.addColumn('applications', 'message', {
        type: Sequelize.TEXT,
        allowNull: true,
      });
      console.log('✅ Added "message" column to applications');
    } catch (e) {
      if (e.message.includes('Duplicate column name')) {
        console.log('⏭️ Column "message" already exists in applications. Skipping.');
      } else {
        throw e;
      }
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('ContactQueries', 'subject').catch(() => {});
    await queryInterface.removeColumn('applications', 'position').catch(() => {});
    await queryInterface.removeColumn('applications', 'message').catch(() => {});
  }
};
