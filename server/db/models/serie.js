const sequelize = require("sequelize");
const db = require("../index");

const Serie = db.define("serie", {
    name: {
      type: sequelize.STRING,
      defaultValue: "Varios"
    },
  });
  
  module.exports = Serie;