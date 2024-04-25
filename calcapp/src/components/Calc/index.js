import React, { useState } from 'react';
import './Calc.module.css';

 export const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
  
    const handleButtonClick = (value) => {
      const lastChar = input.slice(-1);
  
      // Check if the last character is an operator
      const isLastCharOperator = ['+', '-', '*', '/'].includes(lastChar);
  
      // Check if the value is an operator and the last character is also an operator
      if (['+', '-', '*', '/'].includes(value) && isLastCharOperator) {
        return;
      }
  
      if (value === '=') {
        try {
          setResult(eval(input).toString());
        } catch (error) {
          setResult('Error');
        }
      } else if (value === 'C') {
        setInput('');
        setResult('');
      } else {
        setInput(input + value);
      }
    };
  
    const renderButton = (value) => (
      <button key={value} onClick={() => handleButtonClick(value)}>
        {value}
      </button>
    );
  
    const buttonValues = [
      '7', '8', '9', '/',
      '4', '5', '6', '*',
      '1', '2', '3', '-',
      '0', '.', '=', '+',
      'C',
    ];
  
    return (
      <div className="calculator">
        <div className="display">
          <div className="input">{input}</div>
          <div className="result">{result}</div>
        </div>
        <div className="buttons">
          {buttonValues.map(renderButton)}
        </div>
      </div>
    );
  };
  

export default Calculator;
