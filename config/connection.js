var mongoose = require("mongoose");

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/newsaccrue";

var connection = mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true});

exports = connection;