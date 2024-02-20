const obj = { a: 10, b: 10, c: 80 };

function checkValues(obj) {
  const sum = obj.a + obj.b + obj.c;
  if (sum > 50) {
    console.log("true");
  } else {
    console.log("false");
  }
}

checkValues(obj);
