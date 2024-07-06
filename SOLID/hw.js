// L - Liskov Substitution Principe

// before
// class Vehicle {
//     constructor(name, speed) {
//       this.name = name;
//       this.speed = speed;
//     }
  
//     startEngine() {
//       console.log(`${this.name} is starting engine`);
//     }
  
//     move() {
//       console.log(`${this.name} is moving at speed ${this.speed}`);
//     }
//   }
  
//   class Car extends Vehicle {
//     drift() {
//       console.log(`${this.name} is drifting at speed ${this.speed}`);
//     }
//   }
  
//   class Bicycle extends Vehicle {
//     ring() {
//       console.log(`${this.name} is ringing the bell`);
//     }
//   }

  
//   const car = new Car('Car', 100);
//   car.startEngine(); 
//   car.move();       
//   car.drift();       
  
//   const bicycle = new Bicycle('Bicycle', 20);
//   bicycle.startEngine(); 
//   bicycle.move();      
//   bicycle.ring();    


  // after

class Vehicle {
    constructor(name, speed) {
      this.name = name;
      this.speed = speed;
    }
  }
  
  class VehicleWithoutEngine extends Vehicle {
    move() {
      console.log(`${this.name} is moving at speed ${this.speed}`);
    }
  }
  
  class VehicleWithEngine extends Vehicle {
    startEngine() {
      console.log(`${this.name} is starting engine`);
    }
  }
  
  class Car extends VehicleWithEngine {  
    drift() {
      console.log(`${this.name} is drifting at speed ${this.speed}`);
    }
  }
  
  class Bicycle extends VehicleWithoutEngine {
    ring() {
      console.log(`${this.name} is ringing the bell`);
    }
  }
  
  const car = new Car('Car', 100);
  car.startEngine();          
  car.drift();        
  
  const bicycle = new Bicycle('Bicycle', 20);
  bicycle.move();        
  bicycle.ring();    

