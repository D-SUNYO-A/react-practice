import { useState } from "react";
import local from "../../utils/local";
import useLocalStorageState from "../../hooks/useLocalStorageState";

const Counter = () => {
  const getCountValueOnlocalStorage = () => {
    return local.get("count");
  };

  const [count, setCount] = useLocalStorageState(
    "count",
    getCountValueOnlocalStorage
  );

  const [step, setStep] = useState(0);

  const handleChangeStep = (event) => {
    setStep(Number(event.target.value) || 0);
  };

  const increment = () => {
    let newCount = (count || 0) + step;
    setCount(newCount);
  };

  const decrement = () => {
    let newCount = (count || 0) - step;
    setCount(newCount);
  };

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container flex flex-col items-center justify-center px-5 py-24 mx-auto">
          <div className="w-full text-center lg:w-2/3">
            <input
              type="number"
              value={step}
              onChange={handleChangeStep}
              className="px-4 py-2 rounded-lg shadow-sm outline-none"
            />
            <p className="my-8 text-5xl leading-relaxed">
              Counter : {count || 0}
            </p>
            <div className="flex justify-center">
              <button
                className="inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200"
                onClick={decrement}
              >
                Decrement
              </button>
              <button
                className="inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200"
                onClick={increment}
              >
                Increment
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
