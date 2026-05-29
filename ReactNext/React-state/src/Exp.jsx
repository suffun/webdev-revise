import React, { useState, useEffect } from "react";

function Counter() {
  // 1. State variable
  const [count, setCount] = useState(0);

  // 2. Simulate fetching initial data
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setCount(5); // initial value from "server"
      console.log("Fetched initial count");
    }, 1000);
  }, []);

  // 3. Functions
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const doubleCount = () => setCount(count * 2);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Counter App</h2>

      <h1>{count}</h1>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={doubleCount}>Double</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;