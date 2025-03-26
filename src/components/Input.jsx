const InputComponent = ({ value, onChange }) => {
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="border p-2 rounded-md w-24 text-center"
    />
  );
};

export default InputComponent;