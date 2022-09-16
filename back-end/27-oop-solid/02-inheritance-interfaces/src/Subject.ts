export default class Subject {
  constructor(public name: string) {
    this.validateName(name);
    this.name = name;
  }

  private validateName(name: string) {
    const MIN_LENGTH = 3;
    if (name.length < MIN_LENGTH) {
      throw new Error(`should have at least ${MIN_LENGTH} characters`); 
    }
  }
}
