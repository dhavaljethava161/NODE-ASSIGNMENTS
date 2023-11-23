/*
Q3. What are the advantages of using promises instead of callbacks?
ans: Promises provide a more structured and flexible approach to handling asynchronous operations compared to traditional callbacks in JavaScript and Node.js. Here are some advantages of using promises over callbacks.

While promises offer these advantages, it's important to note that they are not a silver bullet, and their usage depends on the specific requirements of the application. Async functions and the await keyword, built on top of promises, provide an even more synchronous-looking and expressive way to work with asynchronous code in modern JavaScript.

=> Readability and Maintainability: Promises offer a more linear and readable code structure, especially when dealing with multiple asynchronous operations. This can lead to code that is easier to understand and maintain.

=> Chaining: Promises can be easily chained together using the .then() method. This allows for a more sequential flow of asynchronous operations, making the code more organized and avoiding the "callback hell" or "pyramid of doom" problem that can occur with nested callbacks.

=> Error Handling: Promises have built-in error handling through the .catch() method. This makes it straightforward to handle errors in asynchronous code without cluttering the main code flow. With callbacks, error handling often involves checking error objects in each callback, leading to less concise and more error-prone code.

=> Promise.all(): The Promise.all() method allows you to wait for multiple promises to resolve. This is useful in scenarios where you need the results of multiple asynchronous operations before proceeding.

=> Promise.race(): The Promise.race() method allows you to race multiple promises and get the result of the first one that resolves or rejects. This can be beneficial in scenarios where you want to handle the result from the first asynchronous operation to complete.

=> Easier Refactoring: Promises make it easier to refactor code by separating concerns. Since promises encapsulate the asynchronous operation and its result, it becomes simpler to replace or modify individual parts of the code without affecting the entire structure.

=> Compatibility with Async/Await: Promises serve as the foundation for the async/await syntax, which provides a more synchronous-looking way to write asynchronous code. This can significantly enhance the readability of asynchronous code, making it more similar to traditional synchronous code.

*/
