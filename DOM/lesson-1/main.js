// DOM
// Window
document;

const body = document.body;
console.log(body, "body");

const div = document.createElement("div");
console.log(div, "div");

div.id = "myIdidk";
div.className = "myClass myClass2";
div.classList.add("myClass3");

div.textContent = "Hello, div";
document.body.appendChild(div);

const users = [
  { name: "Vladislav", age: 22 },
  { name: "Igor", age: 24 },
  { name: "Karina", age: 18 },
];

// users.forEach((user) => {
//   const div = document.createElement("div");
//   div.classList.add("user");
//   div.textContent = `${user.name}`;

//   const span = document.createElement("span");
//   span.textContent = user.age;
//   div.appendChild(span)
//   document.body.appendChild(div);
// });

function present(data, into) {
  data.forEach((item) => {
    const { tag, content, classes, id } = item;

    const element = document.createElement(tag);
    element.textContent = content;
    element.className = classes;
    element.id = id;

    into.appendChild(element);
  });
}

const usersWithLayouts = users.map((user) => ({
  tag: "div",
  content: `${user.name}, ${user.age}`,
  id: "user-id",
  classes: "user",
}));

present(usersWithLayouts, document.body);

// Завдання:

const locations = [
  { city: "Kyiv", population: 120000 },
  { city: "Kharkiv", population: 120000 },
  { city: "Chernihiv", population: 80000 },
];

// вивести всі локації у document.body використовуючи
// DOM

// div -> p(city) -> span -> population

locations.forEach((location) => {
  const div1 = document.createElement("div");
  div1.classList.add("location");
  div1.textContent = `${location.city}`;

  const span = document.createElement("span");
  span.classList.add("population");
  span.textContent = location.population;
  div1.appendChild(span);
  document.body.appendChild(div1);
});

const header = document.getElementById("header");
console.log(header, "header");
header.textContent = "The text was updated";

const pCollections = [...document.getElementsByClassName("p")];
console.log(pCollections);

pCollections.forEach((element) => {
    element.textContent = element.textContent + "added new text";
})

const inputWithNameEmail = [...document.getElementsByName("email")];
console.log(inputWithNameEmail);

const inputWithNamePassword = document.getElementsByName("password");
console.log(inputWithNamePassword);

// // Array, HTMLCollection, NodeList
// const input = inputWithNameEmail.item(0);
// console.log(input);
// inputWithNameEmail.forEach((item) => {
//     console.log(item);
// })

// const itemP = pCollections.item(0);
// console.log(itemP);

// const inputs = [...documents.getElementsTagName("p")];
// console.log(inputs);

//  Завдання:
// 1. Отримати всі елементи з тегом input
// 2. Додати кожному елементу клас (input)
const inputs1 = [...document.getElementsByTagName("input")];

inputs1.forEach((input) => {
    input.classList.add("input");
});
console.log(inputs1);

const headerToRemove = document.getElementById("header");
const element = document.body.removeChild(headerToRemove);
console.log(element);
