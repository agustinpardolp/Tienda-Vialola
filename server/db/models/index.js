const db = require("../index")
const User = require("./user");
const Category = require ("./category");
const Serie = require ('./serie');
const Product = require("./product");
const Purchase = require ("./purchase");
const Order = require ("./order");

Product.belongsTo(Category)
Category.hasMany(Product)

Product.belongsTo(Serie)
Serie.hasMany(Product)

Serie.belongsTo(Category)
Category.hasMany(Serie)

Order.belongsTo(User, {as:"user"})
User.hasMany(Order, {as:"order"})

Purchase.belongsTo(Order, {as:"order"})
Purchase.belongsTo(Product, {as:"product"})
Order.hasMany(Purchase, {as:"purchase"})


module.exports={
    Category,
    Product,
    Serie,
    Order,
    User,
    Purchase,
    db
}