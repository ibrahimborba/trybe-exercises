import Person from './Person';
import Employee from './interfaces/IEmployee';
import Subject from './Subject';

export default class Teacher extends Person implements Employee {
  private _subject: Subject;
  private _salary: number;

  constructor(name: string, birthDate: Date, salary: number, subject: Subject) {
    super(name, birthDate);
    Teacher.validateSalary(salary);
    this._salary = salary;
    this._subject = subject;
  }

  get subject(): Subject { return this._subject; }

  get salary(): number { return this._salary; }
  set salary(value: number) {
    Teacher.validateSalary(value);
    this._salary = value;
  }

  private static validateSalary(value: number): void {
    if (value < 0) throw new Error('INVALID_SALARY');
  }
}