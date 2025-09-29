const container = document.querySelector(".container");
const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');
let calculation = '';
let result;

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        if (button.textContent === 'C') {
            display.textContent = '0'
            calculation = '';
        } else if (button.textContent === "=") {
            calculation = eval(calculation)
            result = calculation;
            display.textContent = result;
        } else if (button.textContent === "⬅") {
            calculation = calculation.slice(0, -1);
            result = calculation
            display.textContent = result;
        } else {
            calculation += button.textContent;
            display.textContent = calculation;
        }
    })
});