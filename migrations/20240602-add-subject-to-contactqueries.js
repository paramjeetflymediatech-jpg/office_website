module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('ContactQueries', 'subject', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    console.log('Added subject column to ContactQueries');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('ContactQueries', 'subject');
    console.log('Removed subject column from ContactQueries');
  },
};
