const topRow = document.querySelector(".top");
const nums = document.querySelector(".numbers");
const bottomRow = document.querySelector(".bottom");
const operator = document.querySelector(".operators");
topCalculator();
numbers();
bottomCalculator();
operators();

function topCalculator() {
    const clear = document.createElement("button");
    clear.classList.add("btns", "clear");
    clear.textContent = "AC";
    clear.setAttribute("style", "background-color: #A0A0A0;");
    topRow.append(clear);

    const negative = document.createElement("button");
    negative.classList.add("btns", "negative");
    negative.textContent = "+/-";
    negative.setAttribute("style", "background-color: #A0A0A0;");
    topRow.append(negative);

    const percentage = document.createElement("button");
    percentage.classList.add("btns", "percentage");
    percentage.textContent = "%";
    percentage.setAttribute("style", "background-color: #A0A0A0;");
    topRow.append(percentage);
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
    zero.setAttribute("style", "width: 150px; background-color: #313131; color: white;");
    bottomRow.append(zero);

    const decimal = document.createElement("button");
    decimal.classList.add('btns', "decimal");
    decimal.textContent = ".";
    decimal.setAttribute("style", "background-color: #313131; color: white;")
    bottomRow.append(decimal);
}

function operators() {
    const division = document.createElement("button");
    division.classList.add("btns", "division");
    division.textContent = "/";
    division.setAttribute("style", "background-color: #F69A06; color: white");
    operator.append(division);

    const multiply = document.createElement("button");
    multiply.classList.add("btns", "multiply");
    multiply.textContent = "x";
    multiply.setAttribute("style", "background-color: #F69A06; color: white");
    operator.append(multiply);

    const subtract = document.createElement("button");
    subtract.classList.add("btns", "subtract");
    subtract.textContent = "-";
    subtract.setAttribute("style", "background-color: #F69A06; color: white");
    operator.append(subtract);

    const addition = document.createElement("button");
    addition.classList.add("btns", "addition");
    addition.textContent = "+";
    addition.setAttribute("style", "background-color: #F69A06; color: white");
    operator.append(addition);

    const equal = document.createElement("button");
    equal.classList.add("btns", "equal");
    equal.textContent = "=";
    equal.setAttribute("style", "background-color: #F69A06; color: white");
    operator.append(equal);
}