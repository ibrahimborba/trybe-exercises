"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exec = exports.convertMass = void 0;
const readline_sync_1 = __importDefault(require("readline-sync"));
const massUnits = {
    kg: 1000,
    hg: 100,
    dag: 10,
    g: 1,
    dg: 0.1,
    cg: 0.01,
    mg: 0.001
};
function convertMass(valor, baseUnit, convertUnit) {
    const baseValue = massUnits[baseUnit];
    const convertValue = massUnits[convertUnit];
    const converted = (valor * baseValue) / convertValue;
    return converted;
}
exports.convertMass = convertMass;
;
function exec() {
    const valor = readline_sync_1.default.questionFloat('Digite o valor: ');
    const baseUnit = readline_sync_1.default.question('Digite o símbolo da unidade do valor: ');
    const convertUnit = readline_sync_1.default.question('Digite o símbolo da unidade para ser convertida: ');
    const converted = convertMass(valor, baseUnit, convertUnit);
    const message = `${valor}${baseUnit} é igual a ${converted}${convertUnit}`;
    return message;
}
exports.exec = exec;
