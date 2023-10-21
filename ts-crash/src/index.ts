/* Use these command in command line */
// 'tsc --watch' to keep watching the code
// 'tsc --init' to create 'tsconfig.json' file. Then, change "target" to such "target": "es6"
// 'tsc' to compile all typescript files

/* In tsconfig */
// Config "target" to such "target": "es6"
// Change "outDir" to "outDir": "./dist" for the compile JS location
// Change "rootDir" to "rootDir": "./src" for source code

/* ----- Basic Types ----- */
let id: number = 5; // Number
let username: string = "Zukkii"; // String
let isHandsome: boolean = true; // boolean
let something: any = true; // any
something = "Titann";

let ids: number[] = [1, 2, 3, 4, 5]; // Array of Numbers

/* ----- Tuple ----- */
// Need to follow the order
let person: [number, string, boolean] = [6, "Zukkii", true];
// Tuple array of arrays
let employee: [number, string][];
employee = [
    [1, "Zukkii"],
    [2, "Titann"],
    [3, "Kinkin"],
];

/* ----- Union ----- */
// Type might be different (according on what are assigned)
let productId: string | number;
productId = 22;
productId = "22";

/* ----- ENUM ----- */
enum DIRECTION {
    NORTH,
    EAST,
    SOUTH,
    WEST,
}
console.log(DIRECTION.EAST);
// expect --> 1 when run (run from '.js')
// The default value start at 0
enum FACT {
    TRUE = 2,
    FALSE,
}
console.log(FACT.FALSE);
// expect --> 3 when run (run from '.js')
// The value is start from '2' as it was assigned
enum DIRECTION2 {
    NORTH = "north",
    EAST = "east",
    SOUTH = "south",
    WEST = "west",
}
console.log(DIRECTION2.EAST);
// Can also assign other type as well
// expect "east" whne run

/* ----- Object ----- */
type User = {
    id: number;
    name: string;
};
const user: User = {
    id: 1,
    name: "Titann",
};

/* ----- Interface ----- */
interface UserInterface {
    readonly id: number; // <-- 'readonly' will not allow this value to be changed
    name: string;
    age?: number; // <-- '?' makes this element optional. Without '?', user1 will show error since it doesn't have 'age' declare
}

const user1: UserInterface = {
    id: 2,
    name: "Zukkii",
};

// user1.id = 3 // <-- will not be able to reassign sine 'readonly' was applied
// user1.name = "Kinkin" // <-- the name will be reassigned

// interface function
interface MathFunc {
    // take 'x' and 'y' as 'number'. Return string
    (x: number, y: number): string;
}

const add: MathFunc = (x: number, y: number): string => (x + y).toString();
const sub: MathFunc = (x: number, y: number): string => (x - y).toString();
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
let customerId: any;

// varible 'as' type
let customer_1_id = customerId as string;
customer_1_id = "1";
console.log(customer_1_id, typeof customer_1_id);

// <type>varible
let customer_2_id = <number>customerId;
customer_2_id = 2;
console.log(customer_2_id, typeof customer_2_id);

/* ----- Function ----- */
// function functionName(x: type, y: type): type {
//     return value;
// }
function addNumber(x: number, y: number): number {
    return x + y;
}
console.log(addNumber(2, 4));
// Return void type
function log(message: string | number): void {
    console.log(message);
}
log("Kinkin");

/* Classes */
class Person {
    // Access modifires can be applied
    private id: number; // can be accessed only in te class
    name: string; // by default, it's public
    protected lastname: string;
    isRegistered: boolean;

    // constructor will run whenever the class is instantiated
    constructor(
        id: number,
        name: string,
        lastname: string,
        isRegistered: boolean
    ) {
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

interface EmployeeInterface {
    id: number;
    name: string;
    register(): string;
}

// Superclass / parent class
class Employee implements EmployeeInterface {
    id: number;
    name: string;

    constructor(id: number, name: string) {
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
    position: string;

    constructor(id: number, name: string, position: string) {
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
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numArr = getArray<number>([1, 2, 3, 4]);
let strArr = getArray<string>(["A", "B", "C"]);
