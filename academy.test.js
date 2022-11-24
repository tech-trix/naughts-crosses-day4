const academyModule = require('./academy');

test("getBoard will return something", () => {
    const actualResult = academyModule.getBoard()
    expect(actualResult).toBeDefined()
});

test("Think of more tests and put them in here", () => {
    fail("TODO")
});
