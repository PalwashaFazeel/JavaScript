const num1 = [10, 9, 8, 7, 6]
const num2 = [1, 2, 3, 4, 5]

num1.push(num2)
console.log(num1);

const allNum = num1.concat(num2)
console.log(allNum);

const allNum2 = [...num1, ...num2]
console.log(allNum2);

const arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const flatarr = arr.flat(Infinity)
console.log(flatarr);

console.log(Array.isArray("Palwasha"));
console.log(Array.from("Palwasha"));
console.log(Array.from({name: "Palwasha"}));

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));