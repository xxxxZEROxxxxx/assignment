
// Task 2: Sum and Average Calculation
function calculateSumAndAverage(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    return { sum, average };
}

// Example usage:
const numbers = [10, 20, 30, 40];
console.log(calculateSumAndAverage(numbers));

// Task 3: Remove Duplicates
function removeDuplicates(array) {
    return [...new Set(array)];
}

// Example usage:
const strings = ["apple", "banana", "apple", "orange", "banana"];
console.log(removeDuplicates(strings));
