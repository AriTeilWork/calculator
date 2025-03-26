import React, { useState } from 'react';

const App = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState(null);
  const [result, setResult] = useState(null);

  return (
    <div className="p-4 space-y-4">
      <div className="flex space-x-4">
        {/* Input components.....*/}
      </div>
      {/* Operator and Result components.....*/}
    </div>
  );
};

export default App;