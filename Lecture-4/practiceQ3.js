// Task: Write a function filterEvens that takes an array of numbers and returns only the even numbers using filter().
function filterEvens(arr) {
    return arr.filter(function(num) {
        return num%2 === 0 
    });
}

console.log(filterEvens([1, 2, 3, 4]));