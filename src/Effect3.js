import React, { useState, useEffect } from "react";

export default function Effect3() {
  const [time, setTime] = useState(new Date());

  // **Infinite loop**
  // useEffect(() => {
  //   console.log("Effect3");
  //   setTime(new Date());
  // }, [time]);

  // Re-rendering every second
  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(new Date());
    }, 1000);

    // Do cleanup here like cancel ajax requests, clear up rd
    return () => clearTimeout(timer);
  }, [time]);
  return (
    <>
      <h1 style={{ color: "crimson" }}>
        useEffect example3: {time.toLocaleTimeString()}
      </h1>
    </>
  );
}
