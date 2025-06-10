// Q9: Write a function that takes two objects and merges them into one using Object.assign(). Return the new object.

function mergeTwoObjects(obj1, obj2) {
  return Object.assign({},obj1, obj2);
}

console.log("Merged object:", mergeTwoObjects({ name: "Vipin" }, { age: 22 }));
