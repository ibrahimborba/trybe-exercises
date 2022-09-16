import Person from './Person';
import Employee from './Employee';
import Subject from './Subject';

export default class Teacher extends Person implements Employee {
  public registration: string;
  public salary: number;
  public admissionDate: Date;
  public subject: Subject;

  constructor(
    name: string,
    _birthDate: Date,
    salary: number,
    subject: Subject,
  ) {
    super(name, _birthDate);
    this.registration = this.generateRegistration();
    this.salary = salary;
    this.subject = subject;
    this.admissionDate = new Date(Date.now());
  }

  private validateRegistration(registration: string) {
    const MIN_LENGTH = 16;
    if (registration.length < MIN_LENGTH) {
      throw new Error(`should have at least ${MIN_LENGTH} characters`); 
    }
  }

  public generateRegistration(): string {
    let registration = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < characters.length; i += 1) {
      registration += characters.charAt(
        Math.floor(Math.random() * characters.length),
      );
    }
    
    this.validateRegistration(registration);
    return registration;
  }
}