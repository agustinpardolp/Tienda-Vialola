const db = require("../index");
const User = require("./user");
const Category = require("./category");
const Serie = require("./serie");
const Artwork = require("./artwork");
const News = require("./news");

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
};
