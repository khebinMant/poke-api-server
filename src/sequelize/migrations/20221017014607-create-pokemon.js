'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pokemons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      evolution: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      is_legendary:{
        type: Sequelize.BOOLEAN
      },
      is_mythical:{
        type: Sequelize.BOOLEAN
      },
      habitat:{
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'habitats',
          key: 'id',
          as: 'habitatId',
        }      
      },
      height:{
        type: Sequelize.INTEGER
      },
      weight:{
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('pokemons');
  }
};