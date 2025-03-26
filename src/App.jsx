import React, { useState } from 'react';
import InputComponent from './components/Input';
import OperatorComponent from './components/Operator';

const App = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState(null);
  const [result, setResult] = useState(null);

  return (
    <div className="p-4 space-y-4">
      <div className="flex space-x-4">
        <InputComponent value={num1} onChange={setNum1} />
        <InputComponent value={num2} onChange={setNum2} />
      </div>
      <OperatorComponent onSelect={(op) => { setOperator(op); }} />
      {/* Operator and Result components.....*/}
    </div>
  );
};

export default App;