'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Types', [
        //1
        {
          name: 'acero',
          state: true,
          url:'https://upload.wikimedia.org/wikipedia/commons/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //2
        {
          name: 'agua',
          state: true,
          url:'https://upload.wikimedia.org/wikipedia/commons/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //3
        {
          name: 'bicho',
          state: true,
          url:'https://upload.wikimedia.org/wikipedia/commons/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //4
        {
          name: 'dragón',
          state: true,
          url:'https://upload.wikimedia.org/wikipedia/commons/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //5
        {
          name: 'eléctrico',
          state: true,
          url:'https://upload.wikimedia.org/wikipedia/commons/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //6
        {
          name: 'fantasma',
          state: true,
          url:'https://upload.wikimedia.org/wikipedia/commons/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //7
        {
          name: 'fuego',
          state: true,
          url:'https://upload.wikimedia.org/wikipedia/commons/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //8
        {
          name: 'hada',
          state: true,
          url:'https://upload.wikimedia.org/wikipedia/commons/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //9
        {
          name: 'hielo',
          state: true,
          url:'https://upload.wikimedia.org/wikipedia/commons/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //10
        {
          name: 'lucha',
          state: true,
          url:'https://upload.wikimedia.org/wikipedia/commons/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //11
        {
          name: 'normal',
          state: true,
          url:'https://upload.wikimedia.org/wikipedia/commons/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //12
        {
          name: 'planta',
          state: true,
          url:'https://upload.wikimedia.org/wikipedia/commons/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //13
        {
          name: 'psíquico',
          state: true,
          url:'https://upload.wikimedia.org/wikipedia/commons/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //14
        {
          name: 'roca',
          state: true,
          url:'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //15
        {
          name: 'siniestro',
          state: true,
          url:'https://upload.wikimedia.org/wikipedia/commons/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //16
        {
          name: 'tierra',
          state: true,
          url:'https://es.m.wikipedia.org/wiki/Archivo:Pok%C3%A9mon_Ground_Type_Icon.svg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //17
        {
          name: 'veneno',
          state: true,
          url:'https://upload.wikimedia.org/wikipedia/commons/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //18
        {
          name: 'volador',
          state: true,
          url:'https://upload.wikimedia.org/wikipedia/commons/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg',
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Types', null, { truncate: true, cascade: true });
  }
};
