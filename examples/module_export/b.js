var os = require('os');

module.exports.sayHello = function () {
	console.log('Hello you on ' + os.hostname());
}

if (!module.parent) {
	console.log('running module_b directly');
}
