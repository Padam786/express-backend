//require files from different sources
const divide = require("./divide.js");
const multiply = require("./multiply.js");
const subtract = require("./subtract.js");
const sum = require("./sum.js");
const http = require("http");

// // divide from divide.js
// console.log(divide(3, 4));

// // add from sum.js

// console.log(sum(3, 4));

// // substract from substract.js

// console.log(subtract(3, 4));

// // multiply from multiply.js

// console.log(multiply(3, 4));

const server = http.createServer((req, res) => {
  res.end("hello world");
});

const port = 3000;

server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
