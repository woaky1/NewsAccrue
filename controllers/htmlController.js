var express = require("express");
var cheerio = require("cheerio");
var axios = require("axios");


var router = express.Router();

router.get('/', function (req, res) {
     axios.get("https://www.polygon.com").then(function(response) {
    console.log(response);
    
    // Load the Response into cheerio and save it to a variable
    // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
    var $ = cheerio.load(response.data);

    // An empty array to save the data that we'll scrape
    var results = [];

    // With cheerio, find each p-tag with the "title" class
    // (i: iterator. element: the current element)
    $("p.title").each(function(i, element) {

        // Save the text of the element in a "title" variable
        var title = $(element).text();

        // In the currently selected element, look at its child elements (i.e., its a-tags),
        // then save the values for any "href" attributes that the child elements may have
        var link = $(element).children().attr("href");

        // Save these results in an object that we'll push into the results array we defined earlier
        results.push({
        title: title,
        link: link
        });
    });

    // Log the results once you've looped through each of the elements found with cheerio
    console.log(results);
    });
    res.render('index');
});

router.get('/saved', function (req, res) {
    res.render('saved');
});
module.exports = router;