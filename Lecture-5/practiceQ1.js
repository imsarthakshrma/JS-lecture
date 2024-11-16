// Q1: Write a function doMath that takes two numbers and a callback function (either addition or multiplication). The callback should perform the correct operation based on the callback passed.

function doMath(num1, num2, callback) {
    return callback(num1, num2)
}

function addCallback(a, b){
    return a + b;
}

function multiplyCallback(a, b){
    return a * b;
}

console.log(doMath(3, 4, addCallback)); // should return 7
console.log(doMath(5, 6, multiplyCallback)); // should return 30
