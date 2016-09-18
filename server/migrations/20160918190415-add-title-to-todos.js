'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
   queryInterface.addColumn('Todos', 'title', {
    type: Sequelize.STRING
   });
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('Todos', 'title');
  }
};
