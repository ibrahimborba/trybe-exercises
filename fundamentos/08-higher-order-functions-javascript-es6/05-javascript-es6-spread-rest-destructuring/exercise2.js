const sum = (...args) => {
  return args.reduce((acc, elem) => acc += elem, 0);
}
console.log(sum(1, 2, 3, 4, 5));
