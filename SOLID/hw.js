class Vehicle{
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
}

class VehicleWithoutEngine extends Vehicle {
    move() {
        console.log("Moving device without engine");
      }
}

class VehicleWithEngine extends Vehicle {
    startEngine() {
        console.log("Starting engine of device");
      }
}

class Car extends VehicleWithEngine {
    startEngine() {
        console.log("Starting engine of car");
      }
}


class Bicycle extends VehicleWithoutEngine {
    move() {
        console.log("Moving bicycle");
      }
}

const bicycle = new Bicycle();
bicycle.move();
const car = new Car();
car.startEngine();
