const power = function(base,expotent) {
    let result = 1;
    for(let count = 0; count < expotent; count++) {
        result *= base;
    }
    return result
}
console.log(power(2,10))
// → 1024

// Declaration notation
console.log("The future says:", future());
function future() {
    return "You'll never have flying cars";
}
// → The future says: You'll never have flying cars
// its works eve though its define bellow becouse it when code starts working it move functions to top of the code

// Arrow Function
let userName = 'Shahab'
let welcome = name => console.log(`Welcome: ${name}`);
welcome(userName)
// → Welcome: Shahab
// when there is only one parameter/statement you can omit parenthisis/braces

// Call Stack
function greet(who) {
    console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");
// → Hello Harry
// → Bye
// Computers must remember the context from where its called. the place where it stores contexts its called call stack
// when a function executes it stores context on top of the stack and when functio returns it removes the context from top of the stack

// function chicken() {
//     return egg();
// }
// function egg() {
//     return chicken();
// }
// console.log(chicken() + " came first.");
// → shows some eror because of stack overload

// Optional Arguments
function square(x) { return x * x; }
console.log(square(4, true, "hedgehog"));
// → 16
// It works eventhough we defined only one argument bcz JS is ignored the other extra arguments
// If you pass too many arguments it ignores others and if you pass too few, the missing parameters assign as undefined

function minus(a,b) {
    if(b === undefined) return -a;
    else return b - a;
}
console.log(minus(10))
// → -10
console.log(minus(8,10))
// → 2

// Backup Parameter
function squareBackup(base,expotent = 1) {
    let result = 1;
    for(let a = 0; a < expotent; a++) {
        result *= base;
    }
    return result;
}
console.log(squareBackup(2))
// → 2
console.log(squareBackup(2,3))
// → 8
// = after a parameter asign the value to the parameter if you didn't pass any parametter rather than defining it to undefind

// Closure
// the abbiliy to treat a function as value
function parent() {
    let a = 23;
    return function () {
        console.log('Value of a from parent function', a)
    }
}
let saved = parent();
saved()
