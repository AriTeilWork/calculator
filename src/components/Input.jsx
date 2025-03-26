const InputComponent = ({ value, onChange }) => {
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="input-field"
    />
  );
};

export default InputComponent;