import IEnrollable from './interfaces/IEnrollable';
import Person from './Person';

export default class Employee extends Person implements IEnrollable {
  private _enrollment: string;
  private _salary: number;

  constructor(name: string, birthDate: Date, salary: number) {
    super(name, birthDate);
    Employee.validateSalary(salary);
    this._enrollment = this.generateEnrollment();
    this._salary = salary;
  }

  get enrollment(): string { return this._enrollment; }
  set enrollment(value: string) {
    if (value.length < 16) throw new Error('INVALID_ENROLLMENT');
    this._enrollment = value;
  }

  get salary(): number { return this._salary; }
  set salary(value: number) {
    Employee.validateSalary(value);
    this._salary = value;
  }

  private static validateSalary(value: number): void {
    if (value < 0) throw new Error('INVALID_SALARY');
  }

  public generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1))
      .replace(/\W/g, '');
    return `STU${randomStr}`;
  }
}