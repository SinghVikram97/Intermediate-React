import React, { useState, useEffect, useCallback, memo } from "react";

const ExpensiveComputationComponent = memo(({ compute, count }) => {
  return (
    <div>
      <h1>computed: {compute(count)}</h1>
      <h4>last re-render {new Date().toLocaleTimeString()}</h4>
    </div>
  );
});

export default function UseCallback() {
  const [time, setTime] = useState(new Date());
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(new Date());
    }, 1000);

    // Do cleanup here like cancel ajax requests, clear up rd
    return () => clearTimeout(timer);
  }, [time]);

  const fibonacci = (n) => {
    if (n <= 1) {
      return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  return (
    <div>
      <h1>useCallback Example {time.toLocaleTimeString()}</h1>
      <button onClick={() => setCount(count + 1)}>
        current count: {count}
      </button>
      <ExpensiveComputationComponent
        compute={useCallback(fibonacci, [])}
        // compute={fibonacci} uncomment and see it re-renders every single second
        // useCallback gives you referential equality between renders for functions.
        // The difference is that useCallback returns its function when the dependencies change
        // while useMemo calls its function and returns the result.
        count={count}
      />
    </div>
  );
}
