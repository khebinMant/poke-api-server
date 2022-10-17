'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Habitat', [
      //1
      {
        name: 'cave',
        state: true
      },
      //2
      {
        name: 'forest',
        state: true
      },
      //3
      {
        name: 'grassland',
        state: true
      },
      //4
      {
        name: 'mountain',
        state: true
      },
      //5
      {
        name: 'rare',
        state: true
      }, 
      //5 
      {
        name: 'rough-terrain',
        state: true
      },
      //6
      {
        name: 'sea',
        state: true
      },
      //7
      {
        name: 'urban',
        state: true
      },
      //8
      {
        name: 'waters-edge',
        state: true
      }
  ], {});

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Habitat', null, { truncate: true, cascade: true });
  }
};
