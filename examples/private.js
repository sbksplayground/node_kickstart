var first = '';
var second = '';

var welcome = (function () {
	var first = 'Hello';
	var second = 'World!'; // try to remove var ;)

	return function () {
		console.log(first + ' ' + second);
	}
})();

first = 'Hell';
second = 'No!';

setTimeout(welcome, 2000);

// will properly output "Hello World!"

