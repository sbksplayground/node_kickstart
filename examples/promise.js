var Promise = require('promise');

function tryLuck() {
	var future = new Promise(function (resolve, reject) {
		setTimeout(function () {
			if (Date.now() % 2) resolve('Luck!');
			else reject('Ha! Ha! Out of luck.')
		}, 1000);
	});

	return future;
}

var result = tryLuck();
result.then(
	function (msg) { console.log('just received: ' + msg); },
	function (err) { console.log('error: ' + err); }
);
