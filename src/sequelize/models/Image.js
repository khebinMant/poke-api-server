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
    official_art_work: DataTypes.STRING,
    front_default: DataTypes.STRING,
    front_female: DataTypes.STRING,
    front_shiny: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};