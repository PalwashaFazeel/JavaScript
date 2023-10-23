function sayMyName() {
    console.log("P");
    console.log("A");
    console.log("L");
    console.log("W");
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("A");
}

sayMyName()

function addTwoNumbers(num1, num2) {
    return num1 + num2
}

const result = addTwoNumbers(3, 4)
console.log("Result: ", result);

function loginUserMsg(username = "Sam"){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMsg("Palwasha"))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    name: "Palwasha",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
}

handleObject(user)
handleObject({
    name: "Sam",
    price: 399
})

const newArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(newArray));
console.log(returnSecondValue([100, 500, 1000]));