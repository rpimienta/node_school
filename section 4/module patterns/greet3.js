function Greetr () {
    this.greeting = "Hello World - greet 3";
    this.greet = function () {
        console.log(this.greeting);
    }
}

module.exports = new Greetr();

