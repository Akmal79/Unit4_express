const express = require('express');
const fileupload = require('express-fileupload');
const fs = require('fs');

const app = express();

app.use(fileupload());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/indexb.html');
});



app.post('/uploads', (req, res) => 
{
    if (req.files)
        console.log(req.files);
    var file = req.files.myfile;
    var filename = file.name;
    console.log(filename);
    file.mv(__dirname + '/uploads/' + filename, function (err) {
        if (err) {
            res.send(err)
        }
        else 
        {
            res.send("File:" + file.name + "uploaded!!");
        }
    });

})

    const port = 8000;
    app.listen(port, () => {
        console.log("Server is up and running on port ${port}");
    });