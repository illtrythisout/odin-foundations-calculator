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
    if (b === 0) {
        return "Error"
    } else {
        return a / b
    }
}

let num1 = "";
let operator = "";
let num2 = "";

const primaryDisplay = document.querySelector("#primaryNum");

const scndNum1 = document.querySelector("#scndNum1");
const scndOp1 = document.querySelector("#scndOp1");
const scndNum2 = document.querySelector("#scndNum2");
const scndOp2 = document.querySelector("#scndOp2");
const scndNum3 = document.querySelector("#scndNum3");
const scndOp3 = document.querySelector("#scndOp3");

let secondaryAnswers = [];
let secondaryAnsOperator = [];
let currentNum = "";

function addToSecondaryArray() {
    secondaryAnswers.unshift(currentNum);
    currentNum = "";
    secondaryAnsOperator.unshift(operator);
    if (secondaryAnswers.length > 3) {
        secondaryAnswers.pop();
    }
    if (secondaryAnsOperator.length > 4) {
        secondaryAnsOperator.pop();
    }

    scndNum1.textContent = secondaryAnswers[0];
    scndOp1.textContent = secondaryAnsOperator[1];
    scndNum2.textContent = secondaryAnswers[1];
    scndOp2.textContent = secondaryAnsOperator[2];
    scndNum3.textContent = secondaryAnswers[2];
    scndOp3.textContent = secondaryAnsOperator[3];

    console.log(secondaryAnswers)
    console.log(secondaryAnsOperator)
}

// Execute operation function based on the chosen operator
function operate(num1, operator, num2) {
    num1 = Number(num1)
    num2 = Number(num2)
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

// Un-highlight operator buttons
function unHighlight() {
    buttons.forEach(btn => {btn.style.backgroundColor = "rgb(240, 240, 240)"})
}

const buttons = document.querySelectorAll("button");
buttons.forEach(btn => {
    btn.addEventListener("click", () => { // number and decimal point buttons
        if (!isNaN(btn.value) || btn.value === ".") {
            if (operator) {
                num2 += btn.value;
                primaryDisplay.textContent = num2;
            } else {
                num1 += btn.value;
                primaryDisplay.textContent = num1;
            }
            currentNum += btn.value;

            unHighlight()

        } else if (btn.className === "operator") { // operator buttons
            if (num1 && num2) {
                num1 = operate(num1, operator, num2);
                num2 = "";
                primaryDisplay.textContent = num1;
            }
            operator = btn.value;

            // highlight background
            buttons.forEach(btn => {btn.style.backgroundColor = "rgb(240, 240, 240)"})
            btn.style.backgroundColor = "rgb(220, 220, 220)"

            addToSecondaryArray();

        } else if (num1 && operator && num2) { // equal button
            num1 = operate(num1, operator, num2);
            num2 = "";
            primaryDisplay.textContent = num1;
            operator = ""

            addToSecondaryArray();

            unHighlight()

        } else if (btn.value === "ac") { // clear button
            num1 = "";
            operator = "";
            num2 = "";
            primaryDisplay.textContent = "0";

            unHighlight()

        } else if (btn.value === "del") { // backspace button
            if (num2) {
                num2 = num2.slice(0, -1);
                primaryDisplay.textContent = num2 || 0;
            } else if (operator) {
                operator = ""
            } else if (num1) {
                num1 = num1.slice(0, -1);
                primaryDisplay.textContent = num1 || 0;
            }

            unHighlight()
        }
    })
})