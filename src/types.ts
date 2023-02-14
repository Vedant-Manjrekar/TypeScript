// Arrays
let num_array: number[] = [1, 2, 3, 4, 5, 6, 7, 89];
// num_array.push(100); // * Valid
// num_array.push('meow'); // ! Invalid

let num_array1: any[] = [1, false, 2, 3, 4, 5, 6, 7, 89];
// num_array1.push('Hello'); // * Valid

// Tuple
let person: [number, string, boolean] = [1, 'Brad', true]; // * Valid
// let person1: [number, string, boolean] = [1, 'Brad', 2]; // ! Invalid

// Tuple Array
let employee: [number, string][];

employee = [
  [1, 'Brad'], // number and string
  [2, 'John'],
  [3, 'Jill'],
];

// Union
let pass: number | string = 'Cool121';
pass = 12345; // * valid
// pass = false;  // ! invalid

// Objects
// way #1.
let human: { color: string; height: string; weight: number } = {
  color: 'Black',
  height: "6'1",
  weight: 90,
};

// way #2.
// type human = {
//   color: string;
//   height: string;
//   weight: number;
// };

interface human1 {
  color: string;
  height: string;
  weight: number;
}

let human1: human1 = {
  color: 'Black',
  height: "6'1",
  weight: 90,
};

// Type Assertion.
let uid: any = '@#12345';

let userId = <number>uid; // way #1
let userId1 = uid as number; // way #2

userId = 1222;
