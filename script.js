let userInput = "";
let firstNumber = "";
let secondNumber = "";
//empty arr to store the two numbers
//try adding numbers to the arr instead of two variables
let arr = [];
//set arr max length to 2
const container = document.querySelector(".container");
//populate display
const input = document.querySelector("input");
for (const element of document.querySelectorAll(".number")) {
    element.addEventListener("mousedown", () => {
        input.value += element.textContent;
    });
}

//FUCKING FINALLY
//just to wait till user pressed an operator :sob:
//now need to wipe input value
//wait for second number
//add to array?
//call appropriate functions
//display results
//add [0] to firstNumber and [1] to second

const operators = document.querySelector(".operator");
for (const element of document.querySelectorAll("#plus")) {
    element.addEventListener("mousedown", () => {
        arr.push(input.value);
        //splice items if arr contains more than 2 items
        arr.splice(2);
        input.value = "";
        console.log(arr);
    });
}

//clear display button
document.querySelector("#clear").addEventListener("mousedown", () => {
    input.value = "";
    //reset array to zero
    arr.length = 0;
});

//if equals button pressed, call appropriate function on number with operate
document.querySelector("#equals").addEventListener("mousedown", () => {});
function operate(numOne, numTwo) {}

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
