'use strict';
const {
  Model
} = require('sequelize');
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