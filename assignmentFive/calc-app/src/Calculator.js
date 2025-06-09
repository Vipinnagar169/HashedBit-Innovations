import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const calculate = (operator) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult('Enter valid numbers');
      return;
    }

    let res = 0;
    switch (operator) {
      case '+':
        res = a + b;
        break;
      case '-':
        res = a - b;
        break;
      case '*':
        res = a * b;
        break;
      case '/':
        res = b === 0 ? '∞ (Cannot divide by zero)' : a / b;
        break;
      default:
        res = '';
    }
    setResult(res);
  };

  // Styling objects
  const styles = {
    container: {
      maxWidth: '400px',
      margin: '50px auto',
      padding: '30px',
      borderRadius: '12px',
      backgroundColor: '#f4f4f4',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    },
    input: {
      width: '80%',
      padding: '10px',
      margin: '10px 0',
      fontSize: '16px',
      borderRadius: '5px',
      border: '1px solid #ccc'
    },
    button: {
      padding: '10px 15px',
      margin: '8px',
      fontSize: '16px',
      borderRadius: '5px',
      backgroundColor: '#007BFF',
      color: 'white',
      border: 'none',
      cursor: 'pointer'
    },
    result: {
      marginTop: '20px',
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#333'
    },
    title: {
      marginBottom: '20px',
      fontSize: '22px',
      color: '#222'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.title}>📱React Calculator</div>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        style={styles.input}
      />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        style={styles.input}
      />

      <div>
        <button onClick={() => calculate('+')} style={styles.button}>+</button>
        <button onClick={() => calculate('-')} style={styles.button}>-</button>
        <button onClick={() => calculate('*')} style={styles.button}>×</button>
        <button onClick={() => calculate('/')} style={styles.button}>÷</button>
      </div>

      <div style={styles.result}>
        Result: {result !== null ? result : '—'}
      </div>
    </div>
  );
};

export default Calculator;
