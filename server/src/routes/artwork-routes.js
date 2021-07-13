const express = require("express");
const router = express.Router();
const Category = require("../../db/models/index").Category;
const Artwork = require("../../db/models/index").Artwork;
const Serie = require("../../db/models/").Serie;
const MulterFn = require("../utils").multerFn;
const transporter = require("../utils").transporter;
const createEmailOptions = require("../utils").createEmailOptions;

router.get("/:category", function (req, res) {
  Category.findOne({
    where: {
      name: req.params.category,
    },
  })
    .then((selectedCategory) => {
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
      })
        .then((artworkList) => {
          res.send(artworkList);
        })
        .catch((err) => {
          res.status(404).send("No se encontro la obra");
        });
    })
    .catch((err) => {
      res.status(404).send("No se encontro la categorìa");
    });
});

router.get("/:category/:serieName", function (req, res) {
  Serie.findOne({
    where: {
      name: req.params.serieName,
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
      }).then((artworkList) => res.send(artworkList));
    })
    .catch((err) => res.status(404).send("Ocurrio un error"));
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
        searchParameters = null;
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
        })
          .then((artworkList) => {
            res.send(artworkList);
          })
          .catch((err) => res.status(404).send("Ocurrio un error"));
      })
      .catch((err) => res.status(404).send("Ocurrio un error"));
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
    })
      .then((artworkList) => {
        res.send(artworkList);
      })
      .catch((err) => res.status(404).send("Ocurrio un error"));
  }
});

router.put("/", MulterFn.single("img"), function (req, res) {
  Artwork.update(
    {
      name: req.body.name,
      description: req.body.description,
      price: req.body.file,
      img: req.file ? req.file.filename : req.body.img,
      priceReproduction: req.body.priceReproduction,
      allowReproduction: req.body.allowReproduction,
      allowOriginal: req.body.allowOriginal,
      categoryId: req.body.categoryId,
      serieId: req.body.serieId,
      externalLink: req.body.externalLink,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  )
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => res.status(404).send("Ocurrio un error"));
});

router.post("/", MulterFn.single("img"), function (req, res) {
  Artwork.create({
    name: req.body.name,
    description: req.body.description,
    price: req.body.file,
    img: req.file.filename,
    priceReproduction: req.body.priceReproduction,
    allowReproduction: req.body.allowReproduction,
    allowOriginal: req.body.allowOriginal,
    categoryId: req.body.categoryId,
    serieId: req.body.serieId,
    externalLink: req.body.externalLink,
  })
    .then((res) => {
      Serie.findByPk(req.body.serieId).then((serie) => {
        if (!serie.hasArtworkRelated) {
          Serie.update(
            {
              hasArtworkRelated: true,
            },
            {
              where: {
                id: req.body.serieId,
              },
            }
          );
          res.sendStatus(201);
        }
        res.sendStatus(201);
      });
    })
    .catch((err) => {
      res.sendStatus(404);
    });
});
router.delete("/:id", function (req, res) {
  Artwork.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((resp) => {
      Artwork.findAll({
        where: {
          serieId: req.body.serieId,
        },
      }).then((artworkList) => {
        if (!artworkList.length) {
          Serie.findByPk(req.body.serieId).then((serie) => {
            Serie.update(
              {
                hasArtworkRelated: false,
              },
              {
                where: {
                  id: req.body.serieId,
                },
              }
            );
          });
        }
      });
      res.sendStatus(201);
    })
    .catch((err) => res.send(err));
});
router.post("/client/consult", function (req, res) {
  transporter.sendMail(createEmailOptions(req.body), function (error, info) {
    if (error) {
      //ATAJA POSIBLES ERRORES
      console.log("ERROR!!!!!!", error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});

module.exports = router;
