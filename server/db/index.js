const Sequelize = require("sequelize")

const db = new Sequelize("postgres://localhost:5432/vialola", {
    logging: false
})

module.exports = db;