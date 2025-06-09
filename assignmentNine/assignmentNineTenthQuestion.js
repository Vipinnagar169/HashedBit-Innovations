// Q10: Create an array of numbers and write a function that uses reduce() to calculate the sum of all the numbers in the array.

const numList = [5, 10, 15];

function sumNumbers(arr) {
  return arr.reduce((total, value) => total + value, 0);
}

console.log("Sum of array:", sumNumbers(numList));
