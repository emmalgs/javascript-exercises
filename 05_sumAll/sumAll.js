const sumAll = function(firstNum, lastNum) {
    let sum = 0;
    if (firstNum < 0 || lastNum < 0) return `ERROR`;
    if (!Number.isInteger(firstNum) || !Number.isInteger(lastNum)) return 'ERROR';
     else if (lastNum < firstNum) {
        for (i=lastNum; i<firstNum + 1; i++) {
        sum += i;
    }} else {
    for (i=firstNum; i<lastNum + 1; i++) {
        sum += i;
        }
    }   
    return sum
};

// Do not edit below this line
module.exports = sumAll;
