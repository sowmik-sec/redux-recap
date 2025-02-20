function App() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex border border-purple-300 rounded-md p-10">
        <button className="px-3 py-2 cursor-pointer rounded-md bg-green-500 text-xl font-semibold text-white">
          Increment
        </button>
        <h1 className="text-3xl mx-10">0</h1>
        <button className="px-3 py-2 rounded-md cursor-pointer bg-green-500 text-xl font-semibold text-white">
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
