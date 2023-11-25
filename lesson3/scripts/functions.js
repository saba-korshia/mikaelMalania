function greeting() {
    console.log('Hello World!');
};

// greeting();

function calculator(num1, num2, equal) {
    if (equal === 'add') {
        console.log(num1 + num2);
    } else if (equal === 'subtract') {
        console.log(num1 - num2);
    } else if (equal === 'multiply') {
        console.log(num1 * num2);
    } else if (equal === 'divide') {
        console.log(num1 / num2);
    } else {
        console.log('Please enter a valid operator.');
    }
}

// calculator(5, 5, 'add');

function calculatorV2(num1, num2, equal) {
    switch (equal) {
        case 'add':
            console.log(num1 + num2);
            break;
        case 'subtract':
            console.log(num1 - num2);
            break;
        case 'multiply':
            console.log(num1 * num2);
            break;
        case 'divide':
            console.log(num1 / num2);
            break;
        default:
            console.log('Please enter a valid operator.');
            break;
    }
}

function calculatorV3(num1=1, num2=1, equal="add") {
    console.log(num1, num2, equal)
    if (equal === 'add') {
        return num1 + num2;
    } else if (equal === 'subtract') {
        return num1 - num2;
    } else if (equal === 'multiply') {
        return num1 * num2;
    } else if (equal === 'divide') {
        return num1 / num2;
    } else {
        return 'Please enter a valid operator.';
    }
}

console.log(calculatorV3());
// console.log(10+calculator(5, 2, 'subtract'));

let calculatorV4 = (num1, num2, equal) => {
    if (equal === 'add') {
        return num1 + num2;
    } else if (equal === 'subtract') {
        return num1 - num2;
    } else if (equal === 'multiply') {
        return num1 * num2;
    } else if (equal === 'divide') {
        return num1 / num2;
    } else {
        return 'Please enter a valid operator.';
    }
}

let calculatorV5 = function(num1, num2, equal) {
    if (equal === 'add') {
        return num1 + num2;
    } else if (equal === 'subtract') {
        return num1 - num2;
    } else if (equal === 'multiply') {
        return num1 * num2;
    } else if (equal === 'divide') {
        return num1 / num2;
    } else {
        return 'Please enter a valid operator.';
    }
}

console.log(calculatorV4(5, 5, 'add'));
console.log(calculatorV5(5, 5, 'add'));
