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
      it('should throw error INVALID_NAME_MIN_LENGTH', () => {
        expect(() => {
          new Person('na', BIRTH_DATE);
        }).to.throw('INVALID_NAME_MIN_LENGTH');
      });
    });
    describe('Instancing with a birthDate in the future', () => {
      it('should throw error INVALID_DATE_IN_FUTURE', () => {
        expect(() => {
          new Person(NAME, new Date(3000, 1, 1));
        }).to.throw('INVALID_DATE_IN_FUTURE');
      });
    });
    describe('Instancing with a person older than 120 years', () => {
      it('should throw error INVALID_DATE_TOO_OLD', () => {
        expect(() => {
          new Person(NAME, new Date(1900, 1, 1));
        }).to.throw('INVALID_DATE_TOO_OLD');
      });
    });
  });
});