const path = require('path');

const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./routes');

const cookieParser = require("cookie-parser");
const MongoStore = require("connect-mongo")(session);

const logger = require("morgan"); 
const mongoose = require('mongoose');

const db = require("./models"); 

app.use(logger("dev")); 

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/podCastDB", { useNewUrlParser: true });

db.Library.create({ name: "Podcast Library" })
  .then(dbLibrary => {
    console.log(dbLibrary);
  })
  .catch(({message}) => {
    console.log(message);
  });

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({});


app.use(cookieParser());
app.use(session({
    secret: 'my-secret',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: db })
}));

//conect mongo db

//TODO check to see if stays 
app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Use apiRoutes
app.use("/api", apiRoutes);


//Define Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//TODO check to see if stays 
app.use(routes);

app.listen(PORT, ()=> {
  console.log(`App running on port ${PORT}!`); 
}); 
