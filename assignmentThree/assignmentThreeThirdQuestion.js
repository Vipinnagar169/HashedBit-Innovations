// Q3) let string = 'INDIA'
// output = 'INDONESIA'
// Use array.splice


let string = 'INDIA';

// Step 1: convert string into array 
let arr = string.split(''); // ['I', 'N', 'D', 'I', 'A']

// Step 2: using splice remove the middle characters and insert new 
arr.splice(2, 3, 'D', 'O', 'N', 'E', 'S', 'I', 'A'); 

// Step 3: convert the array into string 
let finalString = arr.join('');

console.log(finalString); // Output: 'INDONESIA'
