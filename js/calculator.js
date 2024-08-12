export default class Calculator {
    constructor() {
        this.firstValue = 0;
        this.secondValue = 0;
        this.result = 0;
        this.activeValue = 1;
    }

    updateValue(newValue) {
        switch (activeValue) {
          case 1:
            this.firstValue = this.firstValue * 10 + newValue;
            break;
          case 2:
            this.secondValue =  this.secondValue * 10 + newValue;
            break;
          default:
            return;
        }
      }
}