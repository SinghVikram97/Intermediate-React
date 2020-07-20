import React, { useState, useMemo } from "react";

const fibonacci = (n) => {
  if (n <= 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

export default function () {
  const [isGreen, setIsGreen] = useState(true);
  const [num, setNum] = useState(1);
  // const fib = fibonacci(num);
  const fib = useMemo(() => fibonacci(num), [num]);

  // Use both versions and calculate / take num upto 38 and change state of isGreen
  // 1st one without memo will recalculate fib of 38 which will take time
  // Whereas useMemo will use memoized value of fib 38 already calculated
  // So state change (color change) will occur fase

  // Pass a “create” function and an array of dependencies.
  // useMemo will only recompute the memoized value when one of the dependencies has changed

  //This optimization helps to avoid expensive calculations on every render.

  return (
    <>
      <h1
        onClick={() => setIsGreen(!isGreen)}
        style={{ color: isGreen ? "limegreen" : "crimson" }}
      >
        useMemo Example
      </h1>
      <h2>
        Fibonacci of {num} is {fib}
      </h2>
      <button onClick={() => setNum(num + 1)}>➕</button>
    </>
  );
}
