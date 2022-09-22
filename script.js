//Figure out how to resolve the issue regarding multiline operations.



const topRow = document.querySelector(".top");
const nums = document.querySelector(".numbers");
const bottomRow = document.querySelector(".bottom");
const operator = document.querySelector(".operators");
const printBottom = document.querySelector(".printNum");
const printTop = document.querySelector(".printNumTop");
let waitSecOperand = true;
let numString1 = "";
let numString2 = "";
let stringCombine = "";
let num1 = 0;
let num2 = 0;
let userOperator = "";
let operatorClassName = "";
let multiOperator = false;
let result = 0;
let operatorCounter = 0;
createCalculator();

function createCalculator() {
    topCalculator();
    numbers();
    bottomCalculator();
    operators();
}

const numBtns = document.querySelectorAll("button");
numBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
        let userInput = e.target.textContent;
        let buttonType = e.target.className; //determine if num or operators btns
        //if first operand selected
        if(!buttonType.includes("opSign")) {
            if(waitSecOperand) {
                numString1 += userInput;
                num1 = parseFloat(numString1);
                stringCombine += userInput;
                //console.log(`numString1: ${numString1}; num1: ${num1}`);
                printBottom.textContent = numString1;
            }else {
                if(operatorCounter < 2) {
                    numString2 += userInput;
                    num2 = parseFloat(numString2);
                    //console.log(`numString2: ${numString2}; num2: ${num2}`);
                    stringCombine = `${numString1} ${userOperator} ${numString2}`;
                    printBottom.textContent = stringCombine;
                }else {
                    stringCombine += ` ${userInput}`;
                    printBottom.textContent = stringCombine;
                }
            }
        }
        //if operator is selected
        else {
            if(buttonType !== "opSign clear" && buttonType !== "opSign backspace" && buttonType != "opSign plus-minus" && buttonType !== "opSign equal") {
                userOperator = userInput;
                stringCombine += ` ${userOperator}`;
                operatorClassName = buttonType; //saves operator class
                waitSecOperand = false;     //not waiting for 2nd number
                printBottom.textContent = stringCombine;
                operatorCounter = operatorCount(stringCombine);
                if(operatorCounter >= 2) {
                    console.log(`counter: ${operatorCounter}`);
                    let temp = performOperations(operatorClassName);
                    console.log(operatorClassName);
                    console.log(num1);
                    console.log(temp);
                }
            }
            //equal operator selected
            if(buttonType === "opSign equal") {
                result = performOperations(operatorClassName);
                stringCombine += " =";
                printTop.textContent = stringCombine;
                printBottom.textContent = result;
                console.log(buttonType);
                console.log(result);
            }
            if(buttonType.includes("clear")) {
                printTop.innerHTML = "";
                printBottom.innerHTML = "";
                numString1 = "";
                numString2 = "";
                num1 = 0;
                num2 = 0;
                stringCombine = "";
                userOperator = "";
                operatorClassName = "";
                waitSecOperand = true;
                operatorCounter = 0;
            }
            //deleting a number
            if(buttonType.includes("backspace")) {
                if(waitSecOperand) {
                    numString1 = numString1.slice(0, -1);
                    stringCombine = stringCombine.slice(0, -1);
                    num1 = parseFloat(numString1);
                    printBottom.textContent = numString1;
                }else {
                    numString2 = numString2.slice(0, -1);
                    stringCombine = stringCombine.slice(0, -1);
                    num2 = parseFloat(numString2);
                    printBottom.textContent = stringCombine;
                    console.log("hello");
                    console.log(`numString2 ${numString2}; stringCombine: ${stringCombine}; num2: ${num2}`);
                }
            }
        }
        console.log(`numString1: ${numString1}; numString2: ${numString2}; num1: ${num1}; num2: ${num2}; stringCombine: ${stringCombine}; userOperator: ${userOperator}; operatorClassName: ${operatorClassName}; waitSecOperand: ${waitSecOperand}`);
    });
});

function performOperations(operator) {
    if(operator.includes("addition")) return addition(num1, num2);
    if(operator.includes("subtraction")) return subtraction(num1, num2);
    if(operator.includes("multiplication")) return multiplication(num1, num2);
    else return division(num1, num2);
}

//count how many operators in the string
function operatorCount(str) {
    let counter = 0;
    for(let i = 0; i < str.length; i++) {
        if(str.charAt(i) === String.fromCharCode(247) || str.charAt(i) === String.fromCharCode(215) || str.charAt(i) === String.fromCharCode(8722) || str.charAt(i) === "+") {
            counter++;
        }
    }
    return counter;
}

function addition(x, y) {
    return x + y;
}

function subtraction(x, y) {
    return x - y;
}

function multiplication(x, y) {
    return x * y;
}

function division(x, y) {
    return x / y;
}


function topCalculator() {
    const clear = document.createElement("button");
    clear.classList.add("opSign", "clear");
    clear.textContent = "AC";
    clear.setAttribute("style", "background-color: #A0A0A0;");
    topRow.append(clear);

    const backspace = document.createElement("button");
    backspace.classList.add("opSign", "backspace");
    backspace.textContent = "DEL"
    backspace.setAttribute("style", "background-color: #A0A0A0;");
    topRow.append(backspace);

    const plusMinus = document.createElement("button");
    plusMinus.classList.add("opSign", "plus-minus");
    plusMinus.textContent = String.fromCharCode(177);
    plusMinus.setAttribute("style", "background-color: #F69A06; color: white;");
    topRow.append(plusMinus);
}

function numbers() {
    for(let i = 1; i <= 9; i++) {
        let buttons = document.createElement("button");
        buttons.classList.add("btns", `button-${i}`);
        buttons.textContent = i;
        buttons.setAttribute("style", "background-color: #313131; color: white");
        nums.append(buttons);
    }
}

function bottomCalculator() {
    const zero = document.createElement("button");
    zero.classList.add("btns", "button-0");
    zero.textContent = "0";
    zero.setAttribute("style", "background-color: #313131; color: white;");
    bottomRow.append(zero);

    const decimal = document.createElement("button");
    decimal.classList.add('btns', "decimal");
    decimal.textContent = ".";
    decimal.setAttribute("style", "background-color: #313131; color: white;")
    bottomRow.append(decimal);

    const equal = document.createElement("button");
    equal.classList.add("opSign", "equal");
    equal.textContent = "=";
    equal.setAttribute("style", "background-color: #F69A06; color: white");
    bottomRow.append(equal);
}

function operators() {
    const division = document.createElement("button");
    division.classList.add("opSign", "division");
    division.textContent = String.fromCharCode(247);
    division.setAttribute("style", "background-color: #F69A06; color: white");
    operator.append(division);

    const multiply = document.createElement("button");
    multiply.classList.add("opSign", "multiplication");
    multiply.textContent = String.fromCharCode(215);
    multiply.setAttribute("style", "background-color: #F69A06; color: white");
    operator.append(multiply);

    const subtract = document.createElement("button");
    subtract.classList.add("opSign", "subtraction");
    subtract.textContent = String.fromCharCode(8722);
    subtract.setAttribute("style", "background-color: #F69A06; color: white");
    operator.append(subtract);

    const addition = document.createElement("button");
    addition.classList.add("opSign", "addition");
    addition.textContent = "+";
    addition.setAttribute("style", "height: 150px; background-color: #F69A06; color: white");
    operator.append(addition);
}