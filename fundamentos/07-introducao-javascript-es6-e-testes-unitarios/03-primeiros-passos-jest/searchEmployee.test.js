const searchEmployee = require('./searchEmployee');

it('TDD first test', () => {
  expect(searchEmployee('8579-6', 'firstName')).toEqual('Ana');
});
