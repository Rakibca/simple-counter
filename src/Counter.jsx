import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter((currentCount) => {
      return currentCount + 1;
    });
    setCounter((currentCount) => {
      return currentCount + 1;
    });
  }

  return <div onClick={handleClick}>{counter}</div>;
};

export default Counter;
