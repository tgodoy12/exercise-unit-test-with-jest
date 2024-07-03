// import the function sum from the app.js file
const { sum } = require("./app");

//first test
test('adds 14 + 9 to equal 23', () => {
    //inside we call our sum function with 2 numbers
    let total = sum(14, 9);

    //we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);

});

//second test
test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
});

//test fromDollarToYen
test("One dollar should be 1.1")