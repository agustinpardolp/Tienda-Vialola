const sequelize = require("sequelize");
const db = require("../index");

const Section = db.define("section", {
  name: {
    type: sequelize.STRING,
    allowNull: false
  },
});

module.exports = Section;
