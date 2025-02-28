import { useReducer, useState } from "react";

const intitalState = {count:0,step:1}
const reducer = (state, action) => {
  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - 1 };

    case "inc":
      return { ...state, count: state.count + 1 };
    default: throw new Error("Wrong")
  }
};

function DateCounter() {
 

  const [state,dispatch] = useReducer(reducer,intitalState)
  const {count, step }= state;
  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    // setCount((count) => count - 1);
    dispatch({type:"dec"});
   
  };

  const inc = function () {
    // setCount((count) => count + 1);
    dispatch({type:"inc"});
  };

  const defineCount = function (e) {
    // setCount(Number(e.target.value));
  };

  const defineStep = function (e) {
    // setStep(Number(e.target.value));
  };

  const reset = function () {
    // setCount(0);
    // setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
