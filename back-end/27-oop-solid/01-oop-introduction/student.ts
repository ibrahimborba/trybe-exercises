const { log } = console;

class Student {
  private registration: string;

  private name: string;

  private testGrades: [number, number, number, number];

  private projectGrades: [number, number];

  constructor(
    registration: string,
    name: string,
    testGrades: [number, number, number, number],
    projectGrades: [number, number],
  ) {
    this.registration = registration;
    this.name = name;
    this.testGrades = testGrades;
    this.projectGrades = projectGrades;
  }

  get gradesSum(): number {
    const grades = [...this.testGrades, ...this.projectGrades];
    const gradesSum = grades.reduce((acc, grade) => acc + grade, 0);
    return gradesSum;
  }

  get gradesMean(): number {
    const grades = [...this.testGrades, ...this.projectGrades];
    const gradesSum = grades.reduce((acc, grade) => acc + grade, 0);
    const mean = gradesSum / grades.length;
    return mean;
  }
}

const studentRegistration: string = 'student-registration';
const studentName: string = 'John Doe';
const studentTestGrades: [number, number, number, number] = [5, 10, 5, 10];
const studentProjectGrades: [number, number] = [5, 10];

const studentOne = new Student(
  studentRegistration,
  studentName,
  studentTestGrades,
  studentProjectGrades,
);

log(studentOne.gradesSum);
log(studentOne.gradesMean);
