function repeatString(str, num) {
    if (num < 0) {
        return 'ERROR'; // Handle negative numbers
    }

    let result = ''; // Initialize an empty string to store the result

    for (let i = 0; i < num; i++) {
        result += str; // Append the string `num` times
    }

    return result; // Return the final repeated string
}

// Do not edit below this line
module.exports = repeatString;
