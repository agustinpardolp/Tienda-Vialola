const express = require("express");
const router = express.Router();
const User = require("../../db/index").User;
const passport = require("../../config/passport");

router.post("/login", passport.authenticate("local"), function (req, res) {
  res.send(req.user);
});
router.get("/logged", function (req, res, next) {
  res.send(req.user);
});

module.exports = router;
