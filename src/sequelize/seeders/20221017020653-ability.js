'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Ability', [
      {
        name: 'imposter',
        description: 'Se transforma en el Pokémon que tiene enfrente',
        pokemonId :1,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'static',
        description: 'La electricidad estática que lo envuelve puede paralizar al mínimo contacto.',
        pokemonId :2,
        state : true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {});

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Ability', null, { truncate: true, cascade: true });
  }
};
