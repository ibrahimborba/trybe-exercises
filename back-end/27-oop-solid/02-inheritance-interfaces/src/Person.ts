export default class Person {
  private _name: string;
  private _birthDate: Date;
  constructor(name: string, birthDate: Date) {
    Person.validateName(name);
    this.validateBirthDate(birthDate);
    this._name = name;
    this._birthDate = birthDate;
  }

  get name(): string { return this._name; }

  get birthDate(): Date { return this._birthDate; }

  private static validateName(value: string): void {
    if (value.length < 3) throw new Error('INVALID_NAME_MIN_LENGTH');
  }

  private getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime());
    const yearMs = 31_536_000_000;
    return Math.floor(diff / yearMs);
  }

  private validateBirthDate(value: Date): void {
    if (value.getTime() > new Date()
      .getTime()) throw new Error('INVALID_DATE_IN_FUTURE');
    if (this.getAge(value) > 120) throw new Error('INVALID_DATE_TOO_OLD');
  }
}