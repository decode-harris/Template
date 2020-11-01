const { test, expect } = require("@jest/globals");
const sum = require("./sum").default;

test("add two numbers together", ()=> {

    expect(
        sum(1, 2)
    ).toBe(3)

});
