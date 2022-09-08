import readline from "readline-sync";
import * as mass from './mass';
import * as length from './length';

const scripts = [mass, length];
const conversionOptions = ['mass', 'length'];

const optionIndex = readline.keyInSelect(conversionOptions, 'Escolha um tipo de conversão: ');

console.log(scripts[optionIndex].exec());
