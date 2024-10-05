const reverseString = function(string) {
    const strArray = string.split("");
    let reversedStr = "";

    for(let i=strArray.length-1; i>=0; i--){
        reversedStr += strArray[i]
    }

    return reversedStr
};

// Do not edit below this line
module.exports = reverseString;
