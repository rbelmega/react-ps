// Load required packages
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


// Create our Express application
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

// Use the body-parser package in our application
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));



var routes = require('./server/routes/index')();
app.use('/', routes);

module.exports = app;