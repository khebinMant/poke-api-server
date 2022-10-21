// module.exports = {
//     development: {
//         username: process.env.USER_DB || 'postgres',
//         password: process.env.PASS_DB || '12345678',
//         database: process.env.NAME_DB || 'pokemon_db',
//         host: process.env.HOST_DB || 'localhost',
//         dialect: 'postgres',
//         operatorsAliases: 0,
//         define: { freezeTableName: true }
//     },
//     test: {
//         username: 'root',
//         password: null,
//         database: 'database_test',
//         host: '127.0.0.1',
//         dialect: 'postgres',
//         operatorsAliases: 0
//     },
//     production: {
//         username: 'root',
//         password: null,
//         database: 'database_production',
//         host: '127.0.0.1',
//         dialect: 'mysql',
//         operatorsAliases: 0
//     }
// }
module.exports = {
    development: {
        // username: process.env.USER_DB || 'postgres',
        // password: process.env.PASS_DB || '12345678',
        // database: process.env.NAME_DB || 'pokemon_db',
        // host: process.env.HOST_DB || 'localhost',
        url: 'postgres://zlhhhkuakbmmkz:720b04512f2400d11c8ebb685b45a1a9c7850ee8afc3e784bc38b2d140f62d85@ec2-52-4-87-74.compute-1.amazonaws.com:5432/d7t1ce7lcad7dq',
        dialect: 'postgres',
        dialectOptions: {
            ssl: true
          }
    },
    test: {
        username: 'root',
        password: null,
        database: 'database_test',
        host: '127.0.0.1',
        dialect: 'postgres',
        dialectOptions:{
            ssl:{
                rejectUnauthorized:false
            }
        }
    },
    production: {
        url:'postgres://wpnihjifucjriv:d6add6a2db54ab4cd676e906a51180542f33a3ffab06f807ff9d354f26bc7796@ec2-54-82-205-3.compute-1.amazonaws.com:5432/del5rhv3fkjii9',
        dialect: 'postgres',
        operatorsAliases: 0,
        dialectOptions:{
            ssl:{
                rejectUnauthorized:false
            }
        }
    }
}