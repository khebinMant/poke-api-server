'use strict';
const { Model } = require('sequelize');
/**
 * @openapi
 * components:
 *   schemas:
 *     Image:
 *       type: object
 *       properties:
 *         id: 
 *           type: int
 *           example: 2
 *         official_art_work:
 *           type: string
 *           example: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
 *         front_default:
 *           type: string
 *           example: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png"
 *         front_female:
 *           type: string
 *           example: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/female/25.png"
 *         front_shiny: 
 *           type: string
 *           example: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/25.png"  
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
  class Image extends Model {
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
  Image.init({
    official_art_work:{
      type: DataTypes.STRING,
      comment:'Official art url'
    },
    front_default:{
      type: DataTypes.STRING,
      comment: 'Front image url'
    },
    front_female:{
      type: DataTypes.STRING,
      comment:'Front female image url'
    },
    front_shiny:{
      type:DataTypes.STRING,
      comment: 'Front shiny image url'
    },
    state:{
      type:DataTypes.BOOLEAN,
      comment:'Helps with the deleted logical'
    }
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};