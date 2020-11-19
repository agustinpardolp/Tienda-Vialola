const express = require("express");
const router = express.Router();
const Category = require("../../db/models/index").Category;
const Serie = require("../../db/models/").Serie;

router.get("/:category/", function (req, res) {

  Category.findOne({
    where: {
      name: req.params.category,
    },
  })
    .then((category) => {
      Serie.findAll({
        where: {
          categoryId: category.id,
        },
        include: [
          {
            model: Category,
            as: "category",
            attributes: ["name"]
          }]
      }).then((seriesList) => {
        console.log(seriesList)
        return res.send(seriesList)});
    })
    
});

module.exports = router;
