export default class Calculator {
  constructor() {
    this.values = [0, 0];
    this.activeValue = 0;

    this.operation = '';
  }

  updateValue(newValue) {
    if (this.values[this.activeValue].toString().length < 15) {
      this.values[this.activeValue] = this.values[this.activeValue] * 10 + newValue;
    }
  }

  setOperation(operation) {
    this.operation = operation;
  }

  clearCalculator() {
    this.values = [0, 0];
    this.activeValue = 0;

    this.operation = '';
  }
}
