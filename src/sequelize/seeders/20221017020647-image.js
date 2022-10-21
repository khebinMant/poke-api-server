'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Image', [
      //1 Ditto
      {
        official_art_work: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png',
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
        front_female: 'null',
        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png',
        pokemonId: 1,
        state: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //2 Pikachu
      {
        official_art_work: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png',
        front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/female/25.png',
        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/25.png',
        pokemonId: 2,
        state: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //3 Charmander
      {
        official_art_work: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png',
        front_female: 'null',
        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/4.png',
        pokemonId: 3,
        state: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //4 Clefairy
      {
        official_art_work: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png',
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/35.png',
        front_female: 'null',
        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/35.png',
        pokemonId: 4,
        state: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //5 Squirtle
      {
        official_art_work: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/7.png',
        front_female: 'null',
        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/7.png',
        pokemonId: 5,
        state: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //6 Jigglypuff 
      {
        official_art_work: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png',
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/39.png',
        front_female: 'null',
        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/39.png',
        pokemonId: 6,
        state: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //7 Psyduck  
      {
        official_art_work: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png',
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png',
        front_female: 'null',
        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/54.png',
        pokemonId: 7,
        state: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //8 Staryu   
      {
        official_art_work: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png',
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/120.png',
        front_female: 'null',
        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/120.png',
        pokemonId: 8,
        state: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //9 Cubone    
      {
        official_art_work: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png',
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/104.png',
        front_female: 'null',
        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/104.png',
        pokemonId: 9,
        state: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //10 Bayleef    
      {
        official_art_work: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/153.png',
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/153.png',
        front_female: 'null',
        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/153.png',
        pokemonId: 10,
        state: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //11 raichu    
      {
        official_art_work: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png',
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/26.png',
        front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/female/26.png',
        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/26.png',
        pokemonId: 11,
        state: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //12 charizard    
      {
        official_art_work: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png',
        front_female: 'null',
        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/6.png',
        pokemonId: 12,
        state: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //13 clefable    
      {
        official_art_work: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png',
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/36.png',
        front_female: 'null',
        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/36.png',
        pokemonId: 13,
        state: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //14 wartortle    
      {
        official_art_work: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png',
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/8.png',
        front_female: 'null',
        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/8.png',
        pokemonId: 14,
        state: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //15 wigglytuff    
      {
        official_art_work: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/40.svg',
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/40.png',
        front_female: 'null',
        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/40.png',
        pokemonId: 15,
        state: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //16 golduck    
      {
        official_art_work: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png',
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/55.png',
        front_female: 'null',
        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/55.png',
        pokemonId: 16,
        state: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //17 starmie    
      {
        official_art_work: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png',
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/121.png',
        front_female: 'null',
        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/121.png',
        pokemonId: 17,
        state: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //18 marowak    
      {
        official_art_work: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png',
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/105.png',
        front_female: 'null',
        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/105.png',
        pokemonId: 18,
        state: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //19 meganium    
      {
        official_art_work: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/154.svg',
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/154.png',
        front_female: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/female/154.png',
        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/154.png',
        pokemonId: 19,
        state: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //20 blastoise    
      {
        official_art_work: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png',
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/9.png',
        front_female: 'null',
        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/9.png',
        pokemonId: 20,
        state: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {});

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Image', null, { truncate: true, cascade: true });
  }
};
