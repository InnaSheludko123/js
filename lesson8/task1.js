const calculator = {
    lastResult: null,
    operationCount: 0,
    add: function (a, b) {
        this.operationCount++;
        this.lastResult = a + b;
        return a + b;
    },
    subtract: function (a, b) {
        this.operationCount++;
        this.lastResult = a - b;
        return a - b;
    },
    multiply: function (a, b) {
        this.operationCount++;
        this.lastResult = a * b;
        return a * b;
    },
    divide: function (a, b) {
        if (b !== 0) {
            this.operationCount++;
            this.lastResult = a / b;
            return a / b;
        }
        else {
            console.log("Помилка: ділення на нуль!");
        }
    },
    reset: function () {
        this.operationCount = 0;
        this.lastResult = null;
    }
}


console.log(calculator.add(15, 2));
console.log(calculator.subtract(15, 2));
console.log(calculator.multiply(15, 2));
console.log(calculator.divide(15, 0));

console.log(calculator.lastResult);
console.log(calculator.operationCount);


