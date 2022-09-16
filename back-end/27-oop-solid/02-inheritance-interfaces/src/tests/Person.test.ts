import { expect } from 'chai';
import Person from '../Person';

describe('Person Tests', () => {
  const NAME = 'person-name';
  const BIRTH_DATE = new Date(2000, 1, 1);
  describe('New Person instantiation', () => {
    const person = new Person(NAME, BIRTH_DATE);
    it('checks its properties', () => {
      expect(person).to.haveOwnProperty('_name');
      expect(person).to.haveOwnProperty('_birthDate');
    });
  });

  describe('Validations', () => {
    describe('Instancing with a name with less than 3 chars', () => {
      it('should throw error MIN_LENGTH', () => {
        expect(() => {
          new Person('na', BIRTH_DATE);
        }).to.throw('MIN_LENGTH');
      });
    });
    describe('Instancing with a birthDate in the future', () => {
      it('should throw error FUTURE_BABY', () => {
        expect(() => {
          new Person(NAME, new Date(3000, 1, 1));
        }).to.throw('FUTURE_BABY');
      });
    });
    describe('Instancing with a person older than 120 years', () => {
      it('should throw error MAX_AGE', () => {
        expect(() => {
          new Person(NAME, new Date(1900, 1, 1));
        }).to.throw('MAX_AGE');
      });
    });
  });
});