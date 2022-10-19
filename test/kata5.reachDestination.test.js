const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toBe("I should be there in 4.5 hours");
    expect(reachDestination(31, 11)).toBe("I should be there in 3 hours");
    expect(reachDestination(57, 6)).toBe("I should be there in 9.5 hours");
  });
});
