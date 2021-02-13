const db = require("../index");
const User = require("./user");
const Category = require("./category");
const Section = require("./section");
const Serie = require("./serie");
const Product = require("./product");
const Purchase = require("./purchase");
const Order = require("./order");
const Artwork = require("./artwork");
const News = require("./news");
const Slider = require("./slider");

// Product.belongsTo(Section);
// Section.hasMany(Product);
// Order.belongsTo(User, { as: "user" });
// User.hasMany(Order, { as: "order" });
// Purchase.belongsTo(Order, { as: "order" });
// Purchase.belongsTo(Product, { as: "product" });
Order.hasMany(Purchase, { as: "purchase" });

Artwork.belongsTo(Category);
Category.hasMany(Artwork);

Artwork.belongsTo(Serie);
Serie.hasMany(Artwork);

Serie.belongsTo(Category);
Category.hasMany(Serie);



module.exports = {
  // Product,
  // Purchase,
  // Order,
  User,
  Category,
  Serie,
  Section,
  Artwork,
  db,
  News,
  Slider
};
