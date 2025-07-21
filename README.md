# concurrency

Callback Functions, Promises, and Async/Await in JavaScript/TypeScript
This repository demonstrates the use of callback functions, promises, and async/await in JavaScript/TypeScript to handle
asynchronous operations. The examples include:

Callback Functions:

Demonstrates how to pass a function as an argument to another function (parent function) and execute it after the parent function 
completes its task.

Highlights the concept of nested functions and how control is passed between parent and callback functions.

# Promises:

Shows how to create and handle promises using .then(), .catch(), and .finally().
Includes examples of chaining promises to perform sequential asynchronous tasks.

# Async/Await:

Simplifies asynchronous code by using the async and await keywords.
Demonstrates how to handle asynchronous tasks in a synchronous-like manner.

Key Concepts Covered:
Callback Functions:

Passing functions as arguments.
Control flow between parent and callback functions.

# Promises:

States of a promise: pending, fulfilled, and rejected.
Chaining promises for sequential execution.

# Async/Await:

Writing asynchronous code in a synchronous style.
Error handling with try/catch.

Example Code:
```
function parentFunction(func: () => void) {
  console.log("I am the parent function");
  func();
}

parentFunction(() => {
  console.log("I'm the callback function");
});

Example 2
Washing()
  .then((value) => {
    console.log(value);
    return soaking();
  })
  .then((value) => {
    console.log(value);
    return drying();
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log('Machine is stopped!');
  });
```

Example 3
```
const returnMoney = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Money returned!');
  }, 3000);
});

returnMoney
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log('Error:', error);
  });
```
## Example 4
```
const returnMoney = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Money returned!');
  }, 3000);
});

returnMoney
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log('Error:', error);
  });

Eaxmple 5
async function runWashingMachine() {
  await washing();
  await soaking();
  await drying();
}

runWashingMachine();
```
