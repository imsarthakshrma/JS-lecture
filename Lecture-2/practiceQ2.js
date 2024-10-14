// Medium: Write a function isEven that takes a number as input and returns true if the number is even, and false if it’s odd.

function isEven(num) {
    if(num%2 === 0) {
        return true; 
    }
    else {
        return false;
    }
}



console.log(isEven(9));
console.log(isEven(4));