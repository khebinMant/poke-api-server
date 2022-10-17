'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hp: {
        type: Sequelize.NUMBER
      },
      attack: {
        type: Sequelize.NUMBER
      },
      defense: {
        type: Sequelize.NUMBER
      },
      special_attack: {
        type: Sequelize.NUMBER
      },
      special_defense: {
        type: Sequelize.NUMBER
      },
      speed: {
        type: Sequelize.NUMBER
      },
      pokemonId:{
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'pokemons',
          key: 'id',
          as: 'pokemonId',
        }
      },
      state: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('stats');
  }
};