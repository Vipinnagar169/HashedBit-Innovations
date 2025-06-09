// Q3: Write a function that takes an array as an argument, adds a new element to the end using push(), and then removes the last element using pop(). Return the modified array.

function pushAndPop(arr) {
  arr.push("temporary item"); // Add to end
  arr.pop(); // Remove last item
  return arr;
}

console.log("Modified array:", pushAndPop([1, 2, 3]));
