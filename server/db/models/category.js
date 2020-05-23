const sequelize = require("sequelize");
const db = require("../index");

const Category = db.define("category", {
  name: {
    type: sequelize.STRING,
    allowNull: false
  },
  img: {
    type: sequelize.STRING,
    defaultValue: "default.jpg"
  }
});

module.exports = Category;
