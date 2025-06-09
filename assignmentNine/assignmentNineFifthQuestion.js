// Q5: Write a function that filters out all even numbers from an array using the filter() method. Return the new array of odd numbers.

function filterOdd(arr) {
  return arr.filter(num => num % 2 !== 0);
}

console.log("Odd numbers:", filterOdd([1, 2, 3, 4, 5, 6]));
