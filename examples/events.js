var events = require('events');

function Timer(tickInterval) {
	events.EventEmitter.call(this);
	var tickCnt = 0;
	var tick = (function () { this.emit('tick', ++tickCnt); }).bind(this);
	this.interval = setInterval(tick, tickInterval);
}

Timer.prototype = new events.EventEmitter;
Timer.prototype.stop = function () {
	clearInterval(this.interval);
}

var timer = new Timer(300);
timer.on('tick', function (tickNum) {
	console.log(tickNum);
	if (tickNum === 10) {
		timer.stop();
		console.log('Stop, Hammer time!');
	}
});

