'use strict';
var Greetr = require('./greetr');

 var greetr1 = new Greetr();

 greetr1.on('greet', function (data) {
     console.log('Someone is greeting!: '+ data);
 });

 greetr1.greet('Ricardo');

