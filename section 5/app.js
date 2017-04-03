// var Emitter = require('./emitter');
var Emitter = require('events');
var eventConfig = require('./config').events;

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function () {
    console.log('somewhere, someone said hello');
});

emtr.on('greet', function () {
    console.log('A greeting ocurred');
});

console.log('Hello');
emtr.emit(eventConfig.GREET);

