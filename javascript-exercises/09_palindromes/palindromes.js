const palindromes = function (palindrome) {
    let re = /[\W_]/g
    let loweredString = palindrome.toLowerCase().replace(re,"");
    let reverseStr = loweredString.split("").reverse().join("");
    return reverseStr === loweredString;
};

// Do not edit below this line
module.exports = palindromes;
