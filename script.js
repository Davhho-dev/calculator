const calculatorNum = document.querySelector(".calculator-num");
createNumPad();


function createNumPad() {
    for(let i = 0; i <= 9; i++) {
        let buttons = document.createElement("button");
        buttons.classList.add(`button-${i}`);
        buttons.textContent = `${i}`;
        calculatorNum.append(buttons);
    }
}