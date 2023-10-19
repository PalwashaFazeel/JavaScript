// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Palwasha",
    "fullname": "Palwasha Fazeel Ahmed",
    [mySym]: "mykey1",
    age: 20,
    location: "Lucknow",
    email: "palwasha@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["fullname"]);
// console.log(JsUser.fullname);
// fullname cannot be accessed using this method
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);

JsUser.email = "palwasha@microsoft.com"
//Object.freeze(JsUser)
//JsUser.email = "palwasha@chatgpt.com"
console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello JS user");
}   
JsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
console.log(JsUser);