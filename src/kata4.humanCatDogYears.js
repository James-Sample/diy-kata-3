const humanCatDogYears = (number) => {
    let human = number;
    let cat = 0;
    let dog = 0;
    if (number >= 3) {
      let cat = 24 + (number - 2) * 4;
      let dog = 24 + (number - 2) * 5;
        return ([human, cat, dog]);
    }
    if (number === 1) {
      cat += 15;
      dog += 15;
    }
    if (number === 2) {
      cat += 24;
      dog += 24;
    }
    return ([human, cat, dog]);
};

module.exports = humanCatDogYears;
