//created variables for the numbers and operator selection
let num1 = 0;
let num2 = 0;
let choice;

//function to add two numbers

addition = (num1, num2) => {
    return Number(num1) + Number(num2);
}

//function for subtracting two numbers
subtraction = (num1,num2) => {
    return Number(num1) - Number(num2);
}

//function for multiplying two numbers
multiply = (num1,num2) => {
    return Number(num1) * Number(num2);
}

//function for dividing two numbers 
divide = (num1,num2) => {
    return Number(num1) / Number(num2);
}

//function to select calculation needed based on operator selected
operator = (choice, num1, num2) => {
    if (choice === '+') {
        return addition(num1, num2);
    } else if (choice === '-') {
        return subtraction(num1, num2);
    } else if (choice === '*') {
        return multiply(num1, num2);
    } else if (choice === '/') {
        return divide(num1, num2);
    } else {
        return 'Invalid operator';
    }
}