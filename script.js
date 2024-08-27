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

const primaryDisplay = document.querySelector("#primaryNum")

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

const buttons = document.querySelectorAll("button")
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        if (!isNaN(btn.value) || btn.value === ".") {
            if (operator) {
                num2 += btn.value;
                primaryDisplay.textContent = num2;
            } else {
                num1 += btn.value;
                primaryDisplay.textContent = num1;
            }
        } else if (btn.className === "operator") {
            if (num1 && num2) {
                num1 = operate(num1, operator, num2);
                num2 = "";
                primaryDisplay.textContent = num1;
            }
            operator = btn.value;
        } else if (num1 && operator && num2) {
            num1 = operate(num1, operator, num2);
            num2 = "";
            primaryDisplay.textContent = num1;
            operator = ""
        } else if (btn.value === "ac") {
            num1 = "";
            operator = "";
            num2 = "";
            primaryDisplay.textContent = "0";
        } else if (btn.value === "del") {
            if (num2) {
                num2 = num2.slice(0, -1)
                primaryDisplay.textContent = num2 || 0
            } else if (num1) {
                num1 = num1.slice(0, -1)
                primaryDisplay.textContent = num1 || 0
            }
        }
    })
})