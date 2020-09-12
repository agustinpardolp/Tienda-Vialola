const express = require("express");
const router = express.Router();
const Product = require("../../db/models/").Product;
const Section = require("../../db/models/").Section;

router.get("/:id", function(req, res) {
    Product.findOne({
        where: {
            id: req.params.id,
        },
        include: [{
            model: Section,
            as: "section",
            attributes: ["name"],
        }, ],
    }).then((product) => {
        return res.send(product);
    });
});

router.get("/:section/all", function(req, res) {
    Section.findOne({
        where: {
            name: req.params.section,
        },
    }).then((section) => {
        Product.findAll({
            where: {
                sectionId: section.id,
            },
            include: [{
                model: Section,
                as: "section",
                attributes: ["name"],
            }, ],
        }).then((productList) => {
            return res.send(productList);
        });
    });
});

module.exports = router;