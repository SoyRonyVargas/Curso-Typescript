"use strict";
(function () {
    var flash;
    flash = {
        age: 10,
        name: 'Barry Alen',
        powers: [],
        getName: function () {
            return this.name;
        }
    };
    console.log(flash.getName("s"));
    // console.log(flash?.getName!());
})();
