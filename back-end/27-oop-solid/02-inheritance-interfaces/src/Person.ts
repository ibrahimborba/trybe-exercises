export default abstract class Person {
  constructor(protected name: string, protected birthDate: Date) {
    this.validateName(name);
    this.validateBirthDate(birthDate);
    this.name = name;
    this.birthDate = birthDate;
  }

  private validateName(name: string) {
    if (name.length < 3) { throw new Error('MIN_LENGTH'); }
  }

  private validateBirthDate(birthDate: Date) {
    const today = new Date(Date.now());
    const timeDiff = Math.abs(Date.now() - birthDate.getTime());
    const ageYears = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);

    if (birthDate > today) { throw new Error('FUTURE_BABY'); }
    if (ageYears > 120) { throw new Error('MAX_AGE'); }
  }

  public getBirthDate(): string {
    const day = String(this.birthDate.getDate()).padStart(2, '0');
    const month = String(this.birthDate.getMonth() + 1).padStart(2, '0'); // January is 0!
    const year = this.birthDate.getFullYear();
    return `${day}-${month}-${year}`;
  }
}
