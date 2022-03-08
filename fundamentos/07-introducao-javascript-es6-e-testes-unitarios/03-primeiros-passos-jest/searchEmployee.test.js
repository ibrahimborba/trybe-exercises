const searchEmployee = require('./searchEmployee');

it('TDD first test', () => {
  expect(searchEmployee('8579-6', 'FirstName')).toEqual('Ana');
});
