var express = require('express');
var exphbs  = require('express-handlebars');

var PORT = 3010;
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

var routes = require("./controllers/htmlController");
app.use(routes);
 
app.listen(PORT, function(){
    console.log("App running on port " + PORT + "!");
});