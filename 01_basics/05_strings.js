const  name = "Palwasha"
const repoCount = 50

//console.log(name + " " + repoCount);
// don't use such syntax as code readibility is low instead use backticks and string interpolation

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const objName = new String("Palwasha")
console.log(objName);
console.log(objName[0]);
console.log((objName.length));
console.log(objName.toUpperCase());
console.log(objName.charAt(2));
console.log(objName.indexOf('l'));

const newString = objName.substring(0, 5)
console.log(newString);

const anotherString = objName.slice(-9, 8)
console.log(anotherString);

const newString1 = "         Palwasha       "
console.log(newString1);
console.log(newString1.trim());

const url = "https://palwasha.com/palwasha%20ahmed"
console.log(url.replace("%20", "-"));

console.log(url.includes("palwasha"));

const newString2 = "My name is Palwasha Fazeel Ahmed"
console.log(newString2.split(" "));