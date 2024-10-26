// Write a function sortByLastCharacter that takes an array of strings as input and sorts them based on the last character of each string. Use sort() and higher-order functions.

function sortByLastCharacter(arr) {
    return arr.sort((a, b) => {
        const lastCharA = a.charAt(a.length - 1);
        const lastCharB = b.charAt(b.length - 1);
        const comparison =  lastCharA.localeCompare(lastCharB);

        if(comparison === 0) {
            return a.localeCompare(b);
        }

        return comparison;
    });
}


// Test cases

console.log(sortByLastCharacter(["apple", "banana", "cherry"]));  // Output: ["banana", "apple", "cherry"]
console.log(sortByLastCharacter(["sun", "moon", "star"]));        // Output: ["moon", "star", "sun"]

