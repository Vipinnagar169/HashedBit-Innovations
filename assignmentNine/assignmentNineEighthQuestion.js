// Q8: Given an object with various properties, write a function that returns an array of the object’s keys using Object.keys().

function extractKeys(obj) {
  return Object.keys(obj);
}

console.log("Keys of object:", extractKeys({ a: 10, b: 20, c: 30 }));
