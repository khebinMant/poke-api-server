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
        //Charmander-Fuego
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          pokemonId: 3,
          typeId: 7,
        },
        //Clefairy-Hada
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          pokemonId: 4,
          typeId: 8,
        }, 
        //Squirtle-Hada
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          pokemonId: 5,
          typeId: 8,
        }, 
        //jigglypuff-hada
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          pokemonId: 6,
          typeId: 8,
        }, 
        //jigglypuff-normal
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          pokemonId: 6,
          typeId: 11,
        }, 
        //psyduck-Planta
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          pokemonId: 7,
          typeId: 12,
        }, 
        //psyduck-electrico
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          pokemonId: 7,
          typeId: 5,
        },
        //Staryu-Planta
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          pokemonId: 8,
          typeId: 12,
        }, 
        //Staryu-electrico
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          pokemonId: 8,
          typeId: 5,
        }, 
        //cubone-tierra
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          pokemonId:9,
          typeId: 16,
        }, 
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('pokemon_type', null, { truncate: true, cascade: true });
  }
};
