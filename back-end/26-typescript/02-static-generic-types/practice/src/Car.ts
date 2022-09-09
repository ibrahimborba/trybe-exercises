enum carColors {
  Black = "preta",
  White = "branca",
  Red = "vermelha",
  Silver = "prata",
}

enum carDoors {
  driver = "motorista",
  coPilot = "co-piloto",
  passengerLeft = "passageiro-esquerda",
  passengerRight = "passageiro-direita",
}

enum carDirections {
  front = "frente",
  left = "esquerda",
  right = "direita",
  back = "ré",
}

interface Car {
  brand: string;
  color: carColors;
  doors: number;
  honk(): string;
  openTheDoor(door: carDoors): string;
  closeTheDoor(door: carDoors): string;
  speedUp(): string;
  speedDown(): string;
  stop(): string;
  turn(direction: carDirections): string;
}

class Car {
  constructor(brand: string, color: carColors, doors: number) {
      this.brand  = brand;
      this.color  = color;
      this.doors  = doors;
  }

  honk(): string {
    return 'Honk!';
  }

  openTheDoor(door: carDoors): string {
    return `Open ${door} door.`;
  }

  closeTheDoor(door: carDoors): string {
    return `Close ${door} door.`;
  }

  speedUp(): string {
    return 'Faster!';
  }

  speedDown(): string {
    return 'Slower!';
  }

  turn(direction: carDirections): string {
    return `Turn ${direction}.`;
  }
}

const car1 = new Car('gol', carColors.Silver, 4);

console.log('car:', car1);
console.log('honk:',car1.honk());
console.log('open door:',car1.openTheDoor(carDoors.driver));
console.log('slow down:',car1.speedDown());
console.log('turn:',car1.turn(carDirections.left));
