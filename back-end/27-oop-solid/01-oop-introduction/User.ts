export default class User {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  get userName(): string {
    return this.name;
  }
}
