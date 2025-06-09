// Q1: Write a JavaScript function that declares a variable using let, const, and var. What is the difference in scope for each?

function scopeExample() {
  var a = "var scope";    // Function scoped
  let b = "let scope";    // Block scoped
  const c = "const scope"; // Block scoped and can't be reassigned

  if (true) {
    var a = "re-declared var";
    let b = "inner let";
    const c = "inner const";
    console.log("Inside block:", a, b, c);
  }

  console.log("Outside block:", a); // 'var' still accessible
  console.log("Outside block:", b, c); // outer 'let' and 'const'
}

scopeExample();
