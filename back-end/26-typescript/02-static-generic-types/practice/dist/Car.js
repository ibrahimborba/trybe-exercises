"use strict";
var carColors;
(function (carColors) {
    carColors["Black"] = "preta";
    carColors["White"] = "branca";
    carColors["Red"] = "vermelha";
    carColors["Silver"] = "prata";
})(carColors || (carColors = {}));
var carDoors;
(function (carDoors) {
    carDoors["driver"] = "motorista";
    carDoors["coPilot"] = "co-piloto";
    carDoors["passengerLeft"] = "passageiro-esquerda";
    carDoors["passengerRight"] = "passageiro-direita";
})(carDoors || (carDoors = {}));
var carDirections;
(function (carDirections) {
    carDirections["front"] = "frente";
    carDirections["left"] = "esquerda";
    carDirections["right"] = "direita";
    carDirections["back"] = "r\u00E9";
})(carDirections || (carDirections = {}));
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    honk() {
        return 'Honk!';
    }
    openTheDoor(door) {
        return `Open ${door} door.`;
    }
    closeTheDoor(door) {
        return `Close ${door} door.`;
    }
    speedUp() {
        return 'Faster!';
    }
    speedDown() {
        return 'Slower!';
    }
    turn(direction) {
        return `Turn ${direction}.`;
    }
}
const car1 = new Car('gol', carColors.Silver, 4);
console.log('car:', car1);
console.log('honk:', car1.honk());
console.log('open door:', car1.openTheDoor(carDoors.driver));
console.log('slow down:', car1.speedDown());
console.log('turn:', car1.turn(carDirections.left));
