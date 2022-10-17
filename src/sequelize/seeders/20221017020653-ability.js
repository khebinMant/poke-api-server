'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Ability', [{
      name: 'imposter',
      description: 'Se transforma en el Pokémon que tiene enfrente',
      pokemonId :1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Ability', null, { truncate: true, cascade: true });
  }
};
