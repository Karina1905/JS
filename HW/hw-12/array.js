const array = ["user", "guest", "admin", "anonim"];

// 1. Порахуйте суму індексів адміна та юзера, помножену на довжину масиву
// 2. Перетворіть весь масив на масив, слова якого починаються з великої літери


sumIndex = (array[0].length + array[2].length) * array.length;
console.log(sumIndex);

function upperCase(array) {
    newArray = [];
    for (const element of array) {
      newArray[newArray.length] = element[0].toUpperCase() + element.slice(1);
    }
    return newArray;
  }
  console.log(upperCase(array));
