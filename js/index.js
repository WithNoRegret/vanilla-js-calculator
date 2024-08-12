import Calculator from "./calculator.js";

const initCalc = () => {
    const result = document.querySelector('#result');
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
    const buttonEqual = document.querySelector('#button-equal');

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
        if (calculator.values[1] === 0) {
            calculator.setOperation('subtract');
            operation.textContent = '-';
            calculator.activeValue = 1;
        }
    });

    buttonDivide.addEventListener('click', () => {
        if (calculator.values[1] === 0) {
            calculator.setOperation('divide');
            operation.textContent = '÷';
            calculator.activeValue = 1;
        }
    });

    buttonEqual.addEventListener('click', () => {
        if(calculator.values[1] !== 0) {
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
                    equalResult = calculator.values[0] / calculator.values[1];
                    break;
            }
            if (equalResult > 99999999999999) {
                result.textContent = 'Error, number is too long!';
            } else {
                result.textContent = equalResult.toFixed(15 - equalResult.toString().split('.')[0]);
            }
            calculator.clearCalculator();
        }
    })

};

initCalc();




