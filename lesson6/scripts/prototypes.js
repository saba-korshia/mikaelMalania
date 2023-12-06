// prototypes in javascript

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old`;
}

let person1 = new Person("John", 30);

function Employee(name, age, salary, employeeId) {
    Person.call(this, name, age);
    this.salary = salary;
    this.employeeId = employeeId;
}

Employee.prototype.salary = function() {
    return this.salary;
}

let employee1 = new Employee("George", 30, 10000, "EA-1234");
// console.log(person1.sayHello());    

console.log(employee1.salary);