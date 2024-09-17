let userInput = "";
let firstNumber = "";
let secondNumber = "";
const array = [];

//empty arr to store the two numbers
//try adding numbers to the arr instead of two variables

//set arr max length to 2
const container = document.querySelector(".container");
//populate display
const input = document.querySelector("input");

for (const element of document.querySelectorAll(".number")) {
    element.addEventListener("mousedown", () => {
        input.value += element.textContent;
    });
}

//add [0] to firstNumber and [1] to second
//add the result to a results var at the end of each function that gets called when the user presses = ??
//find out how to use splice to only evaluate 2 numbers at a time
//push number, when two values in array, call function?
for (let element of document.querySelectorAll(".operator")) {
    element.addEventListener("mousedown", () => {
        array.push(input.value);
        input.value = "";
    });

    //if operator == "+" call function?
}

//clear display button
document.querySelector("#clear").addEventListener("mousedown", () => {
    input.value = "";
    array.lengths = 0;
    //reset array to zero
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
