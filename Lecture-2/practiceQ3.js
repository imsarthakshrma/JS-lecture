// Hard: Write a function compareThreeNumbers that takes three numbers as input and returns which one is the largest, or says they are equal if all are the same.

function compareThreeNumbers(num1, num2, num3) {
    if(num1== num2 && num1 == num3) {
        return "they are equal"
    } else if (num1 >=num2 && num1 >= num3) {
        return num1 + " is largest";
    } else if (num1 <=num2 && num2 >= num3) {
        return num2 + " is largest";
    }
    else {
        return num3 + " is largest";
    }
}

console.log(compareThreeNumbers(10, 20, 30));  // Output: "30 is the largest"
console.log(compareThreeNumbers(100, 50, 75));  // Output: "100 is the largest"
console.log(compareThreeNumbers(7, 7, 7));  // Output: "All numbers are equal"
console.log(compareThreeNumbers(-10, -20, -5));  // Output: "-5 is the largest"
console.log(compareThreeNumbers(3, 8, 8));  // Output: "8 is the largest"