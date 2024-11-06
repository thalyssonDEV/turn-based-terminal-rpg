"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonagemFactory = void 0;
var Mago_1 = require("../sub_classes/Mago");
var Guerreiro_1 = require("../sub_classes/Guerreiro");
var Arqueiro_1 = require("../sub_classes/Arqueiro");
var utils_1 = require("../utils/utils");
// Classe responsável por instanciar apenas as classes escolhidaas pelos jogadores, essa instância é feita na 'main()' com o método estático 'CriarPersonagem'
var PersonagemFactory = /** @class */ (function () {
    function PersonagemFactory() {
    }
    PersonagemFactory.mostrarClasses = function () {
        (0, utils_1.print)("\nEscolha Uma Classe De Personagem");
        (0, utils_1.print)("1. Mago");
        (0, utils_1.print)("2. Guerreiro");
        (0, utils_1.print)("3. Arqueiro");
    };
    PersonagemFactory.criarPersonagem = function (classe, nome) {
        switch (classe) {
            case 1:
                return new Mago_1.Mago(nome);
            case 2:
                return new Guerreiro_1.Guerreiro(nome);
            case 3:
                return new Arqueiro_1.Arqueiro(nome);
            default:
                (0, utils_1.print)('Classe Inválida! Usando Guerreiro Como Padrão.');
                return new Guerreiro_1.Guerreiro(nome);
        }
    };
    return PersonagemFactory;
}());
exports.PersonagemFactory = PersonagemFactory;
