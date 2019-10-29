var express = require("express");
var cheerio = require("cheerio");
var axios = require("axios");
var db = require("../models");
var mongoose = require("mongoose"); 
var connection = require("../config/connection");


var router = express.Router();
router.get('/', function (req, res) {
    res.render('index');
});

router.get('/saved', function (req, res) {
    res.render('saved');
});
module.exports = router;