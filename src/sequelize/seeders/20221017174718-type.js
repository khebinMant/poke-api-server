'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Type', [
        //1
        {
          name: 'acero',
          state: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //2
        {
          name: 'agua',
          state: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //3
        {
          name: 'bicho',
          state: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //4
        {
          name: 'dragón',
          state: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //5
        {
          name: 'eléctrico',
          state: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //6
        {
          name: 'fantasma',
          state: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //7
        {
          name: 'fuego',
          state: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //8
        {
          name: 'hada',
          state: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //9
        {
          name: 'hielo',
          state: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //10
        {
          name: 'lucha',
          state: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //11
        {
          name: 'normal',
          state: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //12
        {
          name: 'planta',
          state: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //13
        {
          name: 'psíquico',
          state: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //14
        {
          name: 'roca',
          state: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //15
        {
          name: 'siniestro',
          state: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //16
        {
          name: 'tierra',
          state: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //17
        {
          name: 'veneno',
          state: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //18
        {
          name: 'volador',
          state: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Type', null, { truncate: true, cascade: true });
  }
};
