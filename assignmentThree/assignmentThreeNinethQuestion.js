// Q9) Write a function to count the number of words in a paragraph.


function countWords(text) {
    let words = text.split(" ");
    let count = 0;
  
    for (let i = 0; i < words.length; i++) {
      if (words[i] !== "") {
        count++;
      }
    }
  
    return count;
  }
  
  // Example usage
  let para = "I love my country very much ";
  console.log(countWords(para)); // Output: 6
  