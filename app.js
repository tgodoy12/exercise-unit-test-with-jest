// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

//function that converts euro to dollar
const fromEuroToDollar = function(valueInEuro) {
    //convert the given value in euro to dollars
    let valueInDollar = valueInEuro * 1.07;
    return parseFloat(valueInDollar.toFixed(1));
}

const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = valueInDollar / 1.07;
    let valueInYen = valueInEuro * 156.5;
    return parseFloat(valueInYen.toFixed(1));
}


const fromYenToPound = function(valueInYen) {
    let valueInEuro = valueInYen / 156.5;
    let valueInPound = valueInEuro * 0.87;
    return parseFloat(valueInPound.toFixed(1)); 
}

// Just a console log for ourselves
console.log(sum(7,3));
console.log(fromEuroToDollar(1));
console.log(fromDollarToYen(1));
console.log(fromYenToPound(1));

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };