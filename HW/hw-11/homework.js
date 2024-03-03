const o1 = {a: 1, b: 2, c: 3};
const o2 = {a: 1, d: 4};


function compareObjects(o1, o2) {
    let result = {};
    for (const key in o1) {
        if (key in o2 && o1[key] === o1[key]) {
            result[key] = o1[key];
        }
    }
    return result;
}
console.log(compareObjects(o1, o2));
// виведіть за допомогою циклу всі спільні ключі о1 та о2 (in)