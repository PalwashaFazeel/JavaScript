// const user = new Object()
// singleton object

const user = {}
// non-singleton object

user.id = "123abc"
user.name = "Palwasha"
user.isLoggedIn = false

console.log(user);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userName: {
            firstname: "Anvita",
            lastname: "Sharma"
        }
    }
}

console.log(regularUser.fullname.userName.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = {obj1, obj2}
console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4);

const obj5 = {...obj1, ...obj2}
console.log(obj5);

const userData = [
    {
        id: 1,
        email: "hi@gmail.com"
    },
    {
        id: 2,
        email: "hello@gmail.com"
    },
    {
        id: 3,
        email: "hey@gmail.com"
    }
]

console.log(userData[2].email);

console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(user.hasOwnProperty("isLoggedIn"));

const course = {
    courseName: "JavaScript",
    price: "1000",
    courseInstructor: "Palwasha"
}

const {courseInstructor: ci} = course
console.log(ci);
