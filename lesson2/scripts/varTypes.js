// variable types

let a = 1; // Number data type / integer
let b = 2.5; // Number data type / float
let c = '3.8'; // String data type
let firstName = 'John'; // String data type
let isMarried = false; // true
let lastName = undefined; // undefined
let middleName = null;
let withoutValue;

// string to number 

// let userInput = prompt("Enter your birth year:");

// let birthYear = Number(userInput); // converts string to number

// console.log(2023 - birthYear, typeof birthYear);

// number to string
let num = 2023;
let numberAsString = String(num);
console.log(numberAsString + "2023", typeof numberAsString);

// data type to boolean
let bool = Boolean(num); // 0, null, undefined, NaN, "" -> false
console.log(bool, typeof bool);

let bool2 = Boolean("0");
console.log(bool2, typeof bool2);

let bool3 = Boolean(0);
console.log(bool3, typeof bool3);