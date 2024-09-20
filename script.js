const array = [];
let result = 0;
let clicks = 0;
const container = document.querySelector(".container");
//populate display
const input = document.querySelector("input");
for (const element of document.querySelectorAll(".number")) {
    element.addEventListener("mousedown", () => {
        input.value += element.textContent;
    });
}

//adds number from input.value to array as a Number for evaluation when pressing an operator button.
//resets input.value for next input.
for (let element of document.querySelectorAll(".operator")) {
    element.addEventListener("mousedown", () => {
        if (input.value == 0 || isNaN(input.value)) {
            input.value = "";
        } else {
            result = input.value;
            array.push(Number(result));
            input.value = "";
        }
    });
}

//add button.id to buttonId to use inside operate()
//use click instead of mousedown here bc it doesn't add the value properly otherwise.

//operate on pairs. when one calculation is done, shuffle the result to the start of the array
// use that number as the [0], and the next number for [0]
//splice?
const buttons = document.querySelectorAll(".operator");
let buttonId = "";
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        buttonId = button.id;
    });
});
//if clicks > 1, prioritize the next buttonId?
//maybe refactor to use switch block?
function operate(numOne, numTwo) {
    if (buttonId === "plus") {
        input.value = add(numOne, numTwo);
    } else if (buttonId === "minus") {
        input.value = subtract(numOne, numTwo);
    } else if (buttonId === "multiply") {
        input.value = multiply(numOne, numTwo);
    } else {
        input.value = divide(numOne, numTwo);
    }
}

for (let element of document.querySelectorAll("#equals")) {
    element.addEventListener("mousedown", () => {
        if (array.length > 0) {
            operate(array[0], array[1]);
        }
    });
}

//clear display button
document.querySelector("#clear").addEventListener("mousedown", () => {
    //reset array and empty input.value
    input.value = "";
    array.length = 0;
});
//math functions to perform calculations
function add() {
    return array[0] + array[1];
}

function subtract() {
    return array[0] - array[1];
}

function multiply() {
    return array[0] * array[1];
}
//handles 0 division, and rounds number to max 2 decimal places.
function divide() {
    let divisionVariable = array[0] / array[1];
    if (isNaN(divisionVariable)) {
        return "Cannot divide by 0.";
    } else {
        return divisionVariable.toFixed(2);
    }
}
