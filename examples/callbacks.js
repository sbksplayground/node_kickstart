var fs = require('fs');

fs.readdir('./', function (err, files) {
	if (err) {
		console.error(err);
		return;
	}

	console.log(files);
});
