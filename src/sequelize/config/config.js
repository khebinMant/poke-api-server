//         username: process.env.USER_DB || 'postgres',
//         password: process.env.PASS_DB || '12345678',
//         database: process.env.NAME_DB || 'pokemon_db',
//         host: process.env.HOST_DB || 'localhost',
module.exports = {
    development: {
        // username: process.env.USER_DB || 'zlhhhkuakbmmkz ',
        // password: process.env.PASS_DB || '12345678',
        // database: process.env.NAME_DB || 'd7t1ce7lcad7dq',
        // host: process.env.HOST_DB || 'localhost',
        // dialect: 'postgres',
        url:'postgres://zlhhhkuakbmmkz:720b04512f2400d11c8ebb685b45a1a9c7850ee8afc3e784bc38b2d140f62d85@ec2-52-4-87-74.compute-1.amazonaws.com:5432/d7t1ce7lcad7dq',
        dialect: 'postgres',
        operatorsAliases: 0,
        dialectOptions: {
            ssl: {
              require: true,
              rejectUnauthorized: false
            }
          },
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
        url:'postgres://zlhhhkuakbmmkz:720b04512f2400d11c8ebb685b45a1a9c7850ee8afc3e784bc38b2d140f62d85@ec2-52-4-87-74.compute-1.amazonaws.com:5432/d7t1ce7lcad7dq',
        dialect: 'postgres',
        operatorsAliases: 0,
        dialectOptions: {
            ssl: {
              require: true,
              rejectUnauthorized: false
            }
        }
    }
}