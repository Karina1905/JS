class User {
  constructor(name, age, town) {
    this.name = name;
    this.age = age;
    this.town = town;
  }
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }

  growUp() {
    this.age += 1;
  }

  moveOn(newTown) {
    this.town = newTown;
  }
}
const user1 = new User("Alex", 23, "Chikago");
console.log(user1);
user1.sayHello();
user1.growUp();
user1.moveOn("New York");
console.log(user1);

class AdvancedUser extends User {
  constructor(name, age, town, location, email) {
    super(name, age, town);
    this.location = location;
    this.email = email;
  }

  sayHello() {
    console.log(
      `Hello, my name is ${this.name}. I live in ${this.town}. My email: ${this.email}`
    );
  }
}
const user2 = new AdvancedUser(
  "Micky",
  28,
  "Edinburgh",
  "location1",
  "email1@gmail.com"
);
console.log(user2);
user2.sayHello();
user2.growUp();
user2.moveOn("Toronto");
console.log(user2);
