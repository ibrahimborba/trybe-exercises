"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exec = exports.convertLength = void 0;
const readline_sync_1 = __importDefault(require("readline-sync"));
var lengthUnits;
(function (lengthUnits) {
    lengthUnits[lengthUnits["km"] = 1000] = "km";
    lengthUnits[lengthUnits["hm"] = 100] = "hm";
    lengthUnits[lengthUnits["dam"] = 10] = "dam";
    lengthUnits[lengthUnits["m"] = 1] = "m";
    lengthUnits[lengthUnits["dm"] = 0.1] = "dm";
    lengthUnits[lengthUnits["cm"] = 0.01] = "cm";
    lengthUnits[lengthUnits["mm"] = 0.001] = "mm";
})(lengthUnits || (lengthUnits = {}));
function convertLength(valor, baseUnit, convertUnit) {
    // source: https://stackoverflow.com/questions/50417254/dynamically-access-enum-in-typescript-by-key
    const baseValue = lengthUnits[baseUnit];
    const convertValue = lengthUnits[convertUnit];
    const converted = (valor * baseValue) / convertValue;
    return converted;
}
exports.convertLength = convertLength;
;
function exec() {
    const valor = readline_sync_1.default.questionFloat('Digite o valor: ');
    const baseUnit = readline_sync_1.default.question('Digite o símbolo da unidade do valor: ');
    const convertUnit = readline_sync_1.default.question('Digite o símbolo da unidade para ser convertida: ');
    const converted = convertLength(valor, baseUnit, convertUnit);
    const message = `${valor}${baseUnit} é igual a ${converted}${convertUnit}`;
    return message;
}
exports.exec = exec;
