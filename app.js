// using node server with express framework for creating basic app.
var express = require('express');
var app = express();

var port = process.env.PORT || 3000; // defining port value at server. 
app.listen(port, function (err) {
    console.log("Running server on Port " + port);
});

// creating static application 
app.use(express.static('public'));
app.use(express.static('views'));
