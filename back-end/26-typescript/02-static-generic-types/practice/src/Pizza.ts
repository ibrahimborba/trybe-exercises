type slices = 4 | 6 | 8
type regularFlavors = 'Calabresa' | 'Frango' | 'Pepperoni'
type sweetFlavors = 'Nutela' | 'Goiabada com Queijo' | 'Marshmallow'

interface Pizza {
  flavor: string;
  slices: slices;
}

let pizzaCalabresa: Pizza = {
  flavor: "Calabresa",
  slices: 8
}

interface PizzaComum extends Pizza {
  flavor: regularFlavors;
  slices: slices;
}

interface PizzaDoce extends Pizza {
  flavor: sweetFlavors;
  slices: 4;
}

let pizzaFrango: PizzaComum = {
  flavor: "Frango",
  slices: 6
}

let pizzaNutela: PizzaDoce = {
  flavor: "Nutela",
  slices: 4
}