var express = require('express');

var app = express();

app.get('/hello', function (req, res) {
		res.send('world');
});

app.listen(8000, function () {
	var ip = this.address();
	console.log('HTTP server listening on ' + ip.address + ':' + ip.port);
});
