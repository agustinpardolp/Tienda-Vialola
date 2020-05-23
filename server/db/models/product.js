const db = require("../index");
const Sequelize = require("sequelize");

const Product = db.define("product", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,

  },
  stock: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  img: {
    type: Sequelize.STRING,
    defaultValue:
      "http://saveabandonedbabies.org/wp-content/uploads/2015/08/default-300x169.png"
  }
});

module.exports = Product;
