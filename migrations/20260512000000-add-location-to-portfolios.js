'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      const tables = await queryInterface.showAllTables();
      let tableName = 'Portfolios';
      
      if (tables.includes('portfolios')) {
        tableName = 'portfolios';
      } else if (tables.includes('Portfolios')) {
        tableName = 'Portfolios';
      } else {
        const match = tables.find(t => t.toLowerCase() === 'portfolios');
        if (match) {
          tableName = match;
        } else {
          return; // Table doesn't exist, skip migration
        }
      }

      const tableInfo = await queryInterface.describeTable(tableName);
      if (!tableInfo.location) {
        await queryInterface.addColumn(tableName, 'location', {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: 'australia',
        });
        console.log(`Successfully added "location" column to "${tableName}" table.`);
      } else {
        console.log(`"location" column already exists in "${tableName}" table.`);
      }
    } catch (error) {
      console.error('Error during migration UP:', error);
      throw error;
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      const tables = await queryInterface.showAllTables();
      let tableName = 'Portfolios';
      
      if (tables.includes('portfolios')) {
        tableName = 'portfolios';
      } else if (tables.includes('Portfolios')) {
        tableName = 'Portfolios';
      } else {
        const match = tables.find(t => t.toLowerCase() === 'portfolios');
        if (match) {
          tableName = match;
        } else {
          return;
        }
      }

      const tableInfo = await queryInterface.describeTable(tableName);
      if (tableInfo.location) {
        await queryInterface.removeColumn(tableName, 'location');
        console.log(`Successfully removed "location" column from "${tableName}" table.`);
      }
    } catch (error) {
      console.error('Error during migration DOWN:', error);
      throw error;
    }
  }
};
