const express = require('express');
var bodyparser=require('body-parser');
const app = express();
app.get('/',function(req, res)
{
res.render('form');
});
//create view
app.set('view engine', 'pug');
app.set('views','./views')
//parsing
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.post('/', function(req, res)
{
console.log(req.body);
res.send("Received request");
})
const port = 8000;

app.listen(port, () => {
    console.log('Server is up and running on port 8000');
});
