// Write a function that checks if a number is positive, negative, or zero. Return the appropriate string: "positive", "negative", or "zero".

function checkNumber(num) {
    if (num > 0) {
        return "positive"; 
    }
    else if (num < 0) {
        return "negative";
    } else {
        return "zero"
    }
}

console.log(checkNumber(10));  // Output: "positive"
console.log(checkNumber(-5));  // Output: "negative"
console.log(checkNumber(0));   // Output: "zero"