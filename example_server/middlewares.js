var express = require('express');

var app = express();

app.use(function (req, res, next) {
	req.whatToSay = req.query.say || 'Guten Tag!';
	next();
});

app.get('/hello', function (req, res) {
		res.send(req.whatToSay);
});

app.listen(8000, function () {
	var ip = this.address();
	console.log('HTTP server listening on ' + ip.address + ':' + ip.port);
});
