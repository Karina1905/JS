const arr = ["Oleg", "Maxim", "Katerina", "Igor", "Vladislav"];

arr.splice(0, 2);
[arr[1], arr[2]] = [arr[2], arr[1]];

console.log(arr);