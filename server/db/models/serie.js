const sequelize = require("sequelize");
const db = require("../index");

const Serie = db.define("serie", {
    name: {
      type: sequelize.STRING,
      defaultValue: "Varios"
    },
    img:{
      type:sequelize.STRING,
      allowNull: false
    },
    hasArtworkRelated: {
      type: sequelize.BOOLEAN,
      allowNull: true,
    },
  });
  
  module.exports = Serie;