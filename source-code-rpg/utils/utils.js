"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.print = print;
exports.clear = clear;
exports.randomInt = randomInt;
exports.awaitInput = awaitInput;
exports.awaitInputMessage = awaitInputMessage;
exports.input = input;
exports.printSlow = printSlow;
var readline_sync_1 = require("readline-sync");
var cores_1 = require("../colors/cores");
function print() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log.apply(console, args);
}
function clear() {
    console.clear();
}
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function awaitInput() {
    (0, readline_sync_1.question)("\n".concat(cores_1.cores.cianoBrilhanteNegrito, "Pressione ENTER para Continuar...").concat(cores_1.cores.reset, "\n"));
    console.clear();
}
function awaitInputMessage(message) {
    (0, readline_sync_1.question)("\n".concat(cores_1.cores.cianoBrilhanteNegrito).concat(message).concat(cores_1.cores.reset, "\n"));
    console.clear();
}
function input(prompt) {
    return (0, readline_sync_1.question)(prompt);
}
function printSlow(text) {
    var delay = 15;
    var index = 0;
    function printChar() {
        if (index < text.lenght) {
            process.stdout.write(text[index]);
            index++;
            setTimeout(printChar, delay);
        }
        else {
            console.log();
        }
    }
    printChar();
}
