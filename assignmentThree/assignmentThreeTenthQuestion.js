// Q10) Write a function to reverse a string.
// Input - Hello
// Outpur - olleH


function reverseString(str) {
    let reversed = "";
  
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
  
    return reversed;
  }
  
  // Example
  console.log(reverseString("Hello")); // olleH
  