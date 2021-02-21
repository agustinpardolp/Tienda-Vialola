const sequelize = require("sequelize");
const db = require("../index");

const News = db.define("news", {
  title: {
    type: sequelize.STRING,
    defaultValue: "Varios",
  },
  img: {
    type: sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: sequelize.TEXT,
    allowNull: false,
  },
  pathnme: {
    type: sequelize.STRING,
    allowNull: true,
  },
});

module.exports = News;
