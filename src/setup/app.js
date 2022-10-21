const express =  require('express');
const app  = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const sequelize = require('../sequelize/models')
const { swaggerDocs: V1SwaggerDocs } =  require('../routes/api/v1/swagger')

//middlewars 
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cors({origin:['https://poke-api-client.herokuapp.com','http://localhost:3000'], optionsSuccessStatus:200}));

//rutas
app.use('/api/v1/public',require('../routes/api/v1/public/index'));

//conección sequelize-base datos
const connectDb = async () => {
    console.log('Checking database connection...');

    try {
        await sequelize.sequelize.sync().then(() => {
        console.log('DB en línea...')
        }).catch(err => {
            console.log(err) 
        })
        
    } catch(e) {
        console.log('Database connection failed', e);
        process.exit(1);
    }
};

async function main() {
    await connectDb();
    app.listen(process.env.PORT || 3005);
    V1SwaggerDocs(app,3005)
  }
  
main();
