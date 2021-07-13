const express = require("express");
const router = express.Router();
const userRoutes = require("./user-routes");
const seriesRoutes = require("./series-routes");
const artworkRoutes = require("./artwork-routes");
const categoriesRoutes = require("./category-routes");

router.use("/artworks", artworkRoutes);
router.use("/users", userRoutes);
router.use("/series", seriesRoutes);
router.use("/categories", categoriesRoutes);

module.exports = router;
