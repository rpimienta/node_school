var EventEmitter = require('events');
var util = require('util');

function Greetr () {
    this.greeting = "Hello World";
}; 

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function (data) {
     console.log(this.greeting+ ": " + data);
     this.emit('greet', data);
 }

 var greetr1 = new Greetr();

 greetr1.on('greet', function (data) {
     console.log('Someone greets!: '+ data);
 });

 greetr1.greet('Ricardo');

