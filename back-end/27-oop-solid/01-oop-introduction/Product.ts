export default class Product {
  private name: string;

  private price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  get productName(): string {
    return this.name;
  }

  get productPrice(): number {
    return this.price;
  }
}
