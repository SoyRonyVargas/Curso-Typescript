"use strict";
(function () {
    var Avenger = /** @class */ (function () {
        // static getAvg(){
        //     return this.name
        // }
        function Avenger(name, team) {
            this.name = name;
            this.team = team;
        }
        Avenger.prototype.bio = function () {
            return "";
        };
        Avenger.avgAge = 15;
        return Avenger;
    }());
    var antman = new Avenger('Prueba', 'sexo');
    console.log(antman);
    // console.log(Avenger.getAvg());
})();
