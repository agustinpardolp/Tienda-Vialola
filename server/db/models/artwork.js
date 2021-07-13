const db = require("../index");
const Sequelize = require("sequelize");

const Artwork = db.define("artwork", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING(350),
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  img: {
    type: Sequelize.STRING,
    defaultValue:
      "http://saveabandonedbabies.org/wp-content/uploads/2015/08/default-300x169.png",
  },
  priceReproduction: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  allowReproduction: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  allowOriginal: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  externalLink: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

module.exports = Artwork;
