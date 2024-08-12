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
    result.textContent = calculator.firstValue;
    
    button1.addEventListener('click', () => {
        calculator.updateValue(1);
    });

    button2.addEventListener('click', () => {
        calculator.updateValue(2);
    });

    button3.addEventListener('click', () => {
        calculator.updateValue(3);
    });

    button4.addEventListener('click', () => {
        calculator.updateValue(4);
    });

    button5.addEventListener('click', () => {
        calculator.updateValue(5);
    });

    button6.addEventListener('click', () => {
        calculator.updateValue(6);
    });

    button7.addEventListener('click', () => {
        calculator.updateValue(7);
    });

    button8.addEventListener('click', () => {
        calculator.updateValue(8);
    });

    button9.addEventListener('click', () => {
        calculator.updateValue(9);
    });

    button0.addEventListener('click', () => {
        calculator.updateValue(0);
    });
};

initCalc();




