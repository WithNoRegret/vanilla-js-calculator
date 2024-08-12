export default class Calculator {
    constructor() {
        this.values = [0, 0]
        this.result = 0;
        this.activeValue = 0;
    }

    updateValue(newValue) {
        this.values[this.activeValue] = this.values[this.activeValue] * 10 + newValue;
      }
}