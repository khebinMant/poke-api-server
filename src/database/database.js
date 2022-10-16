import Sequelize from "sequelize";

export const sequelize = new Sequelize('pokemon_db', 'postgres', '12345678', {
    host: 'localhost',
    dialect: 'postgres'
}); 