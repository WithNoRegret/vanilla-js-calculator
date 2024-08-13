export default class Calculator {
    constructor() {
        this.values = [0, 0]
        this.activeValue = 0;

        this.operation = '';
    }

    updateValue(newValue) {
        this.values[this.activeValue] = this.values[this.activeValue] * 10 + newValue;
    }

    setOperation(operation) {
        this.operation = operation;
    }

    clearCalculator() {
        this.values = [0, 0]
        this.activeValue = 0;

        this.operation = '';
    }
}