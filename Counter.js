
import { useState, useCallback } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const increase = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  const decrease = useCallback(() => {
    setCount(prev => prev - 1);
  }, []);

  return (
    <>
      <h1>Count: {count}</h1>
      <br />
      <button onClick={increase}>Increase</button>
      &nbsp;&nbsp;
      <button onClick={decrease}>Decrease</button>
    </>
  );
}
