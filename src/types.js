// Arrays
// let num_array: number[] = [1, 2, 3, 4, 5, 6, 7, 89];
// num_array.push(100); // * Valid
// num_array.push('meow'); // ! Invalid
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var num_array1 = [1, false, 2, 3, 4, 5, 6, 7, 89];
// num_array1.push('Hello'); // * Valid
// Tuple
var person = [1, 'Brad', true]; // * Valid
// let person1: [number, string, boolean] = [1, 'Brad', 2]; // ! Invalid
// Tuple Array
var employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill'],
];
// Union
var pass = 'Cool121';
pass = 12345; // * valid
// pass = false;  // ! invalid
// Objects
// way #1.
var human = {
    color: 'Black',
    height: "6'1",
    weight: 90
};
var human1 = {
    color: 'Black',
    height: "6'1",
    weight: 90
};
// Type Assertion.
var uid = '@#12345';
var userId = uid; // way #1
var userId1 = uid; // way #2
userId = 1222;
// Functions.
function add(num1, num2) {
    return num1 + num2;
}
var addNums = function (x, y) { return x + y; };
var Person = /** @class */ (function () {
    function Person(id, name, lastname) {
        (this.id = id), (this.name = name), (this.lastname = lastname);
    }
    Person.prototype.register = function () {
        return "".concat(this.name, " was successfully registered.");
    };
    return Person;
}());
var ram = new Person(1, 'Ram', 'Suryavanshi');
console.log(ram.register());
// Extending Class.
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, lastname, designation) {
        var _this = _super.call(this, id, name, lastname) || this;
        _this.designation = designation;
        return _this;
    }
    return Employee;
}(Person));
var ved = new Employee(1, 'Vedant', 'Manjrekar', 'Developer');
console.log(ved.register(), ved.designation);
// Generics
// normal
function numArray(items) {
    return items;
}
// with genrerics
function strArray(items) {
    return items;
}
// normal
var numArr = numArray([1, 2, 3, 4, 5, 6]);
var strArr = strArray(['apple', 'ball']);
// with genrerics
numArr.push('aaa');
strArr.push('cat'); // valid
// strArr.push(12); // invalid
