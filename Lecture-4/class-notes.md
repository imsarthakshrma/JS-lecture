## Key Topics for Day 4:

### Functions (Review):

* Anonymous Functions
* Arrow Functions (ES6)

### Array Methods:

* `forEach()`
* `map()`
* `filter()`

### Loops (Review and Expansion):

* `for` loop
* `for...of` loop

### Introduction to Higher-Order Functions:

* Understanding how functions can take other functions as arguments

## Let's Dive Deep into These Topics:

### 1. Functions (Review)

**Anonymous Functions:**

An anonymous function is simply a function that doesn't have a name. These are often used as arguments to other functions or for short-lived tasks where naming them isn't necessary. They can be defined in two ways:

```javascript
let greet = function() {
  console.log("Hello!");
};
greet(); // Output: Hello!
```

Here, `greet` is a variable holding an anonymous function. Though it has no name, it behaves like any other function.

Anonymous functions are typically used with array methods or event handlers.

**Example:**

```javascript
setTimeout(function() {
  console.log("This runs after 2 seconds!");
}, 2000);
```

**Arrow Functions (ES6):**

Arrow functions provide a concise way to write functions. They don't require the `function` keyword and have a different way of handling the `this` keyword (important in object-oriented programming, which we'll get to later).

**Syntax:**

```javascript
const greet = () => {
  console.log("Hello, Arrow Function!");
};
greet(); // Output: Hello, Arrow Function!
```

Arrow functions are especially useful when you want to simplify functions into a single line of code.

**Example (One-liner):**

```javascript
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5
```

Notice there's no need for curly braces or a return keyword when you have a single line returning a value.

### 2. Array Methods: `forEach()`, `map()`, `filter()`

**`forEach()`:**

This method allows you to loop through an array and execute a function on each element. It doesn't return a new array; it simply iterates over the existing array.

**Syntax:**

```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(num) {
  console.log(num);
});
```

**Explanation:**

- The `forEach()` method takes a function (called a callback) as an argument.
- It will execute this function for every element in the array.

**Deeper Dive:**

- `forEach()` is mainly used when you don't need to modify the array but simply want to perform some action, like printing elements or updating the DOM.

**`map()`:**

The `map()` method is used to transform an array. It returns a new array where each element has been modified by the provided function.

**Syntax:**

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(num) {
  return num * 2;
});
console.log(doubled); // Output: [2, 4, 6, 8, 10]
```

**Deeper Dive:**

- Notice that `map()` doesn't change the original array—it creates a new one. This is important for immutability (keeping data unchanged), which is useful in React and other modern frameworks.

**`filter()`:**

The `filter()` method returns a new array containing only elements that pass a test (specified by a function).

**Syntax:**

```javascript
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(function(num) {
  return num % 2 === 0;
});
console.log(evens); // Output: [2, 4]
```

**Deeper Dive:**

- `filter()` is often used when you want to reduce an array based on a condition. It's great for removing unwanted values or selecting specific ones.

### 3. Loops (Review and Expansion)

**`for` Loop:**

The `for` loop is a basic looping structure in JavaScript. It's typically used when you know how many times you want to iterate.

**Syntax:**

```javascript
const numbers = [1, 2, 3];
for (let num of numbers) {
    console.log(num); // Output: 1, 2, 3
}

Deeper dive: for...of is simpler and more readable than traditional for loops when working with arrays and strings. It focuses on values rather than indices.