const express = require("express");
const router = express.Router();
const Category = require("../../db/models/index").Category;
const Artwork = require("../../db/models/index").Artwork;
const Serie = require("../../db/models/").Serie;
const MulterFn = require("../utils");

router.get("/:category", function (req, res) {
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

router.get("/:category/:serieName", function (req, res) {
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
      ],
    }).then((artworkList) => res.send(artworkList));
  });
});

router.get("/:id", function (req, res) {
  Artwork.findByPk(req.params.id).then((Artwork) => {
    res.send(Artwork);
  });
});

router.get("/", function (req, res) {

  let handlerSearch = () => {
    let searchParameters = {
      model: "",
      parameter: "",
    };
    switch (Object.keys(req.query)[0]) {
      case "serie":
        (searchParameters.model = Serie),
          (searchParameters.parameter = req.query.serie);
        break;
      case "category":
        (searchParameters.model = Category),
          (searchParameters.parameter = req.query.category);
        break;
      default:
        
        searchParameters=null;
    }
    return searchParameters;
  };
  if (handlerSearch()) {
    let { model, parameter } = handlerSearch();
    model
      .findOne({
        where: {
          name: parameter,
        },
      })
      .then((serie) => {
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
          ],
        }).then((artworkList) => {
          res.send(artworkList);
        });
      });
  } else {
    Artwork.findAll({
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
  }
});

router.put("/", MulterFn.single("img"), function (req, res) {
  Artwork.update(
    {
      name: req.body.name,
      description: req.body.description,
      price: req.body.file,
      img: req.file?req.file.filename:req.body.img,
      priceReproduction: req.body.priceReproduction,
      allowReproduction: req.body.allowReproduction,
      allowOriginal: req.body.allowOriginal,
      categoryId: req.body.categoryId,
      serieId: req.body.serieId,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  ).then((resp) => {
    console.log("responsè", resp)
    res.sendStatus(201);
  });
});

router.post("/", MulterFn.single("img"), function (req, res) {
  Artwork.create(
    {
      name: req.body.name,
      description: req.body.description,
      price: req.body.file,
      img: req.file.filename,
      priceReproduction: req.body.priceReproduction,
      allowReproduction: req.body.allowReproduction,
      allowOriginal: req.body.allowOriginal,
      categoryId: req.body.categoryId,
      serieId: req.body.serieId,
    }
  ).then((resp) => {
    res.sendStatus(201);
  }).catch(err=>{
    console.log(err)
    res.sendStatus(404)
  });
});
router.delete("/:id", function (req, res) {
  Artwork.destroy({
    where: {
      id: req.params.id
    }
  }).then((resp) => {
    res.sendStatus(201);
  }).catch(err => res.send(err));
});
module.exports = router;
