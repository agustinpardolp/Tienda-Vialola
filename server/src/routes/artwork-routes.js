const express = require("express");
const router = express.Router();
const Category = require("../../db/models/index").Category;
const Artwork = require("../../db/models/index").Artwork;
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
    Artwork.findAll({
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
    }).then((artworkList) => {
      res.send(artworkList);
    });
  });
});

router.get("/:serieName", function (req, res) {
  Serie.findOne({
    where: {
      name: req.params.serieName,
    },
  }).then((serie) => {
    Artwork.findAll({
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
    }).then((artworkList)=> res.send(artworkList))
  });
});

router.get("/:id", function (req, res) {
  Artwork.findByPk(req.params.id).then((Artwork) => {
    res.send(Artwork);
  });
});
module.exports = router;