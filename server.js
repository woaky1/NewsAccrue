var express = require('express');
var exphbs  = require('express-handlebars');
var logger = require("morgan");

var PORT = 3010;
var app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const htmlRoutes = require("./controllers/htmlController");
const apiRoutes = require("./controllers/apiController");
app.use(htmlRoutes);
app.use(apiRoutes);
 
app.listen(PORT, function(){
    console.log("App running on port " + PORT + "!");
});