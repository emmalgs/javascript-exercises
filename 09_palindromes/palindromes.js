const palindromes = function (text) {
    processText = text.toLowerCase().replace(/[^a-z]/g, "");
    return (
        processText.split("").reverse().join("") ==processText
    );
};

// Do not edit below this line
module.exports = palindromes;
