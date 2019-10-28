var express = require('express');
var exphbs  = require('express-handlebars');
var mongoose = require("mongoose");
 
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

var routes = require("./controllers/htmlController");
app.use(routes);

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/newsaccrue";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true});
 
app.listen(3010);