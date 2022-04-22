"use strict";
(function () {
    var getNever = function () {
        throw new Error('Error');
    };
    var bucle = function () {
        while (true) {
            console.log('siempre');
        }
    };
    getNever();
    bucle();
})();
