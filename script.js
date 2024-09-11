let firstNumber = 0;
let secondNumber = 0;
let userInput = "";
const container = document.querySelector(".container");

document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", btnAction);
});
function btnAction(event) {
    const input = document.querySelector("input");
    const btn = event.target;
    input.value = "";
    (userInput += btn.textContent), btn;
    input.value += userInput;
}

function add(numOne, numTwo) {
    return numOne + numTwo;
}

function subtract(numOne, numTwo) {
    return numOne - numTwo;
}

function multiply(numOne, numTwo) {
    return numOne * numTwo;
}

function divide(numOne, numTwo) {
    return numOne / numTwo;
}
