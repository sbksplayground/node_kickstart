// example of how it should  look
// TODO: cleanup function passes to named functions

var fs = require('fs');
var path = require('path');
var async = require('async');

function listDir(dirname, done) {
	async.waterfall([
			function (cb) { fs.stat(dirname, cb); },

			function (stats, cb) {
				if (!stats.isDirectory()) {
					cb('not a directory');
				}

				cb(null, dirname);
			},

			function (dirname, cb) {
				fs.readdir(dirname, function (err, files) {
					cb(err, dirname, files);
				});
			},

			function (dirname, files, cb) {
				async.map(files,
					function (file, cb) {
						var filepath = path.join(dirname, file);
						fs.stat(filepath, function (err, stats) {
							if (err) { return cb(err); }
							cb(null, [filepath, stats.isDirectory() ? 'dir' : 'file']);
						});
					},
					function (err, results) {
						if (err) {
							return cb(err);
						}

						var o = {};
						results.forEach(function (info) { o[info[0]] = info[1]; });
						return cb(null, o);
					}
				);
			}
		], function (err, results) {
			done.apply(null, [err].concat(results));
		}
	);
}


listDir(__dirname, function (err, files) {
	if (err) {
		console.log('errors:\n', err);
	}
	console.log('listing:\n',files);
});

