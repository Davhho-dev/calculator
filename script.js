const topRow = document.querySelector(".top");
const nums = document.querySelector(".numbers");
const bottomRow = document.querySelector(".bottom");
const operator = document.querySelector(".operators");
const printNum = document.querySelector(".printNum");
let numString = "";
let num1 = 0;
createCalculator();

function createCalculator() {
    topCalculator();
    numbers();
    bottomCalculator();
    operators();
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", function(e) {
        let userInput = e.target.textContent;
        let className = e.target.className;
        if(className === "btns clear") {
            printNum.innerHTML = ""; 
            numString = "";
        }
        if(className === "btns backspace") {
            numString = numString.slice(0, -1);
            printNum.innerHTML = "";
            printNum.append(numString);
            console.log(numString);
        }
        if(className !== "btns clear" && className !== "btns backspace" && className !== "btns plus-minus" && className !== "btns division" && className !== "btns multiply" && className !== "btns subtract" && className !== "btns addition" && className !== "btns equal") {
            numString += userInput;
            printNum.append(userInput);
            console.log(userInput);
            console.log(className);
            console.log(numString);
        }
    });
});


function topCalculator() {
    const clear = document.createElement("button");
    clear.classList.add("btns", "clear");
    clear.textContent = "AC";
    clear.setAttribute("style", "background-color: #A0A0A0;");
    topRow.append(clear);

    const backspace = document.createElement("button");
    backspace.classList.add("btns", "backspace");
    backspace.textContent = "DEL"
    backspace.setAttribute("style", "background-color: #A0A0A0;");
    topRow.append(backspace);

    const plusMinus = document.createElement("button");
    plusMinus.classList.add("btns", "plus-minus");
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
    equal.classList.add("btns", "equal");
    equal.textContent = "=";
    equal.setAttribute("style", "background-color: #F69A06; color: white");
    bottomRow.append(equal);
}

function operators() {
    const division = document.createElement("button");
    division.classList.add("btns", "division");
    division.textContent = String.fromCharCode(247);
    division.setAttribute("style", "background-color: #F69A06; color: white");
    operator.append(division);

    const multiply = document.createElement("button");
    multiply.classList.add("btns", "multiply");
    multiply.textContent = String.fromCharCode(215);
    multiply.setAttribute("style", "background-color: #F69A06; color: white");
    operator.append(multiply);

    const subtract = document.createElement("button");
    subtract.classList.add("btns", "subtract");
    subtract.textContent = String.fromCharCode(8722);
    subtract.setAttribute("style", "background-color: #F69A06; color: white");
    operator.append(subtract);

    const addition = document.createElement("button");
    addition.classList.add("btns", "addition");
    addition.textContent = "+";
    addition.setAttribute("style", "height: 150px; background-color: #F69A06; color: white");
    operator.append(addition);
}