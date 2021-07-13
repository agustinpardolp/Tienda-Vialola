const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const db = require("./db/index");
const session = require("express-session");
const passport = require("./config/passport");
const routes = require ("./src/routes/index")
const app = express();

//middleware
//Midlewares de parseo para data del body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())

//Passport middleware
app.use('/images', express.static(path.join(__dirname, '/client/fileuploads')));
app.use(session({ secret: "vialola", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use("/vialola-api", routes);
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Internal server error');
});

//levanto y sincronizo la base, luego si todo ok, levanto servidor
db.sync({ force: false}).then(() => {
    app.listen(3200);
    console.log("Server available at http://localhost:3200");
  }); 
