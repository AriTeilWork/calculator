const ResultComponent = ({ result }) => {
  return (
    <div className="border p-4 rounded-md bg-gray-100 text-center">
      <h2 className="text-xl font-bold">Result: {result}</h2>
    </div>
  );
};

export default ResultComponent;
