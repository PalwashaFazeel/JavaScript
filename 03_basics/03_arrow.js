const user = {
    username: "Palwasha",
    price: 999,
    welcomeMsg: function(){
        console.log(`${this.username}, welcome to website`);
    }
}

user.welcomeMsg()
user.username = "Sam"
user.welcomeMsg()
console.log(this);

function chai(){
    let username = "Palwasha"
    console.log(this.username);
}

chai()

const code = () => {
    let username = "Palwasha"
    console.log(this);
}

code()

const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3, 4));

const addThree = (num1, num2) => (num1 + num2 + 3)

console.log(addThree(3, 4));

const name = () => ({username: "Palwasha"})

console.log(name());