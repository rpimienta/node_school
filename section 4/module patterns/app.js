var greet1 = require('./greet1');
greet1();
var greet2 = require('./greet2'); //or  require('./greet2').greet;
greet2.greet();// or greet2();   

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Changed hello world!';

var greet3b = require('./greet3');
greet3b.greet();

var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();

var reveal = require('./reveal-pattern');
reveal.greeting();