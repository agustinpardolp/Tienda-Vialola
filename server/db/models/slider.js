const sequelize = require("sequelize");
const db = require("../index");

const Slider = db.define("slider", {
    title: {
      type: sequelize.STRING,
      defaultValue: "Varios"
    },
    img:{
      type:sequelize.STRING,
      allowNull: false
    },
    description:{
        type: sequelize.STRING,
        allowNull: false
      },
    pathnme:{
        type: sequelize.STRING,
        allowNull: true
      },
  });
  
  module.exports = Slider;