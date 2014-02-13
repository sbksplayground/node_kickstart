// example of how you never should write async code

var fs = require('fs');
var path = require('path');

function listDir(dirname, cb) {
	fs.stat(dirname, function (err, stats) {
		if (err) {
			return cb(err);
		}

		if (!stats.isDirectory()) {
			return cb('not a directory');
		}

		fs.readdir(dirname, function (err, files) {
			if (err) {
				return cb(err);
			}

			files.forEach(function (file) {
				var filepath = path.join(dirname, file);
				var result = {};
				var errors = {};
				var i = 0;

				fs.stat(filepath, function (err, stats) {
					i++;
					if (err) {
						return errors[file] = err;
					}

					result[file] = stats.isDirectory() ? 'dir' : 'file';

					if (i === files.length - 1) {
						cb(errors.length ? errors : null, result);
					}
				});
			});
		});
	});
}

listDir(__dirname, function (err, files) {
	if (err) {
		console.log('errors:\n', err);
	}
	console.log('listing:\n',files);
});

