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
        array.push(Number(input.value));
        input.value = "";
    });
}

//add button.id as string to use inside operate()
const buttons = document.querySelectorAll(".operator");
let userInput = "";
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        userInput = button.id;
    });
});

function operate() {
    if (userInput === "plus") {
        input.value = add();
    } else if (userInput === "minus") {
        input.value = subtract();
    } else if (userInput === "multiply") {
        input.value = multiply();
    } else {
        input.value = divide();
    }
}

//display results after pressing equals
for (let element of document.querySelectorAll("#equals")) {
    element.addEventListener("mousedown", () => {
        operate();
        console.log(userInput);
    });
}
//call function with numOne,NumTwo as args
//try calling function with values from array as args to see if it works
// if ((userInput = "plus")) {
//     console.log(userInput);
// }

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
