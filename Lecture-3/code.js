//  Write a function findLargestNumber that takes an array of numbers as input and returns the largest number in that array. If the array is empty, return null.

function findLargestNumber(arr) {
    if (arr.length === 0) {
        return null; //check if array is empty
    }
    
    let largest = arr[0];

    for(let i=1; i<arr.length; i++) {
        if(arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest; 
}

// Testing the function
console.log(findLargestNumber([3, 5, 7, 2, 8])); // Output: 8
console.log(findLargestNumber([-10, -5, -1]));    // Output: -1
console.log(findLargestNumber([]));                // Output: null