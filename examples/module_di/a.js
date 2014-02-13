var os = require('os');
//var os = {hostname: function () { return 'Texas Instruments TI-66 PROGRAMMABLE'; }};

var b = require('./b')(os);
b.sayHello();
