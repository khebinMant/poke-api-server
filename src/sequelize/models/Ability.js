'use strict';
const {
  Model
} = require('sequelize');
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