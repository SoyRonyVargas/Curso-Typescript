"use strict";
(function () {
    var addNumber = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola ".concat(name); };
    var sayHello = function () { return "Hello toast"; };
    // let myFunction : ( a : number , b : number ) => number;
    var myFunction;
    // myFunction = 10
    // console.log({ myFunction });
    myFunction = addNumber;
    myFunction(1, 2);
    myFunction = greet;
    myFunction('Mario');
    myFunction = sayHello;
    console.log({ myFunction: myFunction });
})();
