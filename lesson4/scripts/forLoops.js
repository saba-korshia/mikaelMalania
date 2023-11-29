let arrayOfStudents = ["soso", "davit", "sopo", "irakli", "nia"];

let firstName = "giorgi";

// for (let count = 0; count < firstName.length; count = count + 1) {
//     console.log(firstName[count], count);
// };

// for (let count = 0; count < arrayOfStudents.length; count++) {
//     console.log(arrayOfStudents[count], count);
// };

// let fruits = ["apple", "bannana", "grape", "pinapple"]

// for (let fruit of fruits) {
//     console.log(fruit);
// }

let userPass = "Abcde123";

let checker = false;

let numbers = [1,2,3,4,5,6,7,8,9,0];

for (let letter of userPass) {
    // if (letter === "1" || letter === "2" || letter === "3") {
    //     checker = true;
    // }

    if (numbers.includes(Number(letter))) {
        continue;
        // break;
    }
}

// if (checker === true) {
//     console.log("Password contains an number");
// } else {
//     console.log("password does not contain an number");
// }
