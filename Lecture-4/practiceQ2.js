// Write a function that takes an array of numbers and returns a new array where each number is doubled using map().

const nums = [2, 4, 6];
const newArr = nums.map(function(num){
    return num*2; 
});
console.log(newArr);