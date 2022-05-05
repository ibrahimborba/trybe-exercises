it("tests randomNumber", () => {
  // testando se a função foi chamada e qual seu retorno
  randomNumber = jest.fn().mockImplementation((a) => a * 2);

  randomNumber(4);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);
  expect(randomNumber(4)).toBe(8);
});
