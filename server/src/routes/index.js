const express = require("express");
const router = express.Router()
const productRoutes = require("./product-routes")
const userRoutes = require("./user-routes")
// const orderRoutes = require("./order-routes")
// const purchaseRoutes = require("./purchase.routes")


router.use("/products",productRoutes)
router.use("/users",userRoutes)
// router.use("/purchases",purchaseRoutes)
// router.use("/orders",orderRoutes)

module.exports = router;