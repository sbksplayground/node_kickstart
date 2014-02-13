var first = 'Hello';
var second = 'World!';

function welcome() {
	console.log(first + ' ' + second);
}

setTimeout(welcome, 2000); // execute in two seconds

first = 'Hell';
second = 'No!';

// will outpu 'Hell No!'

