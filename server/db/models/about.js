const sequelize = require("sequelize");
const db = require("../index");

const About = db.define("about", {
  info: {
    type: sequelize.TEXT,
    allowNull: false
  },
});

module.exports = About;