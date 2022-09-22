import Enrollable from './Enrollable';
import Person from './Person';

export default class Employee extends Person implements Enrollable {
  private _enrollment: string;
  private _salary: number;
  private _admissionDate: Date;

  constructor(name: string, birthDate: Date, salary: number) {
    super(name, birthDate);
    this._salary = salary;
    this._admissionDate = new Date();
    this._enrollment = this.generateEnrollment();
  }

  get enrollment() { return this._enrollment; }

  set enrollment(value: string) {
    this._enrollment = value;
  }

  generateEnrollment(): string {
    const day = String(this.birthDate.getDate()).padStart(2, '0');
    const month = String(this.birthDate.getMonth() + 1).padStart(2, '0');
    const year = this.birthDate.getFullYear();
    const enrollment = `${this.name}-${day}/${month}/${year}`;
    return enrollment;
  }
} 