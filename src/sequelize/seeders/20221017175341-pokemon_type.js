'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('pokemon_type', [
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          pokemonId: 1,
          typeId: 11,
        },
        //Pikachu-Electrico
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          pokemonId: 2,
          typeId: 5,
        },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('pokemon_type', null, { truncate: true, cascade: true });
  }
};
