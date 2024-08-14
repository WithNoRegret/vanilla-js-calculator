import Calculator from './calculator.js';

const initCalc = () => {
  const result = document.querySelector('#result');
  const info = document.querySelector('#info');
  const operation = document.querySelector('#operation');
  const button1 = document.querySelector('#button-1');
  const button2 = document.querySelector('#button-2');
  const button3 = document.querySelector('#button-3');
  const button4 = document.querySelector('#button-4');
  const button5 = document.querySelector('#button-5');
  const button6 = document.querySelector('#button-6');
  const button7 = document.querySelector('#button-7');
  const button8 = document.querySelector('#button-8');
  const button9 = document.querySelector('#button-9');
  const button0 = document.querySelector('#button-0');
  const buttonAdd = document.querySelector('#button-add');
  const buttonSubtract = document.querySelector('#button-subtract');
  const buttonMultiply = document.querySelector('#button-multiply');
  const buttonDivide = document.querySelector('#button-divide');
  const buttonExponent = document.querySelector('#button-exponent');
  const buttonEqual = document.querySelector('#button-equal');
  const buttonBack = document.querySelector('#button-back');
  const buttonComma = document.querySelector('#button-comma');
  const buttonClear = document.querySelector('#button-clear');

  const calculator = new Calculator();
  result.textContent = 0;

  button1.addEventListener('click', () => {
    calculator.updateValue(1);
    result.textContent = calculator.values[calculator.activeValue];
  });

  button2.addEventListener('click', () => {
    calculator.updateValue(2);
    result.textContent = calculator.values[calculator.activeValue];
  });

  button3.addEventListener('click', () => {
    calculator.updateValue(3);
    result.textContent = calculator.values[calculator.activeValue];
  });

  button4.addEventListener('click', () => {
    calculator.updateValue(4);
    result.textContent = calculator.values[calculator.activeValue];
  });

  button5.addEventListener('click', () => {
    calculator.updateValue(5);
    result.textContent = calculator.values[calculator.activeValue];
  });

  button6.addEventListener('click', () => {
    calculator.updateValue(6);
    result.textContent = calculator.values[calculator.activeValue];
  });

  button7.addEventListener('click', () => {
    calculator.updateValue(7);
    result.textContent = calculator.values[calculator.activeValue];
  });

  button8.addEventListener('click', () => {
    calculator.updateValue(8);
    result.textContent = calculator.values[calculator.activeValue];
  });

  button9.addEventListener('click', () => {
    calculator.updateValue(9);
    result.textContent = calculator.values[calculator.activeValue];
  });

  button0.addEventListener('click', () => {
    calculator.updateValue(0);
    result.textContent = calculator.values[calculator.activeValue];
  });

  buttonAdd.addEventListener('click', () => {
    if (calculator.values[1] === 0) {
      calculator.setOperation('add');
      operation.textContent = '+';
      calculator.activeValue = 1;
    }
  });

  buttonMultiply.addEventListener('click', () => {
    if (calculator.values[1] === 0) {
      calculator.setOperation('multiply');
      operation.textContent = '×';
      calculator.activeValue = 1;
    }
  });

  buttonSubtract.addEventListener('click', () => {
    if (calculator.values[1] === 0 && calculator.values[0] !== 0) {
      calculator.setOperation('subtract');
      operation.textContent = '-';
      calculator.activeValue = 1;
    } else if (calculator.values[calculator.activeValue] === 0) {
      // negatie numbers
      result.textContent = `-${result.textContent}`;
      calculator.activeValuePositive = false;
    } else {
      calculator.values[calculator.activeValue] *= -1;
      result.textContent = calculator.values[calculator.activeValue];
    }
  });

  buttonDivide.addEventListener('click', () => {
    if (calculator.values[1] === 0) {
      calculator.setOperation('divide');
      operation.textContent = '÷';
      calculator.activeValue = 1;
    }
  });

  buttonExponent.addEventListener('click', () => {
    if (calculator.values[1] === 0) {
      calculator.setOperation('exponent');
      operation.textContent = '^';
      calculator.activeValue = 1;
    }
  });

  buttonEqual.addEventListener('click', () => {
    let equalResult;
    switch (calculator.operation) {
      case 'add':
        equalResult = calculator.values[0] + calculator.values[1];
        break;
      case 'multiply':
        equalResult = calculator.values[0] * calculator.values[1];
        break;
      case 'subtract':
        equalResult = calculator.values[0] - calculator.values[1];
        break;
      case 'divide':
        if (calculator.values[1] === 0) {
          // zero division exeption
          result.textContent = '';
          info.textContent = 'Calculator - Zero division error!';
          operation.textContent = '';
          calculator.clearCalculator();
          break;
        }
        equalResult = calculator.values[0] / calculator.values[1];
        break;
      case 'exponent':
        if (calculator.values[0] < 0 && !Number.isInteger(calculator.values[1])) {
          // wrong exponent exeption
          result.textContent = '';
          info.textContent = 'Calculator - Wrong exponent error!';
          operation.textContent = '';
          calculator.clearCalculator();
          break;
        }
        equalResult = calculator.values[0] ** calculator.values[1];
        break;
      default:
        break;
    }
    if (equalResult.toString().length > 15) {
      // long number exeption
      result.textContent = '';
      info.textContent = 'Calculator - Number is too long!';
      operation.textContent = '';
      calculator.clearCalculator();
      return;
    }
    result.textContent = Number(equalResult.toPrecision(15));

    operation.textContent = '';
    calculator.clearCalculator(Number(equalResult.toPrecision(15)));
  });

  buttonBack.addEventListener('click', () => {
    if (
      Number.isInteger(calculator.values[calculator.activeValue]) &&
      calculator.activeValueInteger === false
    ) {
      // corner case for erasing comma
      calculator.activeValueInteger = true;
      result.textContent = calculator.values[calculator.activeValue];
    }
    if (calculator.values[1] !== 0) {
      // erasing second number
      calculator.values[1] = Math.floor(calculator.values[1] / 10);
      result.textContent = calculator.values[1];
    } else if (calculator.operation !== '') {
      // erasing operation
      calculator.setOperation('');
      operation.textContent = '';
      calculator.activeValue = 0;
      result.textContent = calculator.values[0];
      calculator.activeValueInteger = Number.isInteger(calculator.values[0]);
      calculator.activeValuePositive = calculator.values[0] > 0;
    } else if (calculator.values[0] !== 0) {
      // erasing first number
      calculator.values[0] = Math.floor(calculator.values[0] / 10);
      result.textContent = calculator.values[0];
    }
  });

  buttonComma.addEventListener('click', () => {
    if (calculator.activeValueInteger === true) {
      calculator.activeValueInteger = false;
      result.textContent += '.';
    }
  });

  buttonClear.addEventListener('click', () => {
    calculator.clearCalculator();
    result.textContent = 0;
    operation.textContent = '';
  });
};

initCalc();
