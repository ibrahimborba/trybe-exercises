/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Product from './Product';
import User from './User';

export default class Order {
  private user: User;

  private productsList: Product[];

  private payment: string;

  private discount?: number;

  constructor(
    user: User,
    productsList: Product[],
    payment: string,
    discount?: number,
  ) {
    this.user = user;
    this.productsList = productsList;
    this.payment = payment;
    this.discount = discount;
  }

  get total(): string {
    const totalPrice = this.productsList
      .reduce((acc: number, product: Product) => acc + product.productPrice, 0);
    return `${this.user}, sua conta é de ${totalPrice}`;
  }

  get totalWithDiscount(): string {
    const totalPrice = this.productsList
      .reduce((acc: number, product: Product) => acc + product.productPrice, 0);

    if (this.discount) {
      const withDiscount = totalPrice * (1 - this.discount);
      return `${this.user}, sua conta com desconto é de ${withDiscount}`;
    }
    return `${this.user}, sua conta é de ${totalPrice}`;
  }
}
