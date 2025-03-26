import React, { useState } from 'react';
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
    <div className="p-4 space-y-4">
      <div className="flex space-x-4">
        <InputComponent value={num1} onChange={setNum1} />
        <InputComponent value={num2} onChange={setNum2} />
      </div>
      <OperatorComponent
        onSelect={(op) => {
          setOperator(op);
          calculateResult();
        }}
      />
      <ResultComponent result={result} />
    </div>
  );
};

export default App;