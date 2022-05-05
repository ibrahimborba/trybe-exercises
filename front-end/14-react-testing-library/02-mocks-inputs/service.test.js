it("tests randomNumber", () => {
  // testando se a função foi chamada e qual seu retorno
  randomNumber = jest.fn().mockImplementation((a, b) => a / b);

  randomNumber(4, 2);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);
  expect(randomNumber(4, 2)).toBe(2);
});
