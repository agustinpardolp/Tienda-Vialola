const express = require("express");
const router = express.Router();
const User = require("../../db/index").User;
const passport = require("../../config/passport");
const About = require("../../db/models").About;
router.post(
  "/accounts/login/",
  passport.authenticate("local"),
  function (req, res) {
    res.send(req.user);
  }
);
router.get("/accounts/logged/", function (req, res, next) {
  res.send(req.user);
});
router.get("/about", function (req, res) {
  About.findByPk(1).then((data) => res.send(data));
});
router.put("/about", () => {
  About.findOne().then((res) =>
    About.update({
      info: req.body.info,
    }).then((resp) => {
      res.sendStatus(201);
    })
  );
});
router.get("/accounts/logout/", function (req, res, next) {
  req.logout();
  res.sendStatus(201);
});

module.exports = router;
