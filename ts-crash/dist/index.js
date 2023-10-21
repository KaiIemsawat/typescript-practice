"use strict";
/* Use these command in command line */
// 'tsc --watch' to keep watching the code
// 'tsc --init' to create 'tsconfig.json' file. Then, change "target" to such "target": "es6"
// 'tsc' to compile all typescript files
/* In tsconfig */
// Config "target" to such "target": "es6"
// Change "outDir" to "outDir": "./dist" for the compile JS location
// Change "rootDir" to "rootDir": "./src" for source code
/* ----- Basic Types ----- */
let id = 5; // Number
let username = "Zukkii"; // String
let isHandsome = true; // boolean
let something = true; // any
something = "Titann";
let ids = [1, 2, 3, 4, 5]; // Array of Numbers
/* ----- Tuple ----- */
// Need to follow the order
let person = [6, "Zukkii", true];
// Tuple array of arrays
let employee;
employee = [
    [1, "Zukkii"],
    [2, "Titann"],
    [3, "Kinkin"],
];
/* ----- Union ----- */
// Type might be different (according on what are assigned)
let productId;
productId = 22;
productId = "22";
/* ----- ENUM ----- */
var DIRECTION;
(function (DIRECTION) {
    DIRECTION[DIRECTION["NORTH"] = 0] = "NORTH";
    DIRECTION[DIRECTION["EAST"] = 1] = "EAST";
    DIRECTION[DIRECTION["SOUTH"] = 2] = "SOUTH";
    DIRECTION[DIRECTION["WEST"] = 3] = "WEST";
})(DIRECTION || (DIRECTION = {}));
console.log(DIRECTION.EAST);
// expect --> 1 when run (run from '.js')
// The default value start at 0
var FACT;
(function (FACT) {
    FACT[FACT["TRUE"] = 2] = "TRUE";
    FACT[FACT["FALSE"] = 3] = "FALSE";
})(FACT || (FACT = {}));
console.log(FACT.FALSE);
// expect --> 3 when run (run from '.js')
// The value is start from '2' as it was assigned
var DIRECTION2;
(function (DIRECTION2) {
    DIRECTION2["NORTH"] = "north";
    DIRECTION2["EAST"] = "east";
    DIRECTION2["SOUTH"] = "south";
    DIRECTION2["WEST"] = "west";
})(DIRECTION2 || (DIRECTION2 = {}));
console.log(DIRECTION2.EAST);
const user = {
    id: 1,
    name: "Titann",
};
const user1 = {
    id: 2,
    name: "Zukkii",
};
const add = (x, y) => (x + y).toString();
const sub = (x, y) => (x - y).toString();
console.log(add(2, 6), typeof add(2, 6));
console.log(sub(2, 6), typeof sub(2, 6));
/* Type vs Interface */
// Type / Interface
// interface is very similar to 'type'
// inter can't be used with primitive types
// example ----
// type SampleType = number | string;
// const varible_1 = 1 // <-- this will work
// interface SampleInterface = number | string // <-- There will be error
/* ----- Type Assertion ----- */
// Type Casting
// Can be done 2 ways
let customerId;
// varible 'as' type
let customer_1_id = customerId;
customer_1_id = "1";
console.log(customer_1_id, typeof customer_1_id);
// <type>varible
let customer_2_id = customerId;
customer_2_id = 2;
console.log(customer_2_id, typeof customer_2_id);
/* ----- Function ----- */
// function functionName(x: type, y: type): type {
//     return value;
// }
function addNumber(x, y) {
    return x + y;
}
console.log(addNumber(2, 4));
// Return void type
function log(message) {
    console.log(message);
}
log("Kinkin");
/* Classes */
class Person {
    // constructor will run whenever the class is instantiated
    constructor(id, name, lastname, isRegistered) {
        // 'this' refer to the class
        this.id = id; // the last 'id' refer to the constructor argument 'id'
        this.name = name;
        this.lastname = lastname;
        this.isRegistered = isRegistered;
        console.log(`The id is ${this.id}, The name is ${name}`);
    }
    register() {
        this.isRegistered = !this.isRegistered; // need to use 'this.isRegistered', can not use 'isRegistered'
        return `${this.name} : registered : ${this.isRegistered}`;
    }
}
// instantiate
const titann = new Person(4, "Titan", "Iem", false); // constructor instantiate test
const zukkii = new Person(6, "Zukk", "Iem", true); // constructor instantiate test
// titann.id = 5; // this will not work since 'id' was declared 'private'
titann.name = "Titann";
console.log("\nObject 1 : ", titann, "\nObject 2 : ", zukkii); // Titann still has 'false' for register
titann.register();
console.log("\nObject 1 : ", titann, "\nObject 2 : ", zukkii); // Titann register status becomes 'true'
// Superclass / parent class
class Employee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        // Need to return 'string' since it was declared as a string in the interface
        return `${this.name} has the id of : ${this.id}`;
    }
}
// Subclass / child class
class Employee2 extends Employee {
    constructor(id, name, position) {
        super(id, name); // use 'super(id, name) instead of this.id = id; this.name = name
        this.position = position;
    }
}
const emp = new Employee2(3, "Kinkin", "Boss");
console.log("\n", emp);
console.log(emp.register());
/* ----- Generics ----- */
// Act like 'placeholder'
// used to create 'reusable' component
function getArray(items) {
    return new Array().concat(items);
}
let numArr = getArray([1, 2, 3, 4]);
let strArr = getArray(["A", "B", "C"]);
