'use strict';
const {Model} = require('sequelize');
/**
 * @openapi
 * components:
 *   schemas:
 *     Pokemon Type:
 *       type: object
 *       properties:
 *         id: 
 *           type: int
 *           example: 1
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
 *         typeId: 
 *           type: int
 *           example: 5  
 *         Type:
 *            type: object
 *            $ref: "#/components/schemas/Type"
 */
module.exports = (sequelize, DataTypes) => {
  class pokemon_type extends Model {
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
      this.belongsTo(models.Type,{
        foreignKey:{
          type: DataTypes.INTEGER,
          name: 'typeId',
          allowNull:false,
          unique:false
        },
        targetKey: 'id'
      })
    }
  }
  pokemon_type.init({
  }, {
    sequelize,
    modelName: 'pokemon_type',
  });
  return pokemon_type;
};