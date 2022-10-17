'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Type extends Model {

    static associate(models) {
      this.belongsToMany(models.Pokemon,{
        through: "pokemon_type",
        as: "Type",
        foreignKey:'typeId'
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
    }
  }, {
    sequelize,
    modelName: 'Type',
  });
  return Type;
};