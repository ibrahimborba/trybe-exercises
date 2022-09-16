import Person from './Person';

export default class Student extends Person {
  // eslint-disable-next-line max-params
  private _enrollment: string;

  constructor(
    name: string,
    _birthDate: Date,
    private _examsGrades: [number, number, number, number],
    private _worksGrades: [number, number],
  ) {
    super(name, _birthDate);
    this._enrollment = this.generateEnrollment(name, _birthDate);
    this._examsGrades = _examsGrades;
    this._worksGrades = _worksGrades;
  }

  private validateEnrollment(enrollment: string) {
    const MIN_LENGTH = 16;
    if (enrollment.length < MIN_LENGTH) {
      throw new Error(`should have at least ${MIN_LENGTH} characters`); 
    }
  }
  
  private generateEnrollment(name: string, birthDate: Date): string {
    const day = String(birthDate.getDate()).padStart(2, '0');
    const month = String(birthDate.getMonth() + 1).padStart(2, '0');
    const year = birthDate.getFullYear();
    const enrollment = `${name}-${day}/${month}/${year}`;

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
