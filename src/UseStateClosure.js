import React, { useState } from "react";

export default function UseStateClosure() {
  const [count, setCount] = useState(0);
  function incrementSync() {
    setCount(count + 1);
  }
  function incrementAsync() {
    setTimeout(() => {
      setCount(count + 1);
      // setCount((count) => count + 1);
    }, 1000);
  }
  // Press Increase Sync and then press Increase Async within 1sec
  // See that count increments by 2
  // But
  // Press Increase Async and then press Increase sync within 1sec
  // See that count increments by only 1

  // It is because function inside setTimout
  // is a stale closure that uses an outdated count variable captured during the initial render.
  // While incrementSync increases count and does re-render

  // But if we use functional way of updating state
  // ie. setCount(count=>count+1) in IncrementAsync then it updates to 2
  // As count provides latest state value

  return (
    <>
      <h1>useState Closure example</h1>
      <button onClick={incrementAsync}>Increase Async</button>
      &nbsp;
      <button onClick={incrementSync}>Increase Sync</button>
      <h2>{count}</h2>
    </>
  );
}
