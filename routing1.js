var express = require('express');
var app = express();

// GET route for '/hello'
app.get('/hello', function(req, res) {
    res.send('Hello from the server');
});

// POST route for '/'
app.post('/', function(req, res, next) {
    console.log('You called post method at /hello');
    // If you intend to use middleware, call 'next()' here
});

var server = app.listen(4000, function() {
    console.log('Server is up and running');
});
