var express = require("express");
var cheerio = require("cheerio");
var axios = require("axios");
var db = require("../models");
var mongoose = require("mongoose"); 
var connection = require("../config/connection");

var router = express.Router();
router.get('/api')

axios.get("https://www.polygon.com").then(function(response) {
    
    // Load the Response into cheerio and save it to a variable
    // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
    var $ = cheerio.load(response.data);

    // With cheerio, find each p-tag with the "title" class
    // (i: iterator. element: the current element)
    $("h2.c-entry-box--compact__title").each(function(i, element) {
        var result = {};
        result.articleTitle = $(this).text();
        result.articleLink = $(this).children("a").attr("href");
        
        // Save these results in an object that we'll push into the results array we defined earlier

        db.Article.create(result)
        .then(function(dbArticle) {
          // View the added result in the console
          console.log(dbArticle);
        })
        .catch(function(err) {
          // If an error occurred, log it
          console.log(err);
        });
    });

    // Log the results once you've looped through each of the elements found with cheerio
    console.log(results);
    });

    module.exports = router;
// db.Article.find({articleSaved: false}, function(error,found){
//     if (error) {
//       console.log(error);
//     } else {
//       res.json(found);
//     }