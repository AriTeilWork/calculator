import React, { useState } from 'react';
import './App.css';
import InputComponent from './components/Input';
import OperatorComponent from './components/Operator';
import ResultComponent from './components/Result';

const App = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState(null);
  const [result, setResult] = useState(null);

  const calculateResult = () => {
    if (operator === '+') setResult(num1 + num2);
    else if (operator === '-') setResult(num1 - num2);
    else if (operator === '*') setResult(num1 * num2);
    else if (operator === '/') setResult(num2 !== 0 ? num1 / num2 : 'Error');
  };

  return (
    <div className="calculator">
      <div className="input-container">
        <InputComponent value={num1} onChange={setNum1} />
        <InputComponent value={num2} onChange={setNum2} />
      </div>
      <div className="operator-container">
        <OperatorComponent
          onSelect={(op) => {
            setOperator(op);
            calculateResult();
          }}
        />
      </div>
      <div className="result-container">
        <ResultComponent result={result} />
      </div>
    </div>
  );
};

export default App;