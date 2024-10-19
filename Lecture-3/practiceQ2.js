// Write a function getEvenNumbers that takes an array of numbers as input and returns a new array containing only the even numbers.

function getEvenNumbers(arr) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i]%2 ===0) {
            console.log(arr[i]);
        } 
    }
}

// Test cases for Medium problem
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));  
// Expected output: [2, 4, 6]

console.log(getEvenNumbers([11, 13, 17, 19]));  
// Expected output: []

console.log(getEvenNumbers([10, 20, 30, 40, 50]));  
// Expected output: [10, 20, 30, 40, 50]
