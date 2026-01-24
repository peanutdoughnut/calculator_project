//created variables for the numbers and operator selection
let num1 = null;
let num2 = null;
let choice;
let answer = null;
let currentInput = "";

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

//function for capturing numbers entered
pressNumber = (value) =>{
    currentInput += value;
    display.textContent = currentInput;
}

//function to take user input

// Get the display element
const display = document.querySelector('.display');

// Initialize display value
let displayValue = '';

// Function to update display
function updateDisplay() {
    display.textContent = displayValue;
}

// Add event listener for number 0
const zeroButton = document.querySelector('.zero');
zeroButton.addEventListener('click', () => pressNumber('0')
);

//add event listener for number 1
const oneButton = document.querySelector(".one");
oneButton.addEventListener('click', () => pressNumber('1'));

//add event listener for number two
const twoButton = document.querySelector(".two");
twoButton.addEventListener('click', () => pressNumber('2'));

//add event listener for button three
const threeButton = document.querySelector(".three");
threeButton.addEventListener('click', () => pressNumber('3'));

//add event listener for button four
const fourButton = document.querySelector(".four");
fourButton.addEventListener('click', () => pressNumber('4'));

//add event listener for button five
const fiveButton = document.querySelector(".five");
fiveButton.addEventListener('click', () => pressNumber('5'));

//add event listener for button six
const sixButton = document.querySelector(".six");
sixButton.addEventListener('click', () => pressNumber('6'));

//add event listener for button seven
const sevenButton = document.querySelector(".seven");
sevenButton.addEventListener('click', () => pressNumber('7'));

//add event listener for button eight
const eightButton = document.querySelector(".eight");
eightButton.addEventListener('click', () => pressNumber('8'));

//add event listener for button nine
const nineButton = document.querySelector(".nine");
nineButton.addEventListener('click', () => pressNumber('9'));

//add event listeners for operators
const plusButton = document.querySelector('.plus');
plusButton.addEventListener('click', () =>{
    num1 = Number(currentInput);
    choice='+';
    currentInput = "";
});

const minusButton = document.querySelector(".minus");
minusButton.addEventListener("click", () =>{
    num1 = Number(currentInput);
    choice = '-';
    currentInput = "";
});

const multiplyButton = document.querySelector(".multiply");
multiplyButton.addEventListener('click', () =>{
    num1 = Number(currentInput);
    choice = '*';
    currentInput = "";
});

const divideButton = document.querySelector('.divide');
divideButton.addEventListener('click', () =>{
    num1 = Number(currentInput);
    choice = '/';
    currentInput = "";
});

const equalsButton = document.querySelector('.equals')
equalsButton.addEventListener('click', () => {
    num2 = Number(currentInput);   // store second number
    answer = operator(choice, num1, num2);

    display.textContent = answer;

    // allow continued calculation
    currentInput = answer.toString();
    num1 = null;
    num2 = null;
    choice = null;
});

//add event listener for clear button
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    currentInput = "";
    num1 = null;
    num2 = null;
    choice = null;
    answer = null;
    display.textContent = "";
});