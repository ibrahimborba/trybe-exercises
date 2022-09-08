enum units {
  km = 1000,
  hm = 100,
  dam = 10,
  m = 1,
  dm = 0.1,
  cm = 0.01,
  mm = 0.001
}

function convert(valor: number, baseUnit: string, convertUnit: string): number {
  // source: https://stackoverflow.com/questions/50417254/dynamically-access-enum-in-typescript-by-key
  const baseValue = units[baseUnit as keyof typeof units];
  const convertValue = units[convertUnit as keyof typeof units];
  const converted = (valor * baseValue) / convertValue;
  return converted;
};
