

const leapYears = function(year) {
    const isNumDivisbleByFour = year % 4 === 0
    const isNumDivisbleByCentury = year % 100 === 0
    const isNumDivisbleBy400 = year % 400 === 0

    if(isNumDivisbleByFour  && (!isNumDivisbleByCentury || isNumDivisbleBy400)){
      return true
    } else{
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
