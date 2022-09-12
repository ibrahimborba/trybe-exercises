import readline from "readline-sync";

type massUnitsType = {
  kg: number,
  hg: number,
  dag: number,
  g: number,
  dg: number,
  cg: number,
  mg: number
};

const massUnits: massUnitsType = {
  kg: 1000,
  hg: 100,
  dag: 10,
  g: 1,
  dg: 0.1,
  cg: 0.01,
  mg: 0.001
};

export function convertMass(valor: number, baseUnit: string, convertUnit: string): number {
  const baseValue = massUnits[baseUnit as keyof typeof massUnits];
  const convertValue = massUnits[convertUnit as keyof typeof massUnits];  
  const converted = (valor * baseValue) / convertValue;
  return converted;
};

export function exec(): string {
  const valor = readline.questionFloat('Digite o valor: ');
  const baseUnit = readline.question('Digite o símbolo da unidade do valor: ');
  const convertUnit = readline.question('Digite o símbolo da unidade para ser convertida: ');

  const converted = convertMass(valor, baseUnit, convertUnit);

  const message = `${valor}${baseUnit} é igual a ${converted}${convertUnit}`;
  return message;
}
