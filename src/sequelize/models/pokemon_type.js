'use strict';
const {
  Model
} = require('sequelize');
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