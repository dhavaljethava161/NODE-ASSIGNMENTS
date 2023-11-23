/*
Q2. Explain callback in Node.js
ans: 
In NodeJs, a callback is a function that is passed as an argument to another function and is executed after the completion of a specific task. Callbacks are a fundamental concept in NodeJs, especially when dealing with asynchronous operations, such as file I/O, network requests, and database queries.

Note: Callbacks are crucial in Node.js because many operations are non-blocking and don't wait for the result to continue executing. Instead of blocking the program, a callback is used to handle the result once it's available. This asynchronous, event-driven approach allows Node.js to efficiently handle a large number of concurrent connections.*/

// Asynchronous function with a callback
function getData(callback) {
  // Simulate an asynchronous operation (e.g., fetching data from a database)
  setTimeout(() => {
    const data = "This is the fetched data";
    // Call the callback function with the fetched data
    callback(data);
  }, 1000); // Simulating a delay of 1 second
}

// Callback function to handle the fetched data
function dataHandler(data) {
  console.log("Received data:", data);
}

getData(dataHandler); // Calling the asynchronous function with the callback

console.log("Fetching data..."); // This line is executed immediately
