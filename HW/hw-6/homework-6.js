
console.log("task 1")
function iterate(str, until) {
    let counter = 1;
      while (counter < until) {
          console.log(str[0]);
          if (str[0] !== " "){ 
          counter+=1
          }
          str = str.slice(1);
        
      }
  }
  
  iterate("I am a string", 5);
// I
//
// a
// m
//
// a
//

console.log(" ");
console.log("task 2");

function showAllButNotSpaces(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            console.log(str[i]);
        }
    }
}

showAllButNotSpaces ("Hello, there!");



