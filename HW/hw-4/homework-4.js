function calculation() {
  const x = 10;
  const y = 1;
  const z = 50;

  if (x > 0 && y > 0 && z > 0) {
    console.log((x + y + y) / 3);
  } else if (x === undefined || y === undefined || z === undefined) {
    console.log("Invalid calculation");
  } else if (x < 0 && y < 0 && z < 0) {
    console.log(x);
  }
}
calculation();

   const data = undefined;
// const fullname = "John Doe";
// const data= fullname;
let backup = {};

function checkData() {
  if (data === undefined) {
    console.log(backup);
  } else {
    backup = data;
    console.log(backup);
  }
}

checkData();
