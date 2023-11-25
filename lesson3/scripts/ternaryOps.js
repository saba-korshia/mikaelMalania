// ternary operators

let studentScore = 59;

let passMark = 50;

let hasPassed = studentScore >= passMark ? true : false;
console.log(hasPassed);
if (studentScore >= passMark) {
    console.log(true);
} else {
    console.log(false);
}

// nested ternary ops

let temperature = 25;

let result = temperature > 30 ? "It's a hot day!" : temperature < 10 ? "It's a cold day!" : "It's a moderate day!";
console.log(result);