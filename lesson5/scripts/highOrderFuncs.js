// high order functions

// 1. filter

let personsDb = [
    { name: 'John', age: 25, children: [{name: 'anna', age: 12}, {name: 'george', age: 15}] },
    { name: 'Ann', age: 24, children: [{name: 'john', age: 12}, {name: 'george', age: 15}] },
    { name: 'George', age: 15, children: [{name: 'anna', age: 12}, {name: 'john', age: 15}, {name: 'Luke', age: 17}] },
    { name: 'Helen', age: 35, children: [{name: 'anna', age: 12}, {name: 'george', age: 15}, {name: 'Peter', age: 14}] },
]

let personsWithMoreThanTwoChildren = personsDb.filter(person => person.children.length > 2)
let personsWithMoreThanTwoChildrenV3 = personsDb.filter(person => {
    // 1. children with the age above 12
    // 2. person with age above 20

    let childrenAbove12 = person.children.filter(child => child.age > 12); // []
    let personAbove20 = person.age > 20;

    person.children = childrenAbove12;

    // console.log(person.name,childrenAbove12)
    return childrenAbove12.length > 0 && personAbove20;
})

// console.log(personsWithMoreThanTwoChildrenV3)

let personsWithMoreThanTwoChildrenV1 = personsDb.filter(function(person) { return person.children.length > 2 })

let personsWithMoreThanTwoChildrenV2 = [];

for (let i = 0; i < personsDb.length; i++) {
    if (personsDb[i].children.length > 2) {
        personsWithMoreThanTwoChildrenV2.push(personsDb[i]);
    }
}

// console.log(personsWithMoreThanTwoChildrenV2);

// 2. map

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbersSquared = numbers.map(number => {return number * number});

// console.log(numbersSquared);

let tempInFahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

let tempInCelsius = tempInFahrenheit.map(temp => {
    let tempInCelsius = (temp - 32) * 5 / 9;
    let roundedTemp = Math.round(tempInCelsius);
    return roundedTemp;
});

// console.log(tempInCelsius);

// 3. reduce

let expenses = [100, 200, 300, 400, 500, 600, 700, 800, 900];

let totalExpensesV1 = expenses.reduce((accumulator, currentValue) => {
    console.log(accumulator, currentValue); 
    return accumulator + currentValue;
}, 0);

// console.log(totalExpensesV1);

let totalExpenses = expenses.reduce((total, expense) => {
    return total + expense;
}, 0);

