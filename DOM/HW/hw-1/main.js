const elemNames = ["div", "span", "p", "input", "h1"];
const elements = elemNames.map((tag) => document.createElement(tag));

elements.forEach((elem, index) => {
  elem.textContent = index;
  document.body.appendChild(elem);
});

elements.slice(-2).forEach((element) => document.body.removeChild(element));

elements[0].className = "first";
elements[1].id = "second";