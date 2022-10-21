'use strict';
const {Model} = require('sequelize');
/**
 * @openapi
 * components:
 *   schemas:
 *     Stat:
 *       type: object
 *       properties:
 *         id: 
 *           type: int
 *           example: 2
 *         hp: 
 *           type: int
 *           example: 35  
 *         attack:
 *           type: int
 *           example: 55
 *         defense:
 *           type: int
 *           example: 40
 *         special_attack:
 *           type: int
 *           example: 50
 *         special_defense:
 *           type: int
 *           example: 50
 *         speed: 
 *           type: int
 *           example: 90
 *         state:
 *           type: boolean
 *           example: true
 *         createdAt:
 *           type: date
 *           example: 2022-10-21T05:55:42.283Z 
 *         updatedAt:
 *           type: date
 *           example: 2022-10-21T05:55:42.283Z
 *         pokemonId:
 *           type: int
 *           example: 2
 */
module.exports = (sequelize, DataTypes) => {
  class Stat extends Model {
    static associate(models) {
      this.belongsTo(models.Pokemon,{
        foreignKey:{
          type: DataTypes.INTEGER,
          name: 'pokemonId',
          allowNull:false,
          unique:false
        },
        targetKey: 'id'
      })
    }
  }
  Stat.init({
    hp: {
      type: DataTypes.INTEGER,
      comment:'Refers to the health points of the pokemon'
    },
    attack: {
      type: DataTypes.INTEGER,
      comment:'Refers to the attack points or damage of the pokemon'
    },
    defense: {
      type: DataTypes.INTEGER,
      comment: 'Refers to the defense points of the pokemon'
    },
    special_attack: {
      type :DataTypes.INTEGER,
      comment: 'Refers to the special attacks points of the pokemon'
    },
    special_defense: {
      type: DataTypes.INTEGER,
      comment:'Refers to the special defense points of the pokemon'
    },
    speed: {
      type: DataTypes.INTEGER,
      comment:'Refers to the speed points of the pokemon'
    },
    state:{
      type:DataTypes.BOOLEAN,
      comment:'Helps with the deleted logical'
    }  }, {
    sequelize,
    modelName: 'Stat',
  });
  return Stat;
};