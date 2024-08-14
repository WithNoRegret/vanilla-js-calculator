export default class Calculator {
  constructor() {
    this.values = [0, 0];
    this.activeValue = 0;
    this.activeValueInteger = true;
    this.activeValuePositive = true;
    this.trailingZeroes = 0;

    this.operation = '';
  }

  updateValue(newValue) {
    if (this.values[this.activeValue].toString().length < 15) {
      if (this.activeValueInteger === false && Number.isInteger(this.values[this.activeValue])) {
        // non integer exeption
        this.values[this.activeValue] = Number(
          `${this.values[this.activeValue].toString()}.${newValue}`
        );
      } else if (this.activeValuePositive === false && this.values[this.activeValue] === 0) {
        // non positive exeption
        this.values[this.activeValue] = Number(`-${newValue}`);
      } else {
        this.values[this.activeValue] = Number(this.values[this.activeValue].toString() + newValue);
      }
    }
  }

  setOperation(operation) {
    this.operation = operation;
    this.activeValueInteger = true;
    this.activeValuePositive = true;
  }

  clearCalculator(newValue = 0) {
    this.values = [newValue, 0];
    this.activeValue = 0;
    this.activeValueInteger = true;
    this.activeValuePositive = true;
    this.operation = '';
  }
}
