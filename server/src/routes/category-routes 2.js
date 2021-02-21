const express = require("express");
const router = express.Router();
const Category = require("../../db/models/index").Category;

const Serie = require("../../db/models/").Serie;

router.get("/", function (req, res) {
  if (req.query.serie) {
    Serie.findOne({
      where: {
        name: req.query.serie,
      },
    }).then((serie) => {
      Category.findAll({
        where: {
          id: serie.categoryId,
        },
        include: [
          {
            model: Serie,
            as: "series",
            attributes: ["name"],
          },
        ],
      }).then((categoryList) => res.send(categoryList));
    });
  } else {
    Category.findAll({
      include: [
        {
          model: Serie,
          as: "series",
          attributes: ["name"],
        },
      ],
    }).then((categoryList) => res.send(categoryList));
  }
});

module.exports = router;
