const reverseString = function(text) {
    const array = text.split("")
    array.reverse();
    return array.join('');
};

// Do not edit below this line
module.exports = reverseString;
