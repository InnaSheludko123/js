let numbers = [1, 2, 3, 4, 5, 6, 0, -1, -2];
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        positiveCount++;
    }
    else if (numbers[i] < 0) {
        negativeCount++;
    }
    else if (numbers[i] === 0) {
        zeroCount++;
    }
}
console.log(`Positive Numbers:${positiveCount}`);
console.log(`Negative Numbers:${negativeCount}`);
console.log(`0 Numbers:${zeroCount}`);