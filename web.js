var express = require('express');
var fs = require('fs');
var path = require('path');
var app = express();

app.use(express.logger());

var htmlFile = './index.html';

app.use(express.static(path.join(__dirname, './assets/')));

app.get('/', function(req,res){
	var html = fs.readFileSync(htmlFile).toString();
	res.send(html);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
	console.log("Listening on " + port);
})