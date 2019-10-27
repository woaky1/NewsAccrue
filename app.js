var express = require('express');
var exphbs  = require('express-handlebars');
 
var app = express();
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

var routes = require("./controllers/htmlController");
app.use(routes);
 
app.listen(3010);