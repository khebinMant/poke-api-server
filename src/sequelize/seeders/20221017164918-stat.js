'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Stats', [
        //1 Ditto
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
        //2 Pikachu
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
        //3 Charmander
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
        //4 Clefairy
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
        //5 Squirtle
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
        //6 Jigglypuff 
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
        //7 Psyduck 
        {
          hp: 50,
          attack: 52,
          defense: 48,
          special_attack: 65,
          special_defense: 50,
          speed: 55,
          pokemonId: 7,
          state:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //8 Staryu 
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
        //9 cubone 
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
        },
        //10 bayleef 
        {
          hp: 60,
          attack: 62,
          defense: 80,
          special_attack: 63,
          special_defense: 80,
          speed: 60,
          pokemonId: 10,
          state:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //11 raichu 
        {
          hp: 60,
          attack: 90,
          defense: 55,
          special_attack: 90,
          special_defense: 80,
          speed: 110,
          pokemonId: 11,
          state:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //12 charizard 
        {
          hp: 78,
          attack: 84,
          defense: 78,
          special_attack: 109,
          special_defense: 85,
          speed: 100,
          pokemonId: 12,
          state:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //13 clefable  
        {
          hp: 95,
          attack: 70,
          defense: 73,
          special_attack: 95,
          special_defense: 90,
          speed: 60,
          pokemonId: 13,
          state:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //14 wartortle  
        {
          hp: 59,
          attack: 63,
          defense: 80,
          special_attack: 65,
          special_defense: 80,
          speed: 58,
          pokemonId: 14,
          state:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //15 wigglytuff  
        {
          hp: 140,
          attack: 40,
          defense: 45,
          special_attack: 85,
          special_defense: 50,
          speed: 45,
          pokemonId: 15,
          state:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //16 golduck  
        {
          hp: 80,
          attack: 82,
          defense: 78,
          special_attack: 95,
          special_defense: 80,
          speed: 85,
          pokemonId: 16,
          state:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //17 starmie  
        {
          hp: 60,
          attack: 75,
          defense: 85,
          special_attack: 100,
          special_defense: 85,
          speed: 115,
          pokemonId: 17,
          state:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //18 starmie  
        {
          hp: 60,
          attack: 80,
          defense: 110,
          special_attack: 50,
          special_defense: 80,
          speed: 45,
          pokemonId: 18,
          state:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //19 meganium  
        {
          hp: 80,
          attack: 82,
          defense: 100,
          special_attack: 83,
          special_defense: 100,
          speed: 80,
          pokemonId: 19,
          state:true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //20 blastoise  
        {
          hp: 79,
          attack: 83,
          defense: 100,
          special_attack: 85,
          special_defense: 105,
          speed: 78,
          pokemonId: 20,
          state:true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Stats', null, { truncate: true, cascade: true });
  }
};
