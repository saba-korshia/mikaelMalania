// arrays and objects

let names = ["John", "Jane", "Mary", "Mike", 1975, true, undefined, null, "jake"];

let twoDArray = [ [1, 2, 3], [4, 5, 6], [7, 8, 9,] ];

let creatures = [['dog', 'cat', 'cow'], ['shark', 'whale', 'dolphin'], ['eagle', 'hawk', 'crow']];

// let userInput = prompt("Enter your name:");

// names.push(userInput);

names.pop();

names.pop();

// console.log(names.length);

names.shift();

names.unshift("Nick");

let fruits = ["apple", "banana", "orange", "kiwi"];

let slicedFruits = fruits.slice(1, 3);

// console.log(slicedFruits);

// console.log(fruits[fruits.length - 1]);

let vegetables = ["potato", "tomato", "cucumber", "onion"];

vegetables.splice(2, 2);

console.log(vegetables);
