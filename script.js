function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

let num1 = 0;
let operator = 0;
let num2 = 0;

// Execute operation function based on the chosen operator
function operate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
}

const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");

zero.addEventListener("click", () => {
    num2 = num2 + "0"
    console.log(parseInt(num2))
})
one.addEventListener("click", () => {
    num2 = num2 + "1"
    console.log(parseInt(num2))
})
two.addEventListener("click", () => {
    num2 = num2 + "2"
    console.log(parseInt(num2))
})
three.addEventListener("click", () => {
    num2 = num2 + "3"
    console.log(parseInt(num2))
})
four.addEventListener("click", () => {
    num2 = num2 + "4"
    console.log(parseInt(num2))
})
five.addEventListener("click", () => {
    num2 = num2 + "5"
    console.log(parseInt(num2))
})
six.addEventListener("click", () => {
    num2 = num2 + "6"
    console.log(parseInt(num2))
})
seven.addEventListener("click", () => {
    num2 = num2 + "7"
    console.log(parseInt(num2))
})
eight.addEventListener("click", () => {
    num2 = num2 + "8"
    console.log(parseInt(num2))
})
nine.addEventListener("click", () => {
    num2 = num2 + "9"
    console.log(parseInt(num2))
})

// listen to when user presses button
// put it in num1
// display it on main screen
// if user presses another button, concatinate it to num1
// when user presses an operator
// turn num1 into a number
// store the operator in the operator variable
// if the user presses another variable, store that instead
// once user presses a number button again, add num 1 as the first number in the history array
// put the number the user pressed in num 2
// when user presses equal or another operator, show the ans and make num two the first in the history array