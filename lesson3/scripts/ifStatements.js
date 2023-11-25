// if statements

let firstShopOpen = true;

let secondShopOpen = false;

// if (firstShopOpen === true) {
//     console.log('Great!, I can buy some bread.', 1);
// } else if (secondShopOpen === true) {
//     console.log('Great!, I can buy some bread.', 2);
// } else {
//     console.log('Oh no!, I cannot buy any bread.', 3);
// };

let studentScoreA = 50;
let studentScoreB = 53;
let studentScoreC = 71;
let studentScoreD = 82;

let passMark = 50;

// if (studentScoreA >= passMark) {
//     console.log('Student A has passed the exam.', 1);
// } else {
//     console.log('Student A has failed the exam.', 2);
// };

// if (studentScoreA >= passMark && studentScoreB >= passMark && studentScoreC >= passMark && studentScoreD >= passMark) {
//     console.log('All students have passed the exam.', 3);
// } else {
//     console.log('Not all students have passed the exam.', 4);
// }

// if (studentScoreA >= passMark || studentScoreB >= passMark || studentScoreC >= passMark || studentScoreD >= passMark) {
//     console.log('At least one student has passed the exam.', 5);
// } else {
//     console.log('No students have passed the exam.', 6);
// }

// does not equal

let studentScoreE = 50;
// if ("5" == 5) {
//     console.log('They are not equal.', 1);
// } else {
//     console.log('They are equal.', 2);
// }
// if (studentScoreE !== 50) {
//     console.log('Student E has passed the exam.', 7);
// } else {
//     console.log('Student E has failed the exam.', 8);
// }

let temperature = 25;
let isRaining = true;

if (temperature > 30) {
    console.log("It's a hot day!");
    if (isRaining) {
        console.log("But it's also raining.");
    } else {
        console.log("And it's not raining.");
    }
} else if (temperature <= 30 && temperature >= 20) {
    console.log("It's a pleasant day!");
    if (isRaining) {
        console.log("But it's raining.");
    } else {
        console.log("And it's not raining.");
    }
} else {
    console.log("It's a cold day!");
}
