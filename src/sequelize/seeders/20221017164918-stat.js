'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Stat', [
        //Ditto
        {
          hp: 48,
          attack: 48,
          defense: 48,
          special_attack: 48,
          special_defense: 48,
          speed: 48,
          pokemonId: 1,
          state:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Pikachu
        {
          hp: 35,
          attack: 55,
          defense: 40,
          special_attack: 50,
          special_defense: 50,
          speed: 90,
          pokemonId: 2,
          state:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Stat', null, { truncate: true, cascade: true });
  }
};
