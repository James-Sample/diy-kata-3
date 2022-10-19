const numberToReversedDigits = (number) => {
    let arr = (Array.from(String(number), Number));
    return arr.reverse();
};

module.exports = numberToReversedDigits;
