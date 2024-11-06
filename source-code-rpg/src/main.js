"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mago_1 = require("../sub_classes/Mago");
var cores_1 = require("../colors/cores");
var PersonagemFactory_1 = require("../classes/PersonagemFactory");
var utils_1 = require("../utils/utils");
// Função temporária que visa mostrar as informações dos atributos dos jogadores
function mostrarEstatisticas(jogador1, jogador2) {
    (0, utils_1.print)("".concat(cores_1.cores.vermelhoBrilhanteNegrito, "================ FIGHT ================").concat(cores_1.cores.reset, "\n"));
    (0, utils_1.print)(" ||".concat(cores_1.cores.amareloBrilhanteNegrito).concat(jogador1.nome, ": ").concat(cores_1.cores.verdeBrilhanteNegrito).concat(jogador1.classeNome).concat(cores_1.cores.reset, "\n ||"));
    (0, utils_1.print)(" ||".concat(cores_1.cores.vermelhoBrilhanteNegrito, "ATAQUE:").concat(cores_1.cores.reset, " ").concat(jogador1.ataque));
    (0, utils_1.print)(" ||".concat(cores_1.cores.verdeBrilhanteNegrito, "VIDA:").concat(cores_1.cores.reset, " ").concat(jogador1.vida.toFixed(1)));
    (0, utils_1.print)(" ||".concat(cores_1.cores.cianoBrilhanteNegrito, "DEFESA:").concat(cores_1.cores.reset, " ").concat(jogador1.defesa, "\n\n"));
    (0, utils_1.print)(" ||".concat(cores_1.cores.amareloBrilhanteNegrito).concat(jogador2.nome, ": ").concat(cores_1.cores.verdeBrilhanteNegrito).concat(jogador2.classeNome).concat(cores_1.cores.reset, "\n ||"));
    (0, utils_1.print)(" ||".concat(cores_1.cores.vermelhoBrilhanteNegrito, "ATAQUE:").concat(cores_1.cores.reset, " ").concat(jogador2.ataque));
    (0, utils_1.print)(" ||".concat(cores_1.cores.verdeBrilhanteNegrito, "VIDA:").concat(cores_1.cores.reset, " ").concat(jogador2.vida.toFixed(1)));
    (0, utils_1.print)(" ||".concat(cores_1.cores.cianoBrilhanteNegrito, "DEFESA:").concat(cores_1.cores.reset, " ").concat(jogador2.defesa));
    (0, utils_1.print)("\n");
}
function main() {
    (0, utils_1.clear)();
    var nomeJogador1 = (0, utils_1.input)("Nickname Jogador 1: ");
    PersonagemFactory_1.PersonagemFactory.mostrarClasses();
    var classeJogador1 = Number((0, utils_1.input)("Escolha a Classe Para ".concat(nomeJogador1, ": ")));
    var jogador1 = PersonagemFactory_1.PersonagemFactory.criarPersonagem(classeJogador1, nomeJogador1);
    (0, utils_1.clear)();
    var nomeJogador2 = (0, utils_1.input)("Nickname Jogador 2: ");
    PersonagemFactory_1.PersonagemFactory.mostrarClasses();
    var classeJogador2 = Number((0, utils_1.input)("Escolha a Classe Para ".concat(nomeJogador2, ": ")));
    var jogador2 = PersonagemFactory_1.PersonagemFactory.criarPersonagem(classeJogador2, nomeJogador2);
    (0, utils_1.clear)();
    (0, utils_1.print)("".concat(cores_1.cores.azulBrilhante, "============== RPG-GAME ===============").concat(cores_1.cores.reset, "\n"));
    (0, utils_1.print)("Jogador 1: ".concat(cores_1.cores.amareloBrilhanteNegrito).concat(jogador1.nome).concat(cores_1.cores.reset, " \n    Escolheu a Classe ").concat(cores_1.cores.verdeBrilhanteNegrito).concat(jogador1.classeNome).concat(cores_1.cores.reset));
    (0, utils_1.print)("Jogador 2: ".concat(cores_1.cores.amareloBrilhanteNegrito).concat(jogador2.nome).concat(cores_1.cores.reset, " \n    Escolheu a Classe ").concat(cores_1.cores.verdeBrilhanteNegrito).concat(jogador2.classeNome).concat(cores_1.cores.reset));
    (0, utils_1.awaitInput)();
    while (jogador1.estaVivo() && jogador2.estaVivo()) {
        mostrarEstatisticas(jogador1, jogador2);
        if (jogador1 instanceof Mago_1.Mago) {
            jogador1.fireball(jogador2);
        }
        (0, utils_1.awaitInputMessage)("Pressione ENTER para Finalizar o Turno...");
        (0, utils_1.clear)();
        if (jogador2.estaVivo()) {
            mostrarEstatisticas(jogador1, jogador2);
            jogador2.atacar(jogador1);
            (0, utils_1.awaitInputMessage)("Pressione ENTER para Finalizar o Turno...");
            (0, utils_1.clear)();
        }
    }
}
main();
