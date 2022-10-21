'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('pokemon_types', [
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
        //bayleef-grass
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          pokemonId:10,
          typeId: 12,
        }, 
        //raichu-electric
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          pokemonId:11,
          typeId: 5,
        }, 
        //charizard-fire
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          pokemonId:12,
          typeId: 7,
        }, 
        //charizard-flying
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          pokemonId:12,
          typeId: 18,
        }, 
        //clefable-fairy
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          pokemonId:13,
          typeId: 8,
        },
        //wartortle-water
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          pokemonId:14,
          typeId: 2,
        },
        //wigglytuff-water
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          pokemonId:15,
          typeId: 8,
        },
        //wigglytuff-water
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          pokemonId:15,
          typeId: 11,
        },
        //golduck-water
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          pokemonId:16,
          typeId: 2,
        },
        //starmie-water
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          pokemonId:17,
          typeId: 2,
        },
        //starmie-psychic
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          pokemonId:17,
          typeId: 13,
        },
        //marowak-ground
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          pokemonId:18,
          typeId: 16,
        }, 
        //meganium-grass
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          pokemonId:19,
          typeId: 12,
        },
        //blastoise-water
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          pokemonId:20,
          typeId: 2,
        }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('pokemon_types', null, { truncate: true, cascade: true });
  }
};
