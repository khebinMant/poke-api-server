const express =  require('express');
const app  = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const modelos = require('../sequelize/models')

//middlewars si mis rutas van usar datos que llegan del cliente
// primero debo poder interpretarlos uso el 
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cors({origin:'http://localhost:4200', optionsSuccessStatus:200}));

//Rutas
app.use(require('../routes/index'));

modelos.sequelize.sync().then(() => {
    console.log('DB en línea...')
}).catch(err => {
    console.log(err) 
})

app.listen(3000);






