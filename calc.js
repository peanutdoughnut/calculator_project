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
operator = (op, num1, num2) => {
    if (op === '+') {
        return addition(num1, num2);
    } else if (op === '-') {
        return subtraction(num1, num2);
    } else if (op === '*') {
        return multiply(num1, num2);
    } else if (op === '/') {
        return divide(num1, num2);
    } else {
        return 'Invalid operator';
    }
}