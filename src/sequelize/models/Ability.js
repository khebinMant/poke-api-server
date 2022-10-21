'use strict';
const { Model } = require('sequelize');
/**
 * @openapi
 * components:
 *   schemas:
 *     Ability:
 *       type: object
 *       properties:
 *         id: 
 *           type: int
 *           example: 2
 *         name: 
 *           type: string
 *           example: static  
 *         description:
 *           type: string
 *           example: La electricidad estática que lo envuelve puede paralizar al mínimo contacto.
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
  class Ability extends Model {
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
  Ability.init({
    name: {
      type:DataTypes.STRING,
      comment:'Refers to the ability name'
    },
    description:{
      type:DataTypes.STRING,
      comment:'Refers to the pokmenos description'
    },
    state:{
      type:DataTypes.BOOLEAN,
      comment:'Helps with the deleted logical'
    }
  }, {
    sequelize,
    modelName: 'Ability',
  });
  return Ability;
};