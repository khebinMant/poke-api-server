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
        //Charmander
        {
          hp: 39,
          attack: 52,
          defense: 43,
          special_attack: 60,
          special_defense: 50,
          speed: 65,
          pokemonId: 3,
          state:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Clefairy
        {
          hp: 70,
          attack: 45,
          defense: 48,
          special_attack: 60,
          special_defense: 65,
          speed: 35,
          pokemonId: 4,
          state:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Squirtle
        {
          hp: 44,
          attack: 48,
          defense: 65,
          special_attack: 50,
          special_defense: 64,
          speed: 43,
          pokemonId: 5,
          state:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Jigglypuff 
        {
          hp: 115,
          attack: 45,
          defense: 20,
          special_attack: 45,
          special_defense: 25,
          speed: 20,
          pokemonId: 6,
          state:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //Staryu 
        {
          hp: 30,
          attack: 45,
          defense: 55,
          special_attack: 70,
          special_defense: 55,
          speed: 85,
          pokemonId: 8,
          state:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //cubone 
        {
          hp: 50,
          attack: 50,
          defense: 95,
          special_attack: 40,
          special_defense: 50,
          speed: 35,
          pokemonId: 9,
          state:true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Stat', null, { truncate: true, cascade: true });
  }
};
