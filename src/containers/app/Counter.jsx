import React, { useState } from "react";
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
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div class="text-center lg:w-2/3 w-full">
            <input type="number" value={step} onChange={handleChangeStep} className="px-4 py-2 shadow-sm rounded-lg outline-none" />
            <p class="my-8 leading-relaxed text-5xl">Counter : {count || 0}</p>
            <div class="flex justify-center">
              <button
                class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
                onClick={decrement}
              >
                Decrement
              </button>
              <button
                class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
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
