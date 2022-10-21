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

const getAllPokemons = async (req, res)=>{

  models.Pokemon.findAll({
    order: [
      [Sequelize.literal('RANDOM()')]
    ],
    where:{
      state:true
    },
    include:[
      {
        model:models.pokemon_type,
        required:true,
        include:{
          model:models.Type
        }
      },
      {
        model:models.Image,
        required: true
      },
      {
        model:models.Ability,
        required: true
      },
      {
        model:models.Stat,
        required: true
      },
      {
        model:models.Habitat,
        required: true
      }
    ]
  }).then(resp=>{
    res.status(200).json({
      transaction :true,
      data: resp,
      msg: 'Successfully Query!'
  })
  }).catch(err=>{
      res.status(500).json({
          transaction: false,
          data: err,
          msg:'Servidor no disponible'
        })
    });
}

const searchPokemonByName = async (req,res)=>{
    const {name} = req.params
    models.Pokemon.findOne({
        where:{
            name,
            state:true
        },
        include:[
          {
            model:models.pokemon_type,
            required:true,
            include:{
              model:models.Type
            }
          },
          {
            model:models.Image,
            required: true
          },
          {
            model:models.Ability,
            required: true
          },
          {
            model:models.Stat,
            required: true
          },
          {
            model:models.Habitat,
            required: true
          }
        ]
    }).then(resp=>{
        res.status(200).json({
            transaction :true,
            data: resp,
            msg: 'Successfully Query!'
        })
    }).catch(err=>{
        res.status(500).json({
            transaction: false,
            data: err,
            msg:'Servidor no disponible'
        })
    })
}
const searchPokemonById = async (req,res)=>{
  const {id} = req.params
  models.Pokemon.findOne({
      where:{
        id,
        state:true
      },
      include:[
        {
          model:models.pokemon_type,
          required:true,
          include:{
            model:models.Type
          }
        },
        {
          model:models.Image,
          required: true
        },
        {
          model:models.Ability,
          required: true
        },
        {
          model:models.Stat,
          required: true
        },
        {
          model:models.Habitat,
          required: true
        }
      ]
  }).then(resp=>{
      res.status(200).json({
          transaction :true,
          data: resp,
          msg: 'Successfully Query!'
      })
  }).catch(err=>{
      res.status(500).json({
          transaction: false,
          data: err,
          msg:'Servidor no disponible'
      })
  })
}

module.exports = {
    searchPokemonByName,
    searchPokemonById,
    getAllPokemons
}