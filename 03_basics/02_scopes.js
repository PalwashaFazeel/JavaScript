var c = 300
let a = 400

if(true){
    let a = 10
    const b = 20
    var c = 30
    console.log(a);
}

console.log(c);
console.log(a);

function one(){
    const username = "Palwasha"
    function two() {
        const website = "YouTube"
        console.log(username);
    }
    // console.log(website);
    two()
}

one()

if(true){
    const username = "Palwasha"
    if(username == "Palwasha"){
        const website = " YouTube"
        console.log(username + website);
    }
}

/*
Intresting
*/

addOne(5)

function addOne(num){
    return num + 1
}

// addTwo(5)

const addTwo = function(num){
    return num + 2
}

addTwo(5)