var express = require('express') // import express package
var app = express() //creates object for express module
app.get('/',(req,res)=>{ //request method
    res.send('Hello World') // response method
})
var server = app.listen(4000,function(){ //listen to port number
    console.log('Server is up and running')
})