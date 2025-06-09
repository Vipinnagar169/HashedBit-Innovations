// Q4: Create an array of numbers and write a function that uses map() to return a new array with each number squared.

const numbers = [1, 2, 3, 4, 5];

function squareEach(arr) {
  return arr.map(num => num * num);
}

console.log("Squared array:", squareEach(numbers));
