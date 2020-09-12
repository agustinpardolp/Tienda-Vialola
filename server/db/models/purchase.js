var db = require("../index");
var Sequelize = require("sequelize");
// var OC = require('./OrdenesDeCompra');
// var Product = require('./Products');

const Purchase = db.define("purchase", {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
  },
});

module.exports = Purchase;
