"use strict";
(function () {
    var hero = 'Flash';
    function returnHero() {
        return hero;
    }
    var activateSignal = function () { return hero; };
    console.log(typeof activateSignal);
})();
