import readline from "readline-sync";

enum lengthUnits {
  km = 1000,
  hm = 100,
  dam = 10,
  m = 1,
  dm = 0.1,
  cm = 0.01,
  mm = 0.001
}

export function convertLength(valor: number, baseUnit: string, convertUnit: string): number {
  // source: https://stackoverflow.com/questions/50417254/dynamically-access-enum-in-typescript-by-key
  const baseValue = lengthUnits[baseUnit as keyof typeof lengthUnits];
  const convertValue = lengthUnits[convertUnit as keyof typeof lengthUnits];
  const converted = (valor * baseValue) / convertValue;
  return converted;
};

export function exec(): string {
  const valor = readline.questionFloat('Digite o valor: ');
  const baseUnit = readline.question('Digite o símbolo da unidade do valor: ');
  const convertUnit = readline.question('Digite o símbolo da unidade para ser convertida: ');

  const converted = convertLength(valor, baseUnit, convertUnit);

  const message = `${valor}${baseUnit} é igual a ${converted}${convertUnit}`;
  return message;
}

