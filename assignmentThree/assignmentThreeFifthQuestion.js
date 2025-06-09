// Q5) Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.


function correctfn(sentence, wrong, correct) {
    let updatedSentence = sentence.replace(wrong, correct);
    return updatedSentence;
  }
  
  // Example:
  let result = correctfn("I luv programming", "luv", "love");
  console.log(result); // Output: I love programming
  