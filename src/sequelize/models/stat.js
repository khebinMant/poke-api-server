'use strict';
const {
  Model
} = require('sequelize');
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