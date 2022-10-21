'use strict';
const { Model } = require('sequelize');
/**
 * @openapi
 * components:
 *   schemas:
 *     Habitat:
 *       type: object
 *       properties:
 *         id: 
 *           type: int
 *           example: 2
 *         name: 
 *           type: string
 *           example: "bosque"  
 *         state:
 *           type: boolean
 *           example: true
 *         url:
 *           type: string
 *           example: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cad4b52e-f6b1-432f-9035-a5f4853bcf15/d7i3cm4-dc9f4577-6b7d-4d59-8b46-a15bf5e84209.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NhZDRiNTJlLWY2YjEtNDMyZi05MDM1LWE1ZjQ4NTNiY2YxNVwvZDdpM2NtNC1kYzlmNDU3Ny02YjdkLTRkNTktOGI0Ni1hMTViZjVlODQyMDkuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.MAvFmljnNt5yawKRk7Tm-59pAkenmRqY3ZmzVmfsMjI"
 *         createdAt:
 *           type: date
 *           example: 2022-10-21T05:55:42.283Z 
 *         updatedAt:
 *           type: date
 *           example: 2022-10-21T05:55:42.283Z
 */
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