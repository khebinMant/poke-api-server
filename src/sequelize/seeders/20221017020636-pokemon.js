'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Pokemon', [
      {
        name: 'ditto',
        evolution: 0,
        color: 'purple',
        description: 'Redistribuye las células de su cuerpo para cobrar la apariencia de lo que ve, pero vuelve a la normalidad al relajarse.',
        is_legendary: false,
        is_mythical: false,
        habitat: 'urban',
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'pikachu',
        evolution: 10,
        color: 'yellow',
        description: 'Levanta su cola para vigilar los alrededores. A veces, puede ser alcanzado por un rayo en esa pose, Las bolsas de las mejillas están llenas de electricidad, que libera cuando se siente amenazado.',
        is_legendary: false,
        is_mythical: false,
        habitat: 'forest',
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'charmander',
        evolution: 11,
        color: 'red',
        description: 'La llama que tiene en la punta de la cola arde según sus sentimientos. Llamea levemente cuando está alegre y arde vigorosamente cuando está enfadado.',
        is_legendary: false,
        is_mythical: false,
        habitat: 'mountain',
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Pokemon', null, { truncate: true, cascade: true });
  }
};
