// Data Types

// Primitives
// Numbers: 1 2 3 123 (BigInt)
12
// String: "Hello world" '123'
// ("Hello world");

// Boolean: true/false
true
false


// Undefined: undefined
undefined


// Null: null
null;

// Symbol: Symbol
// -

// BigInt: 1
// -

// Object - orientired data types:

// Object: {}, [], function(), {}, Map, Set, null.

const a = 10;
let b = 10;
// var c = 10; - not useful

const sum = a + b;

console.log(sum);
console.log(100 / 5);

const message = "Hello world!"
let message2 = "I am programmer"

console.log(message);
console.log(message2);
console.log("Karina");

console.log(message + message2);
// console.log(message - message2); not works

const isAdmin = true;
const isUser = false;

let user = undefined;
console.log(user);

user = "Karina";
console.log(user);

user = "Karina12";
console.log(user);

user = null;
console.log(user);

let counter = 0;

counter = counter + 1;
counter = counter + 100;

console.log(counter);


let greetingMessage = "";
greetingMessage = greetingMessage + "H";
greetingMessage = greetingMessage + "e";
greetingMessage = greetingMessage + "l";
greetingMessage = greetingMessage + "l";
greetingMessage = greetingMessage + "o";

console.log(greetingMessage);

// object

const obj = {
    name: "Karina",
    age: 24,
    isAdmin: true,
    info: undefined,s
};

console.log(obj);
console.log(obj.name);

console.log(window);

window.console.log("Hello from window")