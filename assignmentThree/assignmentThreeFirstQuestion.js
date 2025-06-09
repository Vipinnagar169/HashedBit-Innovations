// Q1) Create an array of states in india.
// Remove all the names starting with vowels from the list. Use array.filter.


const indianStates = [
    "Andhra Pradesh", "Uttar Pradesh", "Odisha", "Maharashtra", "Kerala",
    "Tamil Nadu", "Assam", "Bihar", "Rajasthan", "Gujarat", "Haryana",
    "Punjab", "Karnataka", "Telangana", "Uttarakhand"
];

const resultStates = indianStates.filter(function(state) {
    let firstChar = state.charAt(0).toLowerCase();
    return !['a', 'e', 'i', 'o', 'u'].includes(firstChar);
});

console.log("Filtered States:", resultStates);
