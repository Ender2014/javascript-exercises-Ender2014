const fibonacci = function(number) {
    let firstPrevNum = 0;
    let secPrevNum = 1;

    if(number < 0){
        return "OOPS";
    }

    for(let i = 0; i < number; i++){
        let current = firstPrevNum + secPrevNum;
        firstPrevNum = secPrevNum;
        secPrevNum = current;
    }

    return firstPrevNum;
};

// Do not edit below this line
module.exports = fibonacci;
