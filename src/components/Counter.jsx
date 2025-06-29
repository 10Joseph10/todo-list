import { useState } from "react";
import { useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isValid, setIsValid] = useState(false);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    if (count > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [count]);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
      <button disabled={!isValid} onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;