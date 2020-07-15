const express = require("express");
const router = express.Router();
const Category = require("../../db/models/index").Category;
const Product = require("../../db/models/index").Product;
const Serie = require("../../db/models/").Serie;

router.get("/categories", function (req, res) {
  Category.findAll({
    include: [
      {
        model: Serie,
        as: "series",
        attributes: ["name"],
      },
    ],
  }).then((categoryList) => res.send(categoryList));
});

router.get("/:category/all/", function (req, res) {
  Category.findOne({
    where: {
      name: req.params.category,
    },
  }).then((selectedCategory) => {
    Product.findAll({
      where: {
        categoryId: selectedCategory.id,
      },
      include: [
        {
          model: Category,
          as: "category",
          attributes: ["name"],
        },
        {
          model: Serie,
          as: "serie",
          attributes: ["name"],
        },
      ],
    }).then((productList) => {
      res.send(productList);
    });
  });
});

router.get("/:serieName", function (req, res) {
  Serie.findOne({
    where: {
      name: req.params.serieName,
    },
  }).then((serie) => {
    Product.findAll({
      where: {
        serieId: serie.id,
      },
      include: [
        {
          model: Category,
          as: "category",
          attributes: ["name"],
        },
        {
          model: Serie,
          as: "serie",
          attributes: ["name"],
        },
      ]
    }).then((productList)=> res.send(productList))
  });
});

router.get("/:id", function (req, res) {
  Product.findByPk(req.params.id).then((product) => {
    res.send(product);
  });
});
module.exports = router;
