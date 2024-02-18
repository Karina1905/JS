// Завдання

function findCharactersQuantity(str, char) {
  let message = "";
  while (str.length != 0) {
    if (str[0] === char) {
      message = message.concat(char);

      str = str.slice(1);
    } else {
      str = str.slice(1);
      message = message.concat(" ");
    }
  }

  console.log(message);
}
findCharactersQuantity("a a a", "a");

function encryption(str) {
    for (const char of str) {
      switch (char) {
        case "a":
          
          str = str.replace("a", ":");
          break;
  
        case "b":
          str = str.replace("b", "-");
          break;
  
        case "c":
          str = str.replace("c", "!");
          break;
          
        default:
          continue;
      }
    }
    // функція має замініти у str:
    // кожну літеру а на :
    // кожну літеру b на -
    // кожну літеру с на !
  
    // for - of , switch - case
    console.log(str);
  }
  
//   encryption("abc");
    encryption("abcdca");
