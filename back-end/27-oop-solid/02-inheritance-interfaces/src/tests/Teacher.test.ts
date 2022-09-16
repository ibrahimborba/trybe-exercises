import { expect } from 'chai';
import Teacher from '../Teacher';
import Subject from '../Subject';

describe('Teacher Tests', () => {
  const NAME = 'teacher-name';
  const BIRTH_DATE = new Date(2000, 1, 1);
  const SALARY = 5000;
  const SUBJECT: Subject = new Subject('Historia');
  describe('New Teacher instantiation', () => {
    const teacher = new Teacher(NAME, BIRTH_DATE, SALARY, SUBJECT);
    it('checks its properties', () => {
      expect(teacher).to.haveOwnProperty('name');
      expect(teacher).to.haveOwnProperty('_birthDate');
      expect(teacher).to.haveOwnProperty('registration');
      expect(teacher).to.haveOwnProperty('salary');
      expect(teacher).to.haveOwnProperty('admissionDate');
      expect(teacher).to.haveOwnProperty('subject');
    });
  });
});