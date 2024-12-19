const sumAll = function(numberA, numberB) {
     // Validate inputs
     if (!Number.isInteger(numberA) || !Number.isInteger(numberB) || numberA < 0 || numberB < 0) {
        return "ERROR";
    }
    // Ensure numberA is smaller; swap if necessary
    if (numberA > numberB) {
        [numberA, numberB] = [numberB, numberA];
    }

    // Create the array of numbers between numberA and numberB
    let numbers = [];
    for (let i = numberA; i <= numberB; i++) {
        numbers.push(i);
    }

    // Calculate the sum
    let total = 0;
    for (let number of numbers) {
        total += number;
    }

    return total;
};

// Example usage:
console.log(sumAll(1, 4)); // Output: 10 (1 + 2 + 3 + 4)
console.log(sumAll(4, 1)); // Output: 10 (works regardless of the order of inputs)


// Do not edit below this line
module.exports = sumAll;
