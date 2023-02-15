"use strict";
// Arrays
// let num_array: number[] = [1, 2, 3, 4, 5, 6, 7, 89];
// num_array.push(100); // * Valid
// num_array.push('meow'); // ! Invalid
let num_array1 = [1, false, 2, 3, 4, 5, 6, 7, 89];
// num_array1.push('Hello'); // * Valid
// Tuple
let person = [1, 'Brad', true]; // * Valid
// let person1: [number, string, boolean] = [1, 'Brad', 2]; // ! Invalid
// Tuple Array
let employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill'],
];
// Union
let pass = 'Cool121';
pass = 12345; // * valid
// pass = false;  // ! invalid
// Objects
// way #1.
let human = {
    color: 'Black',
    height: "6'1",
    weight: 90,
};
let human1 = {
    color: 'Black',
    height: "6'1",
    weight: 90,
};
// Type Assertion.
let uid = '@#12345';
let userId = uid; // way #1
let userId1 = uid; // way #2
userId = 1222;
// Functions.
function add(num1, num2) {
    return num1 + num2;
}
const addNums = (x, y) => x + y;
// Classes.
class Person {
    constructor(id, name) {
        (this.id = id), (this.name = name);
    }
    register() {
        return `${this.name} was successfully registered.`;
    }
}
let ram = new Person(1, 'Ram');
console.log(ram);
