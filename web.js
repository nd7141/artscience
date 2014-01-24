var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.logger());

var htmlFile = './public/index.html';

app.use(express.static(__dirname+'/public'));

app.get('/', function(req,res){
	var html = fs.readFileSync(htmlFile).toString();
	res.send(html);
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log("Listening on " + port);
})