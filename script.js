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

//display results after pressing equals
//still need to make it work for every operator it works, but need to be able to call
//each function when the button is pressed
for (let element of document.querySelectorAll("#equals")) {
    element.addEventListener("mousedown", () => {
        operate();
    });
}
//call function with numOne,NumTwo as args
//try calling function with values from array as args to see if it works
// if ((userInput = "plus")) {
//     console.log(userInput);
// }

const buttons = document.querySelectorAll("#plus", "#minus", "#divide", "#multiply");
let userInput = "";
function operate() {
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            //if userInput === plus, or whatever, result = add()
            userInput = button.id;
            console.log(userInput);
        });
    });
    //if querySelectorAll === plus, do the following?
    //remember to return value
    //if button.id =

    result = add();
    input.value = result;
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
