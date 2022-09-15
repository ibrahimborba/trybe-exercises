/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Product from './Product';
import User from './User';
import Order from './Order';

const { log } = console;

const userJohn = new User('John');
const coxinha = new Product('Coxinha', 10);
const cafe = new Product('Café', 5);

const productsList: Product[] = [coxinha, cafe];

const orderOne = new Order(userJohn, productsList, 'cartao', 0.1);

log(orderOne.total);
log(orderOne.totalWithDiscount);
