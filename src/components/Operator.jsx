const OperatorComponent = ({ onSelect }) => {
  const operators = ['+', '-', '*', '/'];

  return (
    <div className="flex space-x-2">
      {operators.map((operator) => (
        <button
          key={operator}
          onClick={() => onSelect(operator)}
          className="border p-2 rounded-md bg-blue-500 text-white"
        >
          {operator}
        </button>
      ))}
    </div>
  );
};

export default OperatorComponent;
