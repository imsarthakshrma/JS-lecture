// Write a function removeDuplicates that takes an array as input and returns a new array with duplicate values removed.

function removeDuplicates(arr) {
    let uniqueArray = []; 

    for (let i=0; i<arr.length; i++) {
        let currentElement = arr[i]; 

        let isDublicate = false; 
        for(let j=0; j<uniqueArray.length; j++) {
            if (uniqueArray[j]=== currentElement){
                isDublicate = true; 
                break; 
            }
        }
        if(!isDublicate){
            uniqueArray.push(currentElement); 
        }
    }
    return currentElement;
}




// Test cases for Hard problem
console.log(removeDuplicates([1, 2, 3, 2, 4, 1]));  
// Expected output: [1, 2, 3, 4]

console.log(removeDuplicates(['apple', 'orange', 'apple', 'banana']));  
// Expected output: ['apple', 'orange', 'banana']

console.log(removeDuplicates([true, false, true, true, false]));  
// Expected output: [true, false]