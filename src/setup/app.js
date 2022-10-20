const express =  require('express');
const app  = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const sequelize = require('../sequelize/models')

//middlewars 
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cors({origin:'http://localhost:3000', optionsSuccessStatus:200}));

//rutas
app.use('/api/v1/public',require('../routes/index'));

const connectDb = async () => {
    console.log('Checking database connection...');

    try {
        // await sequelize.sequelize.sync({force:true}).then(() => {
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
    app.listen(3005);
  }
  
main();
