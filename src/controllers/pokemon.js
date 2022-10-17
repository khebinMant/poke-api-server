;
const Sequelize = require('sequelize')
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../sequelize/config/config.js')[env]
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

let models = require('../sequelize/models');
let Op = Sequelize.Op;

const searchPokemonByName = async (req,res)=>{
    const {name} = req.params
    console.log(name)
    try {
      const pokemons = await models.Pokemon.findAll({
        atributes: ["name", "weight", "height", "hp"],
      });
      res.json(pokemons);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
}

// const searchPokemonByName = async (req,res)=>{
//     const {name} = req.params
//     console.log(name)
//     models.Pokemon.findAll({
//         // attributes:{
//         //     where:{
//         //         name:name
//         //     }
//         // },
//         atributes: ["name", "weight", "height", "hp"],

//         // include:[
//         //     {
//         //         model:models.Image,
//         //         required: true
//         //     },
//         //     {
//         //         model:models.Ability,
//         //         required: true
//         //     }
//         // ]
//     }).then(resp=>{
//         res.status(200).json({
//             transaction :true,
//             data: resp,
//             msg: resp.length
//         })
//     }).catch(err=>{
//         res.status(500).json({
//             transaction: false,
//             data: err,
//             msg:'Servidor no disponible'
//         })
//     })
// }

module.exports = {
    searchPokemonByName
}