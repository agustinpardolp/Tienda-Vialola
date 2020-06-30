const express = require("express");
const router = express.Router();
var Promise = require("bluebird");
const Category = require("../../db/models/index").Category;
const Product = require("../../db/models/index").Product;
const Serie = require ("../../db/models/").Serie;

router.get("/categories", function(req, res) {

  Category.findAll({

    include: [
      {
        model: Serie,
        as: "series",
        attributes: ["name"]
      }]
  })
  .then(categoryList => res.send(categoryList))  

});

router.get("/:category/all/", function(req, res) {
  console.log("params",req.params.category )
  Category.findOne({
    where: {
      name: req.params.category
    }
  }).then(selectedCategory => {
    console.log(selectedCategory,"produtlist")
    Product.findAll({
      where: {
        categoryId: selectedCategory.id
      },
      include: [
        {
          model: Category,
          as: "category",
          attributes: ["name"]
        },
        {
          model: Serie,
          as: "serie",
          attributes: ["name"]
        },
      ]
    }).then(productList => {
      // console.log(productList,"produtlist")
      res.send(productList);
    });
  });
});

router.get("/:id", function(req, res) {
  Product.findByPk(req.params.id).then(product => {
    res.send(product);
  });
  
  // var promise = new Promise(function(resolve, reject){
  //   var productList = productsApiSimulator()
  //   setTimeout(() => {
  //     for (let i = 0; i < productList.length; i++) {
  //       if(productList[i].id == req.params.id)
  //       resolve(productList[i])
  //     }
  //     }, 1000)
  //   })
  //     promise.then(product => {
  //           res.send(product);
  //         });
});

module.exports = router;
