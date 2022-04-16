const reverseString = function(text) {
    const array = text.split("")
    array.reverse();
    return array.join('');
};
// TOP's solution looks like: 'return text.split("").reverse().join("");'

// Do not edit below this line
module.exports = reverseString;
