var express = require('express')
var app = express()
app.get("/student/:id",function(req, res,next){
    if (req.params.id.indexOf(2000)!=-1){
        var err = new Error("Something went wrong")
        next(err)
    }
    else{
        res.send("Student found: "+req.params.id)
    }

})

var server = app.listen(5000,function(){ //listen to port number
    console.log('Server is up and running')
})