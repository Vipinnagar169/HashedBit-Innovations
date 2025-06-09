
// Q2: Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.

function calculator(num1, num2, operation) {
    let result;
  
    switch (operation) {
      case 'add':
        result = num1 + num2;
        break;
  
      case 'sub':
        result = num1 - num2;
        break;
  
      case 'mul':
        result = num1 * num2;
        break;
  
      case 'div':
        result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
        break;
  
      default:
        result = 'Invalid operation';
    }
  
    return result;
  }
  
  // Example calls
  console.log(calculator(10, 5, 'add')); // 15
  console.log(calculator(10, 5, 'sub')); // 5
  console.log(calculator(10, 5, 'mul')); // 50
  console.log(calculator(10, 5, 'div')); // 2
  