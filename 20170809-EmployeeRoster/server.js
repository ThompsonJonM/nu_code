//Dependencies
var express = require('express');
var exphbs = require('express-handlebars');

var PORT = 3000;

var app = express();

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(PORT, function() {
    console.log('Listening in on port: ' + PORT);
});