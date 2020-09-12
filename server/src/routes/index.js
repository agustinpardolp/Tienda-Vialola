const express = require("express");
const router = express.Router()
const productRoutes = require("./product-routes")
const userRoutes = require("./user-routes")
const seriesRoutes = require("./series-routes")
const artworkRoutes = require("./artwork-routes")
// const orderRoutes = require("./order-routes")
// const purchaseRoutes = require("./purchase.routes")


router.use("/products",productRoutes)
router.use("/artworks", artworkRoutes)
router.use("/users",userRoutes)
router.use("/series",seriesRoutes)
// router.use("/purchases",purchaseRoutes)
// router.use("/orders",orderRoutes)

module.exports = router;