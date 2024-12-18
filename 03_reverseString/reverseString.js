const reverseString = function(str) {
    let reversed = ""; // initialize the empty string
    for (let i=str.length-1; i>=0; i--) {
        reversed += str [i]; //append each character in reverse order
    }
return reversed
};

reverseString ('hello there');

// Do not edit below this line
module.exports = reverseString;
