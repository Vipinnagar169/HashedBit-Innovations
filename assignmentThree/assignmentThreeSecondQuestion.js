// Q2) let str = 'I love my India'
// output expected = 'India my love I'
// Write code for this.


let str = 'I love my India';

// Split string into array of words, reverse it, and join back
let reversed = str.split(' ').reverse().join(' ');

console.log(reversed); // Output: 'India my love I'
