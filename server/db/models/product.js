const db = require("../index");
const Sequelize = require("sequelize");

const Product = db.define("product", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING(450),
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  size: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  stock: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  img1: {
    type: Sequelize.STRING,
    defaultValue: "",
  },
  img2: {
    type: Sequelize.STRING,
    defaultValue: "",
  },
  img3: {
    type: Sequelize.STRING,
    defaultValue: "",
  },
  reviews: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    defaultValue: 0.0,
  },
});

module.exports = Product;
