'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Image', [
      //Ditto
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
      //Pikachu
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
      //Charmander
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
      //Clefairy
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
      //Squirtle
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
      //Jigglypuff 
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
      //Psyduck  
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
      //Staryu   
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
      //Cubone    
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
      //Bayleef    
      {
        official_art_work: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/153.png',
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/153.png',
        front_female: 'null',
        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/153.png',
        pokemonId: 9,
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
