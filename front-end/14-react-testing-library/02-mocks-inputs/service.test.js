it("tests randomNumber", () => {
  // testando se a função foi chamada e qual seu retorno
  randomNumber = jest.fn().mockReturnValue(10);

  randomNumber();
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);
  expect(randomNumber()).toBe(10);
});
