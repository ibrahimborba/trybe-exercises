export default class Subject {
  private _name: string;

  constructor(name: string) {
    Subject.validateName(name);
    this._name = name; 
  }

  get name(): string { return this._name; }
  set name(value: string) {
    Subject.validateName(value);
    this._name = value;
  }

  private static validateName(value: string): void {
    if (value.length < 3) throw new Error('INVALID_NAME');
  }
}