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
exports.Mago = void 0;
var utils_1 = require("../utils/utils");
var Personagem_1 = require("../classes/Personagem");
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    // Inicializa o constrtutor da super classe 'Personagem' e posteriomente inicializa os atributos da própria classe
    function Mago(nome) {
        var _this = _super.call(this, nome, 1000, 350, 5) || this;
        _this.danoFireball = 500;
        return _this;
    }
    // Métodos - Habilidades
    // Fireball
    Mago.prototype.fireball = function (alvo) {
        var potencia = (0, utils_1.randomInt)(1, 100);
        var danoRealFireball = this.calcularPorcentagemDano(potencia, this.danoFireball);
        var danoFireballComDefesa = danoRealFireball - (danoRealFireball * (alvo.defesa / 100));
        alvo.receberDano(danoFireballComDefesa);
        console.log("".concat(this.nome, " lan\u00E7ou Fireball em ").concat(alvo.nome, " causando ").concat(danoFireballComDefesa, " de dano."));
    };
    Object.defineProperty(Mago.prototype, "classeNome", {
        // Getters e Setters
        get: function () {
            return "Mago";
        },
        enumerable: false,
        configurable: true
    });
    return Mago;
}(Personagem_1.Personagem));
exports.Mago = Mago;
