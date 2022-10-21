const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi =  require("swagger-ui-express");

//Metadata info about our API

const options = {
    definition:{
        openapi:'3.0.0',
        info:{
            title: 'Poke-Api',
            version:'1.0.0'
        },
    },
    apis:[
        'src/routes/api/v1/public/index.js',
        'src/sequelize/models/pokemon.js',
        'src/sequelize/models/type.js',
        'src/sequelize/models/pokemon_type.js',
        'src/sequelize/models/image.js',
        'src/sequelize/models/ability.js',
        'src/sequelize/models/stat.js',
        'src/sequelize/models/habitat.js'
    ]

};

//Docs on json format
const swaggerSpec = swaggerJSDoc(options);

//Function to setup our docs
const swaggerDocs = (app,port)=>{
    app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get('/api/v1/docs.json',(req, res)=>{
        res.setHeader('Content-type','application/json');
        res.send(swaggerSpec);
    });

    console.log(`Version 1 Docs are avaliable at http://localhost:${3005}/api/v1/docs`)
}

module.exports = {swaggerDocs};
 
