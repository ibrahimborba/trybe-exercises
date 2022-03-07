const sum = require('./sum')

describe ('Checa se a função sum', () => {
  it('retorna 9', () => {
    expect(sum(4, 5)).toEqual(9);
  });

  it('retorna 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });

  it('lança um erro com string', () => {
    expect(() => {sum()}).toThrow();
  });

  it('lança uma mensagem de erro com string', () => {
    expect(() => {sum()}).toThrowError(new Error('parameters must be numbers'));
  });
});
