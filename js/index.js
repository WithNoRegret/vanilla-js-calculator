import Calculator from "./calculator.js";

const initCalc = () => {
    const result = document.querySelector('#result');
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
};

initCalc();




