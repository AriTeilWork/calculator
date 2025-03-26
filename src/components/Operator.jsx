const OperatorComponent = ({ onSelect }) => {
  const operators = ['+', '-', '*', '/'];

  return (
    <div className="operator-buttons">
      {operators.map((operator) => (
        <button
          key={operator}
          onClick={() => onSelect(operator)}
          className="operator-button"
        >
          {operator}
        </button>
      ))}
    </div>
  );
};

export default OperatorComponent;
