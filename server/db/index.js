const Sequelize = require("sequelize")

const db = new Sequelize("postgres://localhost:5432/vialola", {
    logging: false,
    database: 'vialola',
    username: 'postgres',
    password: '1234',
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
})

module.exports = db;