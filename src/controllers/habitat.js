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

const getAllHabitats = async (req, res)=>{

  models.Habitat.findAll({
    where:{
        state:true
      },
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

module.exports = {
    getAllHabitats
}