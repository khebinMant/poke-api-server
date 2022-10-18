'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Habitat', [
      //1
      {
        name: 'cueva',
        state: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //2
      {
        name: 'bosque',
        state: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //3
      {
        name: 'pradera',
        state: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //4
      {
        name: 'montaña',
        state: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //5
      {
        name: 'raro',
        state: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      //5 
      {
        name: 'terreno dificil',
        state: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //6
      {
        name: 'mar',
        state: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //7
      {
        name: 'urbano',
        state: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //8
      {
        name: 'borde de agua',
        state: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {});

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Habitat', null, { truncate: true, cascade: true });
  }
};
