import Person from './Person';

export default class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[];
  private _worksGrades: number[];

  constructor(
    name: string,
    birthDate: Date,
    examsGrades: number[],
    worksGrades: number[],
  ) {
    super(name, birthDate);
    Student.validateExamsGrades(examsGrades);
    Student.validateWorksGrades(worksGrades);
    this._enrollment = Student.generateEnrollment();
    this._examsGrades = examsGrades;
    this._worksGrades = worksGrades;
  }

  get enrollment(): string { return this._enrollment; }
  set enrollment(value: string) {
    if (value.length < 16) throw new Error('INVALID_ENROLLMENT');
    this._enrollment = value;
  }

  get examsGrades(): number[] { return this._examsGrades; }
  set examsGrades(value: number[]) {
    Student.validateExamsGrades(value);
    this._examsGrades = value;
  }

  get worksGrades(): number[] { return this._worksGrades; }
  set worksGrades(value: number[]) {
    Student.validateWorksGrades(value);
    this._worksGrades = value;
  }

  private static validateExamsGrades(value: number[]): void {
    if (value.length > 4) throw new Error('TOO_MANY_GRADES');
  }

  private static validateWorksGrades(value: number[]): void {
    if (value.length > 2) throw new Error('TOO_MANY_GRADES');
  }

  private static generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1))
      .replace(/\W/g, '');
    return `STU${randomStr}`;
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