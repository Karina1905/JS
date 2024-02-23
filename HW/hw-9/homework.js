const data = {
  a: 100,
  b: 300,
  c: 400,
  d: 500,
  e: 600,
  f: 700,
  g: 800,
};

const lowData = {}; // до 300 (включно)
const bigData = {}; // після 300

for (let key in data) {
  if (data[key] <= 300) {
    lowData[key] = data[key];
  } else {
    bigData[key] = data[key];
  }
}

console.log(lowData);
console.log(bigData);

// За допомогою циклу опрацюйте данні так, щоб менші значення були у lowData,
// більші у bigData
