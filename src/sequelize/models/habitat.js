'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Habitat extends Model {

    static associate(models) {
      this.hasMany(models.Pokemon,{
        foreignKey:'habitatId'
      })
    }
  }
  Habitat.init({
    name: {
      type: DataTypes.STRING,
      comment: 'Defines the name of the habitat'
    },
    state:{
      type:DataTypes.BOOLEAN,
      comment:'Helps with the deleted logical'
    },
    url:{
      type:DataTypes.TEXT,
      comment:'Url image' 
    }
  }, {
    sequelize,
    modelName: 'Habitat',
  });
  return Habitat;
};