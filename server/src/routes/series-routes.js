const express = require("express");
const router = express.Router();
const Category = require("../../db/models/index").Category;
const Serie = require("../../db/models/").Serie;
const Artwork = require("../../db/models/index").Artwork;
const MulterFn = require("../utils").multerFn;

router.get("/", function (req, res) {
  if (req.query.category) {
    Category.findOne({
      where: {
        name: req.query.category,
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
              attributes: ["name"],
            },
          ],
        })
          .then((seriesList) => {
            return res.send(seriesList);
          })
          .catch((err) => {
            res.sendStatus(404);
          });
      })
      .catch((err) => {
        res.status(404).send("No se contro la categoía");
      });
  } else {
    Serie.findAll({
      include: [
        {
          model: Category,
          as: "category",
          attributes: ["name"],
        },
      ],
    })
      .then((seriesList) => {
        return res.send(seriesList);
      })
      .catch((err) => {
        res.sendStatus(404);
      });
  }
});

router.get("/:category/", function (req, res) {
  Category.findOne({
    where: {
      name: req.params.category,
    },
  })
    .then((category) => {
      category;
      Serie.findAll({
        where: {
          categoryId: category.id,
        },
        include: [
          {
            model: Category,
            as: "category",
            attributes: ["name"],
          },
        ],
      })
        .then((seriesList) => {
          return res.send(seriesList);
        })
        .catch((err) => {
          res.status(404).send("No se encontro la serie");
        });
    })
    .catch((err) => {
      res.status(404).send("No se encontro la categoría");
    });
});

router.put("/", MulterFn.single("img"), function (req, res) {
  Serie.update(
    {
      name: req.body.name,
      img: req.file ? req.file.filename : req.body.img,
      categoryId: req.body.categoryId,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  )
    .then((resp) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      res.status(404).send("Ocurrio un error al actualizar la serie");
    });
});

router.post("/", MulterFn.single("img"), function (req, res) {
  Serie.create({
    name: req.body.name,
    img: req.file.filename,
    categoryId: req.body.categoryId,
  })
    .then((resp) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      res.status(404).send("Ocurrio un error al crear la serie");
    });
});

router.delete("/:id", function (req, res) {
  Artwork.findAll({
    where: {
      serieId: req.params.id,
    },
  }).then((artworkList) => {
    if (artworkList.length) {
      res
        .status(404)
        .send("No es posible eliminar una Serie con obras asociadas");
    } else {
      Serie.destroy({
        where: {
          id: req.params.id,
        },
      })
        .then((resp) => {
          res.sendStatus(201);
        })
        .catch((err) => {
          res.status(404).send("Ocurrio un error al eliminar la serie");
        });
    }
  });
});

module.exports = router;
