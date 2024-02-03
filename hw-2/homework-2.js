// Дано 
const str1 = "Hello";
console.log(str1
    .replace(str1[0], str1[0].toLowerCase())
    .replace(str1[str1.length - 1], str1[str1.length - 1].toUpperCase()));


// Дано 
const str2 = "karina";
console.log (str2.replace(str2[0], str2[0].toUpperCase()));

// Дано
const n = 12.6436;
console.log("$" + n.toFixed(2) + "$");


const str3 = "H!el*l000o";
console.log(str3
    .replaceAll(" ", "")
    .replaceAll("!", "")
    .replaceAll("*", "")
    .replaceAll("0", "").length

    )

