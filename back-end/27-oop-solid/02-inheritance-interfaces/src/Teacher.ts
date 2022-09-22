import Employee from './Employee';
import Subject from './Subject';

export default class Teacher extends Employee {
  public subject: Subject;

  constructor(
    name: string,
    birthDate: Date,
    _salary: number,
    subject: Subject,
  ) {
    super(name, birthDate, _salary);
    this.subject = subject;
    this.enrollment = this.generateEnrollment();
  }

  generateEnrollment(): string {
    const day = String(this.birthDate.getDate()).padStart(2, '0');
    const month = String(this.birthDate.getMonth() + 1).padStart(2, '0');
    const year = this.birthDate.getFullYear();
    const enrollment = `${this.name}-${day}/${month}/${year}`;
    return enrollment;
  }
}