const leapYears = function(yearA) {
    // A leap year is divisible by 4 but not by 100 unless also divisible by 400
    if (yearA % 4 === 0 && (yearA % 100 !== 0 || yearA % 400 === 0)) {
        return true; // It's a leap year
    } else {
        return false; // It's not a leap year
    }
};

// Do not edit below this line
module.exports = leapYears;
