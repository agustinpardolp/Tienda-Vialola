const db = require('../index');
const Sequelize = require('sequelize');
// var Compra = require('./Compras')

const Order = db.define('order', {

    status:{
        type: Sequelize.STRING
    }

})

module.exports= Order;