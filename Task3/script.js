const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let operator = '';
let result = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.innerText;

    if (buttonText === 'C') {
      clearDisplay();
    } else if (buttonText === '←') {
      backspace();
    } else if (buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') {
      handleOperator(buttonText);
    } else if (buttonText === '=') {
      calculate();
    } else {
      addToDisplay(buttonText);
    }
  });
});

function clearDisplay() {
  currentInput = '';
  operator = '';
  result = '';
  updateDisplay();
}

function backspace() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function handleOperator(op) {
  if (operator === '') {
    operator = op;
    result = currentInput;
    currentInput = '';
  } else {
    calculate();
    operator = op;
  }
}

function calculate() {
  const num1 = parseFloat(result);
  const num2 = parseFloat(currentInput);
  switch (operator) {
    case '+':
      currentInput = (num1 + num2).toString();
      break;
    case '-':
      currentInput = (num1 - num2).toString();
      break;
    case '*':
      currentInput = (num1 * num2).toString();
      break;
    case '/':
      currentInput = (num1 / num2).toString();
      break;
  }
  operator = '';
  result = '';
  updateDisplay();
}

function addToDisplay(value) {
  currentInput += value;
  updateDisplay();
}

function updateDisplay() {
  display.innerText = currentInput || '0';
}
