let result = 0;
let number = "";
let numberOne = "";
let numberTwo = "";
const container = document.querySelector(".container");
//populate display
const input = document.querySelector("input");
for (const element of document.querySelectorAll(".number")) {
    element.addEventListener("mousedown", () => {
        input.value += element.textContent;
    });
}

//need to disable operators until a number button has been clicked again after the first one
//check if an operator has been clicked
//get button.id
const buttons = document.querySelectorAll(".operator");
let buttonId = "";
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (!(button.id === "clear" || button.id === "equals")) {
            buttonId = button.id;
        }
    });
});
//first number
for (let element of document.querySelectorAll(".operator")) {
    element.addEventListener("mousedown", () => {
        number = input.value;
        input.value = "";
        number.split("+/-*", "");
        numberOne = number[0];
        numberTwo = number[1];
        console.log(number);
    });
}

//if buttonId === "equals", present result in input.value
//otherwise, evaluate 1 pair at a time
for (let element of document.querySelectorAll("#equals")) {
    element.addEventListener("mousedown", () => {
        operate();
        input.value = result;
    });
}

//clear display button
document.querySelector("#clear").addEventListener("mousedown", () => {
    //reset array and empty input.value.
    // we use the .forEach method to iterate through each button
    input.value = "";
    number = "";
    buttonId = "";
});
function operate() {
    if (buttonId === "plus") {
        input.value = add();
    } else if (buttonId === "minus") {
        input.value = subtract();
    } else if (buttonId === "multiply") {
        input.value = multiply();
    } else {
        input.value = divide();
    }
}

//perform calculations with chosen operator.
function add() {
    result = numberOne + numberTwo;
    return result;
}

function subtract() {
    result = numOne - numTwo;
    return result;
}

function multiply() {
    result = numOne * numTwo;
    return result;
}
//handles 0 division, and rounds number to max 2 decimal places.
function divide() {
    let result = numOne / numTwo;
    if (result === Infinity || isNaN(result) === true) {
        return (input.value = "Can't divide by 0!");
    }
    return Number(result).toFixed(2);
}
