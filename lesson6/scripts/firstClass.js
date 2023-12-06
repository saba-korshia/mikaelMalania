// classes in javascript
let name = "aksdkmaksd";

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getAge() {
        let userAge = this.age;
        return userAge;
    }

    getName() {
        return this.name;
    }
}

let user1age = 30;

// new instance of Person class
let person = new Person("John", 30);

// console.log(person.getName());
// console.log(person.getAge());

// extend Employee class from Person class
class Employee extends Person {
    constructor(name, age, salary, employeeId) {
        super(name, age);
        this.salary = salary;
        this.EmployeeId = employeeId;
    }

    getEmployeeId() {
        return this.EmployeeId;
    }

    getSalary() {
        return this.salary;
    }
}

class Manager extends Employee {
    constructor(name, age, salary, employeeId, department) {
        super(name, age, salary, employeeId);
        this.department = department;
    }

    getDepartment() {
        return this.department;
    }
}

let employee1 = new Employee("George", 30, 10000, "EA-1234");

// console.log(employee1.getEmployeeId());
// console.log(employee1.getSalary());
// console.log(employee1.getName());
// console.log(employee1.getAge());

let manager1 = new Manager("John", 30, 10000, "EA-1234", "IT");
console.log(manager1.getName());

