const db = require("../index");
const User = require("./user");
const Category = require("./category");
const Section = require("./section");
const Serie = require("./serie");
const Product = require("./product");
const Purchase = require("./purchase");
const Order = require("./order");
const Artwork = require("./artwork");

Product.belongsTo(Section);
Section.hasMany(Product);

Artwork.belongsTo(Category);
Category.hasMany(Artwork);

Artwork.belongsTo(Serie);
Serie.hasMany(Artwork);

Serie.belongsTo(Category);
Category.hasMany(Serie);

Order.belongsTo(User, { as: "user" });
User.hasMany(Order, { as: "order" });

Purchase.belongsTo(Order, { as: "order" });
Purchase.belongsTo(Product, { as: "product" });
Order.hasMany(Purchase, { as: "purchase" });

module.exports = {
  Category,
  Product,
  Serie,
  Order,
  User,
  Purchase,
  Section,
  Artwork,
  db,
};
