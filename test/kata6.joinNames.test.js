const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames([{
      name: 'Bart'  
    }, {
      name: 'Lisa'
    }, {
      name: 'Maggie'
    }])).toBe('Bart, Lisa & Maggie');
    expect(joinNames([{
      name: 'James'
    }, {
      name: 'Charlotte'
    }])).toBe('James & Charlotte');
    expect(joinNames([{name: 'Dave'}, {name: 'John'}, {name: 'Larry'}])).toBe('Dave, John & Larry')
  });
});
