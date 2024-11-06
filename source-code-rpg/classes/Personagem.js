"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
var utils_1 = require("../utils/utils");
var cores_1 = require("../colors/cores");
var Personagem = /** @class */ (function () {
    // Construtor
    function Personagem(nome, vida, ataque, defesa) {
        this._nome = nome;
        this._vida = vida;
        this._ataque = ataque;
        this._defesa = defesa;
    }
    // Método que simula um dado d100 de rpg e retorna a força do ataque com base no resultado da variável 'potência' 
    Personagem.prototype.calcularPorcentagemDano = function (potencia, dano) {
        if (potencia <= 20) {
            return dano * 0.7;
        }
        else if (potencia <= 80) {
            return dano;
        }
        else {
            return dano * 1.7;
        }
    };
    // Método chamado dentro do método 'atacar', responsável por decrementar a vida do alvo atacado
    Personagem.prototype.receberDano = function (dano) {
        this._vida -= dano;
    };
    // Similar ao método 'calcularPorcentagemDano', porém retorna uma mensagem com base na potência do ataque
    Personagem.prototype.retornarPotenciaAtaque = function (potencia) {
        if (potencia <= 20) {
            return "".concat(cores_1.cores.vermelhoNegrito, "FRACO").concat(cores_1.cores.reset);
        }
        else if (potencia <= 80) {
            return "".concat(cores_1.cores.azulNegrito, "NORMAL").concat(cores_1.cores.reset);
        }
        else {
            return "".concat(cores_1.cores.amareloNegrito, "CR\u00CDTICO").concat(cores_1.cores.reset);
        }
    };
    // Método responsável por executar a lógica e cálculo do dano do ataque básico de todas as classes
    Personagem.prototype.atacar = function (alvo) {
        var dano = this.ataque;
        var potencia = (0, utils_1.randomInt)(1, 100);
        var danoReal = this.calcularPorcentagemDano(potencia, dano);
        var danoComDefesa = danoReal - (danoReal * (alvo.defesa / 100));
        (0, utils_1.print)("".concat(this.nome, " Usou um Ataque De Dano ").concat(this.retornarPotenciaAtaque(potencia), " \u00E0 ").concat(alvo.nome, " e Causou ").concat(danoComDefesa.toFixed(2), " de Dano."));
        alvo.receberDano(danoComDefesa);
    };
    // Método alternativo para chamar o método 'atacar' fora da classe
    Personagem.prototype.ataqueBasico = function (alvo) {
        this.atacar(alvo);
    };
    // Método que verifica se o jogador está vivo
    Personagem.prototype.estaVivo = function () {
        return this.vida > 0;
    };
    Object.defineProperty(Personagem.prototype, "nome", {
        // Getters e setters
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personagem.prototype, "vida", {
        get: function () {
            return this._vida;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personagem.prototype, "ataque", {
        get: function () {
            return this._ataque;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personagem.prototype, "defesa", {
        get: function () {
            return this._defesa;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personagem.prototype, "classeNome", {
        get: function () {
            return "ClasseNome";
        },
        enumerable: false,
        configurable: true
    });
    return Personagem;
}());
exports.Personagem = Personagem;
