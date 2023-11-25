// switch cases in javascript

let studentScoreA = 50;
let studentScoreB = 53;
let studentScoreC = 71;
let studentScoreD = 82;

let passMark = 50;

switch (studentScoreA >= passMark) {
    case true:
        console.log('Student A has passed the exam.', 1);
        break;
    case false:
        console.log('Student A has failed the exam.', 2);
        break;
    default:
        console.log('Something went wrong.');
        break;
};

