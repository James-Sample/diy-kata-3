const { TestScheduler } = require("jest");
const { humanCatDogYears } = require("../src");

describe(humanCatDogYears, () => {
    test("Returns an array with human + cat + dog years", () => {
        expect(humanCatDogYears(1)).toStrictEqual([1, 15, 15]);
        expect(humanCatDogYears(2)).toStrictEqual([2, 24, 24]);
        expect(humanCatDogYears(10)).toStrictEqual([10, 56, 64]);
    }); 
});

// Look Ma, no handlebars!!!
