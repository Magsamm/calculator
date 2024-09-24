let array = [];
let result = 0;
let saveOperator = "";
let finalResult = 0;
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
        if (!(isNaN(input.value) === true || input.value === 0 || input.value === "")) {
            array.push(Number(input.value));
            input.value = "";
        }
    });
}

for (let element of document.querySelectorAll("#equals")) {
    element.addEventListener("mousedown", () => {
        if (array.length > 1) {
            operate();
            console.log(array);
        }
    });
}

//clear display button
document.querySelector("#clear").addEventListener("click", () => {
    //reset array and empty input.value, saveOperator.
    input.value = "";
    saveOperator = "";
    array.length = 0;
});

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

//get button.id
//add textContent to saveOperands to keep track of operators
//don't accept more inputs if saveOperator >= 2

// For example, when both operands(numbers) are full, make it evaluate on next operator input, and then just bring the answer and operator over to next set

const buttons = document.querySelectorAll(".operator");
let buttonId = "";
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        buttonId = button.id;
        if (
            !(
                saveOperator.length >= 1 ||
                array.length < 1 ||
                button.id === "clear" ||
                button.id === "equals"
            )
        ) {
            //save operand and split for indexing
            saveOperator += button.textContent.split();
        }
    });
});

//math functions to perform calculations
function add() {
    let result = array[0] + array[1];
    array.push(result);
    return result;
}

function subtract() {
    let result = array[0] - array[1];
    array.push(result);
    return result;
}

function multiply() {
    let result = array[0] * array[1];
    array.push(result);
    return result;
}
//handles 0 division, and rounds number to max 2 decimal places.
function divide() {
    let result = array[0] / array[1];
    if (result === Infinity || isNaN(result) === true) {
        return (input.value = "Can't divide by 0!");
    }
    array.push(result);
    return Number(result).toFixed(2);
}
