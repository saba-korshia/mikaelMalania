// object methods

let person = {
    firstName: "Peter",
    lastName: "Johnson",
    age: 25,
    children: ["Jake", "Ann", "Nick"],
    address: {
        street: "123 Main St",
        city: "Boston",
        state: "MA"
    },
};

// console.log(person.children[1]);

person.isMarried = true;

person["weight"] = 80;

// console.log(person);

delete person.weight;
delete person.address;

console.log(person);