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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arqueiro = void 0;
var Personagem_1 = require("../classes/Personagem");
var Arqueiro = /** @class */ (function (_super) {
    __extends(Arqueiro, _super);
    function Arqueiro(nome) {
        return _super.call(this, nome, 1500, 250, 10) || this;
    }
    Object.defineProperty(Arqueiro.prototype, "classeNome", {
        get: function () {
            return "Arqueiro";
        },
        enumerable: false,
        configurable: true
    });
    return Arqueiro;
}(Personagem_1.Personagem));
exports.Arqueiro = Arqueiro;
