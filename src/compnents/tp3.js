// Calculator.js

import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div style={styles.calculator}>
      <div style={styles.display}>{input}</div>
      <div style={styles.buttons}>
        <button style={styles.button} onClick={() => handleButtonClick('7')}>7</button>
        <button style={styles.button} onClick={() => handleButtonClick('8')}>8</button>
        <button style={styles.button} onClick={() => handleButtonClick('9')}>9</button>
        <button style={styles.operatorButton} onClick={() => handleButtonClick('/')}>/</button>
        <button style={styles.button} onClick={() => handleButtonClick('4')}>4</button>
        <button style={styles.button} onClick={() => handleButtonClick('5')}>5</button>
        <button style={styles.button} onClick={() => handleButtonClick('6')}>6</button>
        <button style={styles.operatorButton} onClick={() => handleButtonClick('*')}>*</button>
        <button style={styles.button} onClick={() => handleButtonClick('1')}>1</button>
        <button style={styles.button} onClick={() => handleButtonClick('2')}>2</button>
        <button style={styles.button} onClick={() => handleButtonClick('3')}>3</button>
        <button style={styles.operatorButton} onClick={() => handleButtonClick('-')}>-</button>
        <button style={styles.button} onClick={() => handleButtonClick('0')}>0</button>
        <button style={styles.button} onClick={() => handleButtonClick('.')}>.</button>
        <button style={{ ...styles.button, ...styles.clearButton }} onClick={handleClear}>C</button>
        <button style={styles.calculateButton} onClick={handleCalculate}>=</button>
        <button style={styles.operatorButton} onClick={() => handleButtonClick('+')}>+</button>
      </div>
    </div>
  );
};

const styles = {
  calculator: {
    width: '300px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  display: {
    fontSize: '24px',
    marginBottom: '10px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  buttons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px',
  },
  button: {
    fontSize: '18px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  operatorButton: {
    fontSize: '18px',
    padding: '10px',
    border: '1px solid #ffc107',
    borderRadius: '4px',
    backgroundColor: 'red',
    cursor: 'pointer',
    color: '#fff',
  },
  clearButton: {
    gridColumn: 'span 2',
  },
  calculateButton: {
    gridColumn: 'span 2',
    fontSize: '18px',
    padding: '10px',
    border: '1px solid #28a745',
    borderRadius: '4px',
    backgroundColor: 'black',
    cursor: 'pointer',
    color: '#fff',
  },
};

export default Calculator;
