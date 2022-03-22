const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

it('Testa se as letras são transformadas em maiúsculas', (done) => {
  uppercase('teste', (str) => {
    try {
      expect(str).toBe('TESTE');
      done();
    } catch (error) {
      done(error);
    }
  });
});
