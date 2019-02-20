import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(10000000);

  useEffect(() => {
    const id = setInterval(() => setCount(count - 1), 50);

    return () => clearInterval(id);
  });

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 10)}>increase</button>
    </div>
  );
};

export default Counter;
