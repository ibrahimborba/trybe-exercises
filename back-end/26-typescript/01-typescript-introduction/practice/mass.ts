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


function convertMass(valor: number, baseUnit: string, convertUnit: string): number {
  const baseValue = massUnits[baseUnit as keyof typeof massUnits];
  const convertValue = massUnits[convertUnit as keyof typeof massUnits];
  const converted = (valor * baseValue) / convertValue;
  return converted;
};
