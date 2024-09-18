let userInput = "";
let firstNumber = "";
let secondNumber = "";
let result = [];
const array = [];

//empty arr to store the two numbers
//try adding numbers to the arr instead of two variables
const container = document.querySelector(".container");
//populate display
const input = document.querySelector("input");
for (const element of document.querySelectorAll(".number")) {
    element.addEventListener("mousedown", () => {
        input.value += element.textContent;
    });
}

//trying to make sure the value of the operator is not added to the array
//when you make the operators call the functions,
//PROBLEMS:
//need to make it ignore the operators as a "value"

for (let element of document.querySelectorAll(".operator")) {
    element.addEventListener("mousedown", () => {
        //use Number to convert string to Number
        array.push(Number(input.value));
        input.value = "";
    });
}

//display results after pressing equals
//still need to make it work for every operator it works, but need to be able to call
//each function when the button is pressed
for (let element of document.querySelectorAll("#equals", "#plus")) {
    element.addEventListener("mousedown", () => {
        result = add();
        input.value = result;
    });
}

for (let element of document.querySelectorAll("#equals", "#minus")) {
    element.addEventListener("mousedown", () => {
        result = subtract();
        input.value = result;
    });
}

for (let element of document.querySelectorAll("#equals", "divide")) {
    element.addEventListener("mousedown", () => {
        result = divide();
        input.value = result;
    });
}
for (let element of document.querySelectorAll("#equals", "#multiply")) {
    element.addEventListener("mousedown", () => {
        result = multiply();
        input.value = result;
    });
}

//refactor to use operate? instead
function operate(numOne, numTwo) {
    //take two numbers and call one of the functions on them
}

//clear display button
document.querySelector("#clear").addEventListener("mousedown", () => {
    //reset array and empty input.value
    input.value = "";
    array.length = 0;
});

function add() {
    return array[0] + array[1];
}

function subtract() {
    return array[0] - array[1];
}

function multiply() {
    return array[0] * array[1];
}

//needs to throw error on 0 division
function divide() {
    return array[0] / array[1];
}
