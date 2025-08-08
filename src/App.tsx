import useStore from "./store";

function App() {
  const { count, increment, decrement, reset } = useStore();

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">{count}</h1>
      <div className="flex gap-4">
        <button onClick={increment} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          +
        </button>
        <button onClick={decrement} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          -
        </button>
      </div>
      <button onClick={reset} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
        Reset
      </button>
    </div>
  );
}

export default App;

