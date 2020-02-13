// Special Numbers
// Infinity , -Infinity & NaN
// these numbers don't give a meaningfull result

// Unary Operatore
// Operrates with one value
console.log(`typeof 8 ${typeof 8}`)
console.log(`!true(means not true) ${!true} `)
// only - use as unary as well as binary operator
console.log(`typeof 8 ${- (8 * 8)}`)

// Empty Values
// undefined & null

// Weired parts
console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true

console.log(null || "user")
// → user
console.log("Agnes" || "user")
// → Agnes

// in this if the first value is not true then it shows the second one it helpfull when ypu wanna know and check is the first value is empty. &&  works other way out
 
// ternary operator 
// ( ? : ) to pick one of two values based on a third value. if true it picks first one if false it picks second one

console.log(true ? 1:2)
// → 1
console.log(false ? 1:2)
// → 2
