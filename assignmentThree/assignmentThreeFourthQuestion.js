// Q4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string.


let str = "Javascript is amazing!"; // input string (20+ characters)
let vowels = "aeiouAEIOU"; 
let vCount = 0; 
let cCount = 0; 

for (let i = 0; i < str.length; i++) {
  let ch = str[i];

 
  if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z')) {
    if (vowels.includes(ch)) {
      vCount++; 
    } else {
      cCount++; 
    }
  }
}

console.log("Vowels:", vCount);
console.log("Consonants:", cCount);
