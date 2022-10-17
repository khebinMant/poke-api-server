'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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