const db = require("../index");
const User = require("./user");
const Category = require("./category");
const Serie = require("./serie");
const Purchase = require("./purchase");
const Order = require("./order");
const Artwork = require("./artwork");
const News = require("./news");
const Slider = require("./slider");
const About = require("./about");

Order.hasMany(Purchase, { as: "purchase" });

Artwork.belongsTo(Category);
Category.hasMany(Artwork);

Artwork.belongsTo(Serie);
Serie.hasMany(Artwork);

Serie.belongsTo(Category);
Category.hasMany(Serie);

module.exports = {
  User,
  Category,
  Serie,
  Artwork,
  db,
  News,
  Slider,
  About,
};
