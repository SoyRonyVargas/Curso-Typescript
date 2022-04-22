"use strict";
(function () {
    var fullName = function (firstname, subname) { return "".concat(firstname, " - ").concat(subname || 'NO NAME'); };
    var name = fullName('Tony');
    console.log({ name: name });
})();
