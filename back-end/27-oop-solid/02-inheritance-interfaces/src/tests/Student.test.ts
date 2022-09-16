import { expect } from 'chai';
import Student from '../Student';

describe('Student Tests', () => {
  const NAME = 'student-name';
  const BIRTH_DATE = new Date(2000, 1, 1);
  const EXAMS_GRADE: [number, number, number, number] = [5, 10, 5, 10];
  const WORKS_GRADE: [number, number] = [5, 10];
  describe('New Student instantiation', () => {
    const student = new Student(NAME, BIRTH_DATE, EXAMS_GRADE, WORKS_GRADE);
    it('checks its properties', () => {
      expect(student).to.haveOwnProperty('name');
      expect(student).to.haveOwnProperty('_birthDate');
      expect(student).to.haveOwnProperty('_enrollment');
      expect(student).to.haveOwnProperty('_examsGrades');
      expect(student).to.haveOwnProperty('_worksGrades');
    });
    it('checks its grades', () => {
      expect(student.sumGrades()).to.be.equal(45);
      expect(student.sumAverageGrade()).to.be.equal(7.5);
    });
  });

  describe('Validations', () => {
    describe('Instancing with a enrollment with less than 3 chars', () => {
      it('should throw error MIN_LENGTH', () => {
        expect(() => {
          new Student('Jon', BIRTH_DATE, EXAMS_GRADE, WORKS_GRADE);
        }).to.throw('should have at least 16 characters');
      });
    });
    describe('Instancing with a birthDate in the future', () => {
      it('should throw error FUTURE_BABY', () => {
        expect(() => {
          new Student(NAME, new Date(3000, 1, 1), EXAMS_GRADE, WORKS_GRADE);
        }).to.throw('FUTURE_BABY');
      });
    });
    describe('Instancing with a person older than 120 years', () => {
      it('should throw error MAX_AGE', () => {
        expect(() => {
          new Student(NAME, new Date(1900, 1, 1), EXAMS_GRADE, WORKS_GRADE);
        }).to.throw('MAX_AGE');
      });
    });
  });
});