const multiply = (a, b) => {
  if (typeof a === "number" && typeof b === "number") {
    return a * b;
  } else {
    console.log("please enter a number");
  }
};
console.log(multiply(3, 4));
module.exports = multiply;
