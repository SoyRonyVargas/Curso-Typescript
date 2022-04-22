"use strict";
(function () {
    var fullName = function (firstname, subname) { return "".concat(firstname, " - ").concat(subname); };
    var name = fullName('Tony', 1);
    console.log({ name: name });
})();
