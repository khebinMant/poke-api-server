'use strict';
const {
  Model
} = require('sequelize');
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
      type:DataTypes.INTEGER,
      comment:'Evolution is a number references to a another pokemonId'
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