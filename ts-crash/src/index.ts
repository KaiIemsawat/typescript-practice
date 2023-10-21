/* Use these command in command line */
// 'tsc --watch' to keep watching the code
// 'tsc --init' to create 'tsconfig.json' file. Then, change "target" to such "target": "es6"
// 'tsc' to compile all typescript files

/* In tsconfig */
// Config "target" to such "target": "es6"
// Change "outDir" to "outDir": "./dist" for the compile JS location
// Change "rootDir" to "rootDir": "./src" for source code

/* Basic Types */
let id: number = 5; // Number
let username: string = "Zukkii"; // String
let isHandsome: boolean = true; // boolean
let something: any = true; // any
something = "Titann";

let ids: number[] = [1, 2, 3, 4, 5]; // Array of Numbers

/* Tuple */
let person: [number, string, boolean] = [6, "Zukkii", true];
