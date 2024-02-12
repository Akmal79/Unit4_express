var express = require('express');
var app = express();

// First middleware
app.use(function(req, res, next) {
    console.log('First mw');
    next();
});

// Second middleware for the root path '/'
app.use('/', function(req, res, next) {
    console.log('Second mw');
    next();
});

// Route handler for the root path '/'
app.get('/', function(req, res) {
    console.log('Route MW');
    res.send("Welcome to MW");
    // Do not call next() here after sending the response
});

// Last middleware for the root path '/'
app.use('/', function(req, res, next) {
    console.log('Last mw');
    next();
});

var server = app.listen(3000, function() {
    console.log('Server is up and running');
});
