import Enrollable from './Enrollable';
import Person from './Person';

export default class Student extends Person implements Enrollable {
  // eslint-disable-next-line max-params
  private _enrollment: string;

  constructor(
    name: string,
    birthDate: Date,
    private _examsGrades: [number, number, number, number],
    private _worksGrades: [number, number],
  ) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
    this._examsGrades = _examsGrades;
    this._worksGrades = _worksGrades;
  }

  get enrollment() { return this._enrollment; }

  set enrollment(value: string) {
    this._enrollment = value;
  }

  private validateEnrollment(enrollment: string) {
    const MIN_LENGTH = 16;
    if (enrollment.length < MIN_LENGTH) {
      throw new Error(`should have at least ${MIN_LENGTH} characters`); 
    }
  }
  
  generateEnrollment(): string {
    const day = String(this.birthDate.getDate()).padStart(2, '0');
    const month = String(this.birthDate.getMonth() + 1).padStart(2, '0');
    const year = this.birthDate.getFullYear();
    const enrollment = `${this.name}-${day}/${month}/${year}`;

    this.validateEnrollment(enrollment);
    return enrollment;
  }

  public sumGrades(): number {
    const grades = [...this._examsGrades, ...this._worksGrades];
    const gradesSum = grades.reduce((acc, grade) => acc + grade, 0);
    return gradesSum;
  }

  public sumAverageGrade(): number {
    const grades = [...this._examsGrades, ...this._worksGrades];
    const gradesSum = grades.reduce((acc, grade) => acc + grade, 0);
    const mean = gradesSum / grades.length;
    return mean;
  }
}
