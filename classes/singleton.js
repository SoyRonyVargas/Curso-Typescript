"use strict";
(function () {
    var Mutant = /** @class */ (function () {
        function Mutant(name, real_name) {
            this.name = name;
            this.real_name = real_name;
        }
        Mutant.getInstance = function () {
            if (!Mutant.instance) {
                Mutant.instance = new Mutant('Wolverine', 'Logan');
            }
            return Mutant.instance;
        };
        return Mutant;
    }());
    var X = /** @class */ (function () {
        function X() {
        }
        return X;
    }());
    var mutant1 = Mutant.getInstance();
    var mutant2 = Mutant.getInstance();
    var mutant3 = Mutant.getInstance();
    var x1 = new X();
    var x2 = new X();
    var x3 = new X();
    console.log(mutant1);
    console.log(mutant2);
    console.log(mutant1 === mutant2);
    console.log(mutant2 === mutant3);
    console.log(mutant3 === mutant1);
    console.log(x1 === x2);
    console.log(x2 === x3);
    console.log(x3 === x1);
})();
