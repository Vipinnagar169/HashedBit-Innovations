// Q2: Create an array called fruits that contains five different fruit names. Write a function that returns the second fruit in the array.

const fruits = ["Mango", "Banana", "Apple", "Orange", "Grapes"];

function getSecondFruit() {
  return fruits[1]; // Indexing starts from 0
}

console.log("Second fruit is:", getSecondFruit());
