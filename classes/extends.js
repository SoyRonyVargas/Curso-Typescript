"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    var Avenger = /** @class */ (function () {
        function Avenger(name, real_name) {
            this.name = name;
            this.real_name = real_name;
            console.log('avenger llamado');
        }
        Avenger.prototype.getFullName = function () {
            return this.name.concat(' ', this.real_name);
        };
        return Avenger;
    }());
    var Xmen = /** @class */ (function (_super) {
        __extends(Xmen, _super);
        function Xmen(name, real_name, isMutant) {
            var _this = _super.call(this, name, real_name) || this;
            _this.isMutant = isMutant;
            return _this;
        }
        Xmen.prototype.getNameDesdeXmen = function () {
            return _super.prototype.getFullName.call(this);
        };
        Object.defineProperty(Xmen.prototype, "fullName", {
            get: function () {
                return "".concat(this.name, " - ").concat(this.real_name);
            },
            set: function (name) {
                this.name = name;
            },
            enumerable: false,
            configurable: true
        });
        return Xmen;
    }(Avenger));
    var wolverine = new Xmen('Wolverine', 'Logan', true);
    console.log(wolverine);
    console.log(wolverine.fullName);
})();
