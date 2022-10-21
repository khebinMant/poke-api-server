'use strict';
const {Model} = require('sequelize');
/**
 * @openapi
 * components:
 *   schemas:
 *     Pokemon:
 *       type: object
 *       properties:
 *         id: 
 *           type: int
 *           example: 1
 *         name: 
 *           type: string
 *           example: pikachu  
 *         evolution:
 *           type: string
 *           example: raichu
 *         color:
 *           type: string
 *           example: yellow
 *         description:
 *           type: string
 *           example: Levanta su cola para vigilar los alrededores. A veces, puede ser alcanzado por un rayo en esa pose, Las bolsas de las mejillas están llenas de electricidad, que libera cuando se siente amenazado.
 *         is_legendary:
 *           type: boolean
 *           example: false
 *         is_mythical: 
 *           type: boolean
 *           example: false
 *         height:
 *           type: int
 *           example: 4
 *         weight:
 *           type: int
 *           example: 60
 *         state:
 *           type: boolean
 *           example: true
 *         createdAt:
 *           type: date
 *           example: 2022-10-21T05:55:42.283Z 
 *         updatedAt:
 *           type: date
 *           example: 2022-10-21T05:55:42.283Z
 *         habitatId:
 *           type: int
 *           example: 2
 *         pokemon_types:
 *           type: array
 *           $ref: "#/components/schemas/Pokemon Type"
 *         Image:
 *           type: object
 *           $ref: "#/components/schemas/Image"
 *         Abilities:
 *           type: array
 *           $ref: "#/components/schemas/Ability"
 *         Stat:
 *           type: object
 *           $ref: "#/components/schemas/Stat"
 *         Habitat:
 *           type: object
 *           $ref: "#/components/schemas/Habitat"
 */
module.exports = (sequelize, DataTypes) => {
  class Pokemon extends Model {
    static associate(models) {
      this.hasMany(models.Ability,{
        foreignKey:'pokemonId'
      })
      this.hasOne(models.Image,{
        foreignKey:'pokemonId'
      })
      this.hasOne(models.Stat,{
        foreignKey:'pokemonId'
      })
      this.hasMany(models.pokemon_type,{
        foreignKey:{
          type: DataTypes.INTEGER,
          name: 'pokemonId',
          allowNull: false,
          unique: false
        },
        sourceKey:'id'
      })
      this.belongsTo(models.Habitat,{
        foreignKey:{
          type: DataTypes.INTEGER,
          name: 'habitatId',
          allowNull:false,
          unique:false
        },
        targetKey: 'id'
      })
    }
  }
  Pokemon.init({
    name: {
      type:DataTypes.STRING,
      comment:'Defines the data type'
    },
    evolution:{
      type:DataTypes.STRING,
      comment:'Evolution name references to a another pokemon'
    } ,
    color: {
      type: DataTypes.STRING,
      comment:'Defines pokemons color' 
    },
    description:{
      type:DataTypes.STRING,
      comment:'Pokemons description'
    },
    is_legendary:{
      type: DataTypes.BOOLEAN,
      comment :'Allows to know if the pokemon is legendary'
    },
    is_mythical:{
      type: DataTypes.BOOLEAN,
      comment :'Allows to know if the pokemon is mythical'
    },
    height:{
      type: DataTypes.INTEGER,
      comment:'Defines pokemons height' 
    },
    weight:{
      type: DataTypes.INTEGER,
      comment:'Defines pokemons weight' 
    },
    state:{
      type:DataTypes.BOOLEAN,
      comment:'Helps with the deleted logical'
    }
  }, {
    sequelize,
    modelName: 'Pokemon',
  });
  return Pokemon;
};