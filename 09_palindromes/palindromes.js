const palindromes = function (string="") {
    const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";
    const filteredStr = string
        .toLowerCase()
        .split("")   
        .filter((char) => alphabet.includes(char))
        .join("");

    const reversedString = filteredStr.split("").reverse().join("");

    return reversedString === filteredStr;
};

// Do not edit below this line
module.exports = palindromes;
