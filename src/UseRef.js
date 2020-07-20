import React, { useState, useRef } from "react";

export default function UseRefComponent() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0); // Can be used for holding onto dom elements, timeouts, intervals

  function Increment() {
    setCount(count + 1);

    // Ref only has current property
    countRef.current++;

    // countRef.somethingElse (Error)

    setTimeout(() => {
      alert(`State:${count}, Ref:${countRef.current}`);
    }, 1000);
  }

  // countRef always holds the current value
  // While count in alert shows outdated count value due to closure
  // When we setCount count becomes 1
  // It re-renders
  // And setTimeout delay function captures count=0 before render
  // And we alert(count) it shows previous value only (previous version of state)

  // Press it continously 2 times and see same

  // No problem in class components though

  return (
    <>
      <h1>Use Ref example</h1>
      <button onClick={Increment}>Delay Logging</button>
      <h2>state: {count}</h2>
      <h2>ref: {countRef.current}</h2>
    </>
  );
}
