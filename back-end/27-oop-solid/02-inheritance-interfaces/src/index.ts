import Person from './Person';

const { log } = console;

const personOne = new Person('John Doe', new Date(2000, 1, 1));

log(personOne.name);
log(personOne.birthDate);