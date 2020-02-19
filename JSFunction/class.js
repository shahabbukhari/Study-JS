// Class
/*
classes are the blue prints to create a an object
sometimes you need many objects of same type(same specification , bahavior) that's where class come in handy  
this is refer to the new instances of the class
they are like functions with constructor and they dont have hoisting like functions 
*/

class Rectangle {
    constructor(h, w) {
        this.height = h;
        this.width = w;
        console.log(`Rectangle is created`) 
    }
}
let square = new Rectangle(23,63);
let square1 = new Rectangle(27,22);
let square2 = new Rectangle(23,11);

console.log(square)
console.log(square1)
console.log(square2)

// Objects
/*
JavaScript objects are written in JavaScript Object Notation (JSON) 
a series of comma-separated key/value pairs between curly braces, 
which you can store in a variable:
*/

let car = {
    model: 'Toyota Hilux Vigo',
    length: 5.2,
    width: 1.8,
    color: 'black',
    fuel_capacity: 76
}

console.log(`${car.model} has fuel capacity of ${car.fuel_capacity}L`)


// Setso
// sets are like unordered list. you can usethem to store unique dataset 

let setA = new Set([2,2,1,4,6,7,8,6,55,33]); // 2.1.4.6.7.8.55.33
let setB = new Set([3,4,3,2,6,74,3,2,45]); // 3.4.2.6.74.45

// let combineSet = new Set(setB)

function union(setA,setB) {
    var _union = new Set(setA);
    for (var elem of setB) {
        _union.add(elem)
    }
    return _union
}

function intersection(setA,setB) {
    var _intersection = new Set();
    for (var elem of setB){
        if(setA.has(elem)) {
            _intersection.add(elem);
        }
    }
    return _intersection
}

function difference(setA,setB) {
    var _difference = new Set(setA);
    for (var elem of setB) {
        if(setA.has(elem)) {
            _difference.delete(elem)
        } else {
            _difference.add(elem)
        }
    }
    return _difference;
}

console.log(union(setA,setB))
console.log(intersection(setA,setB))
console.log(difference(setA,setB))