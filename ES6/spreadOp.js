// spread operator. 
/*
The operator’s shape is three consecutive dots and is written as: ...
Spread value in an array or object or function
*/

// Example 1 Array
console.log('Spread Operater on an Arrays:')

// Part 1: Spreading values
let numbers = [1,2,2,2];
// But now i want some more elements in new array including previouce ones
let moreNumbers = [...numbers,2,22,3,3,3]
console.log(moreNumbers)

// Part 2: Array Refrence
let names = ['Ali','Hussain','Hasan','Umar'];
let newNames = names
names.push('Abu Bakar')
console.log(names)
console.log(newNames)
/*
As We know array is a refrence type and when we assign an refrence type to new variable it assign 
its refrence to variable not the values of the array becaouse of this when we change something in 
a variable it will effect the original one. Spread Operater resolves this issue now 
*/
let spreadNames = [...names];
spreadNames.push('Usman')
console.log(names)
console.log(spreadNames)

// Example 2 Objects
console.log('Spread Operater on an Objects:')

let person = {
    name: 'Shahab',
    age: 21,
    married: false 
}
// Now i want to create another object with same specifications but Married
let person2 = {
    ...person,
    married: true
}
// Lets see
console.log(person)
console.log(person2)

// Example 3 Functions
console.log('Spread Operater on an Functions:')

let num = [3,2,34];
// get total
function total(num1,num2,num3) {
    return num1 + num2 + num3
}

// We don't have to assign each parameter
console.log(total(...num));