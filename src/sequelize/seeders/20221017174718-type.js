'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Type', [
        //1
        {
          name: 'Acero',
          state: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //2
        {
          name: 'Agua',
          state: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //3
        {
          name: 'Bicho',
          state: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //4
        {
          name: 'Dragón',
          state: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //5
        {
          name: 'Eléctrico',
          state: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //6
        {
          name: 'Fantasma',
          state: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //7
        {
          name: 'Fuego',
          state: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //8
        {
          name: 'Hada',
          state: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //9
        {
          name: 'Hielo',
          state: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //10
        {
          name: 'Lucha',
          state: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //11
        {
          name: 'Normal',
          state: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //12
        {
          name: 'Planta',
          state: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //13
        {
          name: 'Psíquico',
          state: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //14
        {
          name: 'Roca',
          state: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //15
        {
          name: 'Siniestro',
          state: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //16
        {
          name: 'Tierra',
          state: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //17
        {
          name: 'Veneno',
          state: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //18
        {
          name: 'Volador',
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
