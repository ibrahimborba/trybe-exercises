function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
describe('Checa se a função myFizzBuzz', () => {
  it('retorna fizzbuzz para 15', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  })

  it('retorna fizz para 3', () => {
    expect(myFizzBuzz(3)).toEqual('fizz');
  })

  it('retorna buzz para 5', () => {
    expect(myFizzBuzz(5)).toEqual('buzz');
  })

  it('retorna 2 para 2', () => {
    expect(myFizzBuzz(2)).toEqual(2);
  })

  it('retorna falso para string', () => {
    expect(myFizzBuzz('string')).toBeFalsy();
  })
});
