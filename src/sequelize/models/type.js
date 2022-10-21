'use strict';
const {Model} = require('sequelize');
/**
 * @openapi
 * components:
 *   schemas:
 *     Type:
 *       type: object
 *       properties:
 *         id: 
 *           type: int
 *           example: 1
*         name: 
 *           type: string
 *           example: 5
 *         state:
 *           type: boolean
 *           example: true
 *         url: 
 *           type: string
 *           example: https://upload.wikimedia.org/wikipedia/commons/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg
 *         createdAt:
 *           type: date
 *           example: 2022-10-21T05:55:42.283Z 
 *         updatedAt:
 *           type: date
 *           example: 2022-10-21T05:55:42.283Z
 */
module.exports = (sequelize, DataTypes) => {
  class Type extends Model {

    static associate(models) {
      this.hasMany(models.pokemon_type,{
        foreignKey:{
          type: DataTypes.INTEGER,
          name: 'typeId',
          allowNull: false,
          unique: false
        },
        sourceKey: 'id'
      })
    }
  }
  Type.init({
    name: {
      type: DataTypes.STRING,
      comment: 'Referes to the type name'
    },
    state:{
      type:DataTypes.BOOLEAN,
      comment:'Helps with the deleted logical'
    },
    url:{
      type:DataTypes.TEXT,
      comment:'Image url'
    }
  }, {
    sequelize,
    modelName: 'Type',
  });
  return Type;
};