const removeFromArray = function(array, ...args) {

    /*args.forEach((item) => {
        if(array.includes(item)){
            array.splice(array.indexOf(item),1)
        }
    });*/
 
    // returns an array that does not include items provided in arg.
    return array.filter((item) => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
