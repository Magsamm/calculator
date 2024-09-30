let array = [];
let result = 0;
let buttonId = "";
const container = document.querySelector(".container");
//populate display
const input = document.querySelector("input");
for (const element of document.querySelectorAll(".number")) {
    element.addEventListener("mousedown", () => {
        input.value += element.textContent;
    });
}

//get button.id
const buttons = document.querySelectorAll(".operator");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        buttonId = button.id;
    });
});

for (let element of document.querySelectorAll(".operator")) {
    element.addEventListener("mousedown", () => {
        if (isNaN(input.value) === true || input.value === 0 || input.value === "") {
            input.value = "";
        } else {
            array.push(Number(input.value));
            input.value = "";
        }
    });
}

//add some logic for line 22, to emulate equals in a way if the user presses another operator
//if user presses equals, present latest result from input.value
//empty array. if user continues to enter numbers, use the number stored
const btn = document.querySelector("#equals");
btn.addEventListener("mousedown", function () {
    if (isNaN(input.value) || input.value == 0) {
        return NaN;
    } else {
        array.push(Number(input.value));
        input.value = operate();
        console.log(array);
        array = [];
    }
});

//clear display button
document.querySelector("#clear").addEventListener("click", () => {
    //reset array and empty input.value.
    input.value = "";
    array.length = 0;
    result = 0;
});

function operate(numOne, numTwo) {
    if (buttonId === "plus") {
        return add(numOne, numTwo);
    } else if (buttonId === "minus") {
        return subtract(numOne, numTwo);
    } else if (buttonId === "multiply") {
        return multiply(numOne, numTwo);
    } else {
        return divide(numOne, numTwo);
    }
}

function add() {
    if (!isNaN(array[0]) && !isNaN(array[1])) {
        return array[0] + array[1];
    }
    return (input.value = "Non integer value!");
}

function subtract() {
    if (!isNaN(array[0]) && !isNaN(array[1])) {
        return array[0] - array[1];
    }
    return (input.value = "Non integer value!");
}

function multiply() {
    if (!isNaN(array[0]) && !isNaN(array[1])) {
        return array[0] * array[1];
    }
    return (input.value = "Non integer value!");
}
//handles 0 division, and rounds number to max 2 decimal places.
function divide() {
    if (array[0] / array[1] === Infinity || isNaN(array[0] / array[1]) === true) {
        return (input.value = "Can't divide by 0!");
    }
    return Number(array[0] / array[1]).toFixed(2);
}
