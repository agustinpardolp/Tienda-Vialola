const express = require("express");
const router = express.Router();
const Slider = require("../../db/models/index").Slider;
const MulterFn = require("../utils");

router.get("/", function (req, res) {
  Slider.findAll().then((sliderList) => {
    return res.send(sliderList);
  });
});

router.put("/", MulterFn.single("img"), function (req, res) {
  Slider.update(
    {
      title: req.body.name,
      img: req.file ? req.file.filename : req.body.img,
      description: req.body.description,
      pathnme: req.body.pathnme,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  ).then((resp) => {
    console.log("ress", res);
    res.sendStatus(201);
  });
});

router.delete("/:id", function (req, res) {
  Slider.findAll().then((sliderList) => {
    if (sliderList.length === 1) {
      res.status(404).send("No se puede borrar. Debe dejar al menos 1 slide");
    } else {
      Slider.destroy({
        where: {
          id: req.params.id,
        },
      })
        .then((resp) => {
          res.sendStatus(201);
        })
        .catch((err) => res.send(err));
    }
  });
});

module.exports = router;
