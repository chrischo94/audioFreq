const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  passport = require("passport"),
  logger = require("morgan"),
  apiRoutes = require("./routes"),
  PORT = process.env.PORT || 3001;
require("dotenv").config();

const session = require('express-session');
const path = require('path');
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')(
  {
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
  }));

//Define Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(logger("dev"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(apiRoutes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/podCastDB", { useNewUrlParser: true });

app.listen(PORT, () => console.log(`The server has started on PORT: ${PORT}`));


