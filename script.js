let firstNumber = 0;
let secondNumber = 0;
const container = document.querySelector(".container");

let userInput = "";
const input = document.querySelector("#input");

document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", btnAction);
});

function btnAction(event) {
    const btn = event.target;
    console.info("button:", btn.textContent, btn);
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
