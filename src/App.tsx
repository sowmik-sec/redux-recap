import { decrement, increment } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();
  const n = Array.from({ length: count / 5 }, (_, i) => i + 1);
  console.log(n);
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="">
        <div className="flex border border-purple-300 rounded-md p-10">
          <button
            onClick={() => dispatch(increment())}
            className="px-3 py-2 cursor-pointer rounded-md bg-green-500 text-xl font-semibold text-white"
          >
            Increment
          </button>
          {/* <button
          onClick={() => dispatch(incrementByValue(5))}
          className="px-3 py-2 cursor-pointer rounded-md bg-green-500 text-xl font-semibold text-white"
        >
          Increment by 5
        </button> */}
          <h1 className="text-3xl mx-10">{count}</h1>
          <button
            onClick={() => dispatch(decrement())}
            className="px-3 py-2 rounded-md cursor-pointer bg-green-500 text-xl font-semibold text-white"
          >
            Decrement
          </button>
        </div>
        <div className="flex gap-6 mt-3">
          {" "}
          {n.map((_, i) => (
            <div key={i} className="p-5 bg-amber-500 rounded-md"></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
