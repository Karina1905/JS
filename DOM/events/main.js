// DOM

const scripts = document.scripts;
console.log(scripts, scripts.length);

const myOwnCustomScript = document.createElement("script");
myOwnCustomScript.src = "./hello.js";
document.body.appendChild(myOwnCustomScript);

console.log(scripts, myOwnCustomScript.src);

const forms = document.forms;
console.log(forms);

for (const form of forms) {
  form.onsubmit = (event) => {
    event.preventDefault();
  };
}

const images = [
  "https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg",
  "https://img.freepik.com/free-photo/view-car-running-high-speed_23-2150635406.jpg",
  "https://rare-gallery.com/thumbs/1186781-car-vehicle-muscle-cars-sports-car-performance-car-Plymouth-GTX-supercar-land-vehicle-automotive-design-automobile-make-luxury-vehicle-muscle-car-stock-car-racing.jpg",
];

// Завдання:
// напишіть логіку створення та виведення зоображень з масиву на сторінку(body)
// .src =

images.forEach((src) => {
  const img = document.createElement("img");
  img.src = src;

  document.body.appendChild(img);
});
console.log(document.images);

const styles = document.styleSheets;
console.log(styles);

styles.title = "TITLE FROM JS";
console.log(document.head);

let count = 0;

setInterval(() => {
  count += 1;
  document.title = count;
}, 1000);

const style = document.createElement("style");
style.innerHTML = `
body {
    background: red;
}`;

document.head.appendChild(style);

// Events in DOM
let count2 = 0;
const count2Element = document.createElement("h1");
count2Element.textContent = count2;
document.body.appendChild(count2Element);

const button = document.createElement("button");
button.textContent = "+1";

button.onclick = () => {
  count2 = count2 + 1;
  count2Element.textContent = count2;
  console.log("The button was clicked", count2);
};

document.body.appendChild(button);

const button1 = document.createElement("button");
button1.textContent = "-1";

button1.onclick = () => {
  count2 -= 1;
  count2Element.textContent = count2;
};
document.body.appendChild(button1);

// Main events:
// onclick, ondbllclick, onChange, onInput, onMouseMove
// onMouseEnter, onMouseLeave, onBlur, onFocus, onLoad

const dblClickButton = document.createElement("button");
dblClickButton.textContent = "Click 2 times";
dblClickButton.ondblclick = function () {
  console.log("DBL click was fired");
};
dblClickButton.onclick = function (event) {
  console.log(event);
  console.log("Click was fired");
};
document.body.appendChild(dblClickButton);
// Завдання:
// Використовуючи dblClick на 2 попередніх кнопках
// реалізувати логіку обнулення count2 (має виводитись)
dblClickButton.ondblclick = () => {
  count2 = 0;
  count2Element.textContent = count2;
  console.log("count2 was reset", count2);
};
const selectButtonWrapper = document.getElementById("select-buttons-wrapper");

const selectButtonsNumbers = [1, 2, 3];
const selectButtons = selectButtonsNumbers.map((number) => {
  const selectBtn = document.createElement("button");
  selectBtn.textContent = number;

  const dblClickButton = document.createElement("button");
  dblClickButton.textContent = "Click 2 times";
  dblClickButton.ondblclick = function () {
    console.log("DBL click was fired");
  };
  dblClickButton.onclick = function () {
    console.log("Click was fired");
  };
  document.body.appendChild(dblClickButton);

  selectButtonWrapper.appendChild(selectBtn);
});
