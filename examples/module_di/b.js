var _os = null;

sayHello = function () {
	console.log('Hello you on ' + _os.hostname());
}

module.exports = function (os) {
	_os = os;

	return {sayHello: sayHello};
}

