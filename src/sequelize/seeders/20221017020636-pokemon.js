'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Pokemon', [{
      name: 'ditto',
      weight: 40,
      height: 3,
      hp: 48,
      attack: 48,
      defense: 48,
      speed: 48,
      evolution: 0,
      color: 'purple',
      description: 'Redistribuye las células de su cuerpo para cobrar la apariencia de lo que ve, pero vuelve a la normalidad al relajarse.',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Pokemon', null, { truncate: true, cascade: true });
  }
};
