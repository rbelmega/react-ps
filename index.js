var express = require('express');
var app = express();
var path = require("path");
var alive = require("./heroku-alive");

app.use('/', express.static('public'));

var renderIndex = (req, res) => {
	res.sendFile(path.resolve(__dirname, 'public/index.html'));
};

app.get('/*', renderIndex);
app.listen(process.env.PORT || 5000);