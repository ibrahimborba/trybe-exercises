const searchEmployee = require('./searchEmployee');

it('TDD first test', () => {
  expect(searchEmployee('8579-6', 'firstName')).toEqual('Ana');
});

it('Return error if id is not found', () => {
  expect(() => {searchEmployee('0000-0', 'firstName')}).toThrow();
});

it('Return error message if id is not found', () => {
  expect(() => {searchEmployee('0000-0', 'firstName')}).toThrowError(new Error('ID não identificada'));
});